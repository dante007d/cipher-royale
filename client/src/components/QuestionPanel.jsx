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
    <div className={`question-panel ${showFeedback ? (lastAnswerCorrect ? 'correct' : 'wrong') : ''}`}>
      {showFeedback && (
        <div className="feedback-overlay">
          <div className="feedback-content">
            {lastAnswerCorrect ? (
              <span className="feedback-icon correct">✅ CORRECT! (+{useGameStore.getState().lastTokensAwarded} Tokens)</span>
            ) : (
              <span className="feedback-icon wrong">❌ WRONG! (Cooldown...)</span>
            )}
          </div>
        </div>
      )}

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

      <div className="question-text">{currentQuestion.text}</div>

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
  );
}
