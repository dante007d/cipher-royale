import { useState, useEffect, useRef } from 'react';
import useGameStore from '../store/gameStore.js';
import SocketService from '../services/SocketService.js';
import SoundService from '../services/SoundService.js';
import { answerDebounce } from '../input/AnswerDebounce.js';

export default function QuestionPanel() {
  const questionState = useGameStore((s) => s.questionState);
  const currentQuestion = useGameStore((s) => s.currentQuestion);
  const lastAnswerCorrect = useGameStore((s) => s.lastAnswerCorrect);
  const tokens = useGameStore((s) => s.tokens);
  
  const [timeLeft, setTimeLeft] = useState(15000);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [fillInput, setFillInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const timerRef = useRef(null);
  const roasts = [
    "GO GET A JOB!",
    "Are you trying to lose, or is this your actual intellectual limit?",
    "Your brain is running on Dial-Up speed. Absolutely pathetic.",
    "Please delete the game, close your laptop, and go flip some burgers.",
    "Even a coin flip has a 50% chance. Yet you still failed.",
    "Did you drop out of kindergarten, or are you just copy-pasting your failures?",
    "I've seen lettuce with better analytical skills than this.",
    "Please never try to calculate anything in real life. It is highly dangerous for you.",
    "This answer is an insult to mathematics, science, and common sense.",
    "If failure was an Olympic sport, you'd be a gold medalist.",
    "My dead grandmother can solve this faster, and she doesn't even have a pulse.",
    "You are the exact reason why shampoo bottles have instructions."
  ];

  const [activeRoast, setActiveRoast] = useState('');

  // Listen for new questions from server
  useEffect(() => {
    SocketService.on('new_question', (q) => {
      answerDebounce.onNewQuestion(); // Clear debounce locks
      setShowFeedback(false);
      useGameStore.getState().setQuestion(q);
      setTimeLeft(q.timeLimit || 15000);
      setSelectedAnswer(null);
      setFillInput('');
      SoundService.playNewQuestion();
    });

    SocketService.on('answer_result', (data) => {
      useGameStore.getState().answerResult(data.correct, data.tokensAwarded, data.newTotal);
      if (!data.correct) {
        const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
        setActiveRoast(randomRoast);
      }
      setShowFeedback(true);
      if (data.correct) {
        SoundService.playCorrect();
      } else {
        SoundService.playWrong();
      }
    });

    return () => {
      SocketService.off('new_question');
      SocketService.off('answer_result');
      answerDebounce.destroy();
    };
  }, []);

  // Question timer
  useEffect(() => {
    if (questionState !== 'QUESTION' || !currentQuestion) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 100) {
          clearInterval(timerRef.current);
          return 0;
        }
        return t - 100;
      });
    }, 100);
    return () => clearInterval(timerRef.current);
  }, [questionState, currentQuestion?.id]);

  const submitAnswer = (answer) => {
    if (questionState !== 'QUESTION' || !currentQuestion) return;
    
    // ── DEBOUNCE PROTECTION ─────────────────────────────────────
    const info = window.__cipherClash || {};
    const success = answerDebounce.trySubmit(
      currentQuestion.id,
      answer,
      (event, payload) => {
        payload.roomCode = info.roomCode;
        SocketService.emit(event, payload);
      }
    );

    if (success) {
      setSelectedAnswer(answer);
    } else {
      console.warn('[QuestionPanel] Answer double-submit blocked by debounce.');
    }
  };

  const handleFillSubmit = (e) => {
    e.preventDefault();
    if (fillInput.trim() && !showFeedback) submitAnswer(fillInput.trim());
  };

  if (!currentQuestion) return null;

  return (
    <>
      {showFeedback && (
        <div className="feedback-overlay" style={{
          position: 'fixed',
          inset: 0,
          background: lastAnswerCorrect 
            ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 78, 59, 0.95))' 
            : 'linear-gradient(135deg, rgba(239, 68, 68, 0.55), rgba(127, 29, 29, 0.98))',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          animation: 'fadeIn 0.25s ease-out',
          color: '#ffffff',
          fontFamily: 'var(--font-display)',
          textAlign: 'center',
          padding: '20px',
          pointerEvents: 'all'
        }}>
          {lastAnswerCorrect ? (
            <div style={{ transform: 'scale(1)', transition: 'transform 0.3s ease' }}>
              <h1 style={{ fontSize: '4.5rem', textShadow: '0 0 40px #10b981', color: '#10b981', fontWeight: '900', letterSpacing: '0.1em', margin: '0 0 10px 0' }}>
                CORRECT!
              </h1>
              <p style={{ fontSize: '1.6rem', color: '#a7f3d0', marginTop: '10px', letterSpacing: '0.05em' }}>
                +{useGameStore.getState().lastTokensAwarded} TOKENS AWARDED
              </p>
            </div>
          ) : (
            <div style={{ animation: 'hpShake 0.4s ease-in-out infinite' }}>
              <h1 style={{ fontSize: '5rem', textShadow: '0 0 45px #ef4444', color: '#ef4444', fontWeight: '900', letterSpacing: '0.15em', margin: '0 0 20px 0' }}>
                WRONG ANSWER!
              </h1>
              <div style={{
                marginTop: '15px',
                padding: '30px 45px',
                background: 'rgba(10, 10, 10, 0.85)',
                border: '3px solid #ef4444',
                borderRadius: '20px',
                boxShadow: '0 0 60px rgba(239, 68, 68, 0.45)',
                maxWidth: '700px'
              }}>
                <p className="roast-text" style={{ fontSize: '2.2rem', color: '#ffffff', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0, lineHeight: '1.3' }}>
                  "{activeRoast}"
                </p>
              </div>
              <p style={{ fontSize: '1.3rem', color: '#fca5a5', marginTop: '30px', opacity: 0.85, letterSpacing: '0.15em' }}>
                COOLDOWN LOCK ACTIVE (3s)...
              </p>
            </div>
          )}
        </div>
      )}

      <div className={`question-panel ${showFeedback ? (lastAnswerCorrect ? 'correct' : 'wrong') : ''}`}>
        <div className="question-header">
          <span className={`question-difficulty ${currentQuestion.difficulty}`}>
            {currentQuestion.difficulty}
          </span>
          <div className="question-timer-bar">
            <div 
              className="question-timer-fill" 
              style={{ 
                width: `${(timeLeft / (currentQuestion.timeLimit || 15000)) * 100}%`,
                backgroundColor: timeLeft < 5000 ? '#ef4444' : '#06b6d4'
              }} 
            />
          </div>
        </div>

        {/* Structured C Code and Question description block renderer */}
        <div className="question-content-wrapper" style={{ marginBottom: '16px' }}>
          {(() => {
            const text = currentQuestion.text;
            if (currentQuestion.language === 'c' || text.includes('#include')) {
              const parts = text.split('\n\n');
              const questionDesc = parts[0];
              const codePart = parts.slice(1).join('\n\n');
              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="question-text" style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f1f5f9', margin: 0 }}>
                    {questionDesc}
                  </div>
                  {codePart && (
                    <pre style={{
                      background: '#020617',
                      border: '1.5px solid rgba(6, 182, 212, 0.25)',
                      borderRadius: '10px',
                      padding: '12px',
                      fontFamily: 'Consolas, Monaco, "Fira Code", monospace',
                      fontSize: '0.85rem',
                      color: '#22d3ee',
                      overflowX: 'auto',
                      textAlign: 'left',
                      lineHeight: '1.45',
                      whiteSpace: 'pre',
                      margin: 0,
                      boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                      <code>{codePart}</code>
                    </pre>
                  )}
                </div>
              );
            }
            return (
              <div className="question-text" style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                {text}
              </div>
            );
          })()}
        </div>

        {currentQuestion.type === 'fill_blank' ? (
          <form onSubmit={handleFillSubmit} className="fill-blank-container">
            <input
              className="question-input"
              type="text"
              placeholder="Type answer..."
              value={fillInput}
              onChange={(e) => setFillInput(e.target.value)}
              disabled={questionState !== 'QUESTION'}
              autoFocus
            />
            <button
              className="btn-primary"
              type="submit"
              disabled={questionState !== 'QUESTION' || !fillInput.trim()}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="question-options">
            {(currentQuestion.options || []).map((opt, i) => (
              <button
                key={i}
                className={`question-option-btn ${selectedAnswer === opt ? (lastAnswerCorrect ? 'correct' : 'wrong') : ''}`}
                onClick={() => submitAnswer(opt)}
                disabled={questionState !== 'QUESTION'}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
