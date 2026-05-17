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
    "Calling you trash is disrespectful to garbage. Garbage gets recycled into something useful.",
    "You play like your monitor is turned off and your ego is turned up.",
    "Every second you stay alive is statistical luck.",
    "You’re not feeding the enemy. You’re running a charity.",
    "Your gameplay has the survival instinct of a moth in a furnace.",
    "You fight like someone typing with oven mitts.",
    "Your enemies aren’t even impressed anymore. They’re concerned.",
    "You have the mechanical precision of a collapsing shopping cart.",
    "Watching you play explains why natural selection takes time.",
    "You bring absolutely nothing to the battlefield except extra deaths.",
    "Your aim belongs in a missing persons report.",
    "You move like your brain and hands are in a long-distance relationship.",
    "Even your own teammates mentally disconnected from you.",
    "You’re the kind of noob tutorials warn people about.",
    "Your opponent isn’t skilled. You’re just catastrophically incompetent.",
    "You got destroyed so badly the replay should be classified as violence.",
    "Every fight becomes easier the moment you join the enemy team accidentally.",
    "You play like failure is genetically encoded.",
    "Your confidence survives longer than your character ever does.",
    "You make basic mistakes with professional consistency.",
    "Even bots would hesitate before making decisions this stupid.",
    "You’re not hardstuck because of teammates. You are the teammate.",
    "Your gameplay looks like a parody made to insult bad players.",
    "You die with such speed and consistency it feels automated.",
    "You enter fights like a motivational speaker and leave like roadkill.",
    "You couldn’t clutch a single neuron together under pressure.",
    "You aim at enemies like you’re politely asking permission to hit them.",
    "Your strategy begins with panic and ends with excuses.",
    "You have the tactical awareness of a wet sock.",
    "Your performance lowered the value of teamwork.",
    "You got outplayed so hard your keyboard deserves a better owner.",
    "You play like you owe the enemy team money.",
    "You’re not learning from mistakes anymore. You’re preserving traditions.",
    "The only thing carrying you is delusion.",
    "You lose fights before they even begin because your decisions are terminally bad.",
    "You make incompetence look effortless.",
    "Your mechanics are so bad they loop back into comedy.",
    "You fight like your thoughts are buffering.",
    "You’re what happens when confidence outruns intelligence.",
    "The enemy isn’t farming kills anymore. They’re farming self-esteem.",
    "You bring the same energy as a broken controller at a tournament.",
    "You got read so easily your opponent probably predicted your birth date too.",
    "You are the final boss of poor decision-making.",
    "Your gameplay belongs in a cautionary documentary.",
    "You have the awareness of decorative furniture.",
    "You’re not unlucky. You’re just bad repeatedly.",
    "Your existence in this lobby is a competitive disadvantage.",
    "You play with the intensity of a man trying to lose on purpose.",
    "Even spectators are getting tilted watching this incompetence.",
    "You got folded so fast the laws of physics took notes.",
    "Your enemies stopped sweating and started experimenting.",
    "You’re not a threat. You’re warm-up content.",
    "The arena doesn’t fear you. It farms you.",
    "You got humiliated so hard even the game stopped trying to make it fair.",
    "You play with maximum ego and minimum awareness.",
    "Your mechanics look hand-crafted to fail under pressure.",
    "You are what happens when failure gets a keyboard.",
    "Every time you respawn, the enemy gets a confidence boost.",
    "You’re not built for competition. You’re built for tutorials.",
    "You fight like your brain clocked out before the match started.",
    "The scoreboard tells a story, and your chapter is pure suffering.",
    "Even your lucky moments look accidental.",
    "You don’t lose because the enemy is good. You lose because you exist in the fight.",
    "You’re not getting outplayed anymore. You’re getting studied.",
    "You make bad decisions with the certainty of a genius.",
    "The enemy team treats you like free downloadable content.",
    "You got dismantled so completely the scoreboard looks disrespectful.",
    "You’re not trash. Trash eventually gets taken out.",
    "The only thing carrying you is matchmaking mercy.",
    "You’re the reason tutorials include pictures."
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
      {showFeedback && !lastAnswerCorrect && (
        <div className="feedback-overlay" style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.55), rgba(127, 29, 29, 0.98))',
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
              COOLDOWN LOCK ACTIVE (4s)...
            </p>
          </div>
        </div>
      )}

      <div className={`question-panel ${showFeedback ? (lastAnswerCorrect ? 'correct' : 'wrong') : ''}`}>
        {showFeedback && lastAnswerCorrect && (
          <div className="feedback-overlay-correct" style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(6, 78, 59, 0.98))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99,
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <span style={{ fontSize: '1.3rem', fontWeight: '900', color: '#ffffff', fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
              ✅ CORRECT! (+{useGameStore.getState().lastTokensAwarded} Tokens)
            </span>
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
