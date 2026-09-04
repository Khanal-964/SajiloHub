import React, { useState, useEffect } from 'react';

const MiniQuiz = ({ groupName, type, characters, onClose, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Generate questions dynamically
    if (!characters || characters.length === 0) return;

    const generated = characters.map((charObj) => {
      // Question type 0: Show character, find Romaji
      // Question type 1: Show Romaji, find Character
      const questionType = Math.random() > 0.5 ? 0 : 1;
      
      // Select 3 random distractors from the same character set or other characters
      const otherChars = characters.filter((c) => c.id !== charObj.id);
      // Shuffle other characters to get random distractors
      const shuffledOthers = [...otherChars].sort(() => 0.5 - Math.random());
      const distractors = shuffledOthers.slice(0, 3);

      const options = [];
      if (questionType === 0) {
        options.push(charObj.romaji);
        distractors.forEach((d) => options.push(d.romaji));
      } else {
        options.push(charObj.char);
        distractors.forEach((d) => options.push(d.char));
      }

      // Shuffle options
      const shuffledOptions = options.sort(() => 0.5 - Math.random());

      return {
        target: charObj,
        type: questionType,
        prompt: questionType === 0 ? `Which Romaji matches this character: "${charObj.char}"?` : `Which character represents the sound: "${charObj.romaji}"?`,
        correctAnswer: questionType === 0 ? charObj.romaji : charObj.char,
        options: shuffledOptions
      };
    });

    setQuestions(generated);
    setCurrentQuestionIdx(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuizFinished(false);
  }, [characters]);

  const handleAnswerSelect = (option) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const correct = option === questions[currentQuestionIdx].correctAnswer;
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (onComplete) {
        onComplete(score + (selectedAnswer === questions[currentQuestionIdx].correctAnswer ? 1 : 0), questions.length);
      }
    }
  };

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIdx];

  return (
    <div style={styles.quizOverlay}>
      <div style={styles.quizCard}>
        <div style={styles.quizHeader}>
          <h3>📝 {groupName} Quick Quiz ({type.toUpperCase()})</h3>
          <button onClick={onClose} style={styles.closeBtn}>&times;</button>
        </div>

        {!quizFinished ? (
          <div>
            <div style={styles.progressBarWrapper}>
              <div 
                style={{
                  ...styles.progressBar,
                  width: `${((currentQuestionIdx + 1) / questions.length) * 100}%`
                }}
              />
            </div>

            <div style={styles.questionNum}>
              Question {currentQuestionIdx + 1} of {questions.length}
            </div>

            <div style={styles.questionPrompt}>
              {currentQuestion.prompt}
            </div>

            <div style={styles.optionsContainer}>
              {currentQuestion.options.map((option, idx) => {
                const isCorrect = option === currentQuestion.correctAnswer;
                const isSelected = option === selectedAnswer;
                
                let buttonStyle = { ...styles.optionBtn };
                if (isAnswered) {
                  if (isCorrect) {
                    buttonStyle = { ...buttonStyle, ...styles.correctBtn };
                  } else if (isSelected) {
                    buttonStyle = { ...buttonStyle, ...styles.incorrectBtn };
                  } else {
                    buttonStyle = { ...buttonStyle, ...styles.disabledBtn };
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={isAnswered}
                    style={buttonStyle}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div style={styles.feedbackContainer}>
                <p style={selectedAnswer === currentQuestion.correctAnswer ? styles.feedbackCorrect : styles.feedbackIncorrect}>
                  {selectedAnswer === currentQuestion.correctAnswer ? '🎉 Correct!' : `❌ Incorrect! The correct answer was ${currentQuestion.correctAnswer}.`}
                </p>
                <button onClick={handleNext} style={styles.nextBtn}>
                  {currentQuestionIdx === questions.length - 1 ? 'Finish Quiz' : 'Next Question →'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={styles.resultsContainer}>
            <div style={styles.trophyIcon}>🏆</div>
            <h2>Quiz Completed!</h2>
            <p style={styles.scoreText}>You scored <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
            <p style={styles.motivationText}>
              {score === questions.length 
                ? '素晴らしい! Perfect score! You have mastered this group.' 
                : 'よくできました! Good effort! Practice more to get a perfect score.'}
            </p>
            <button onClick={onClose} style={styles.finishCloseBtn}>
              Back to Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  quizOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(26, 26, 46, 0.65)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1100,
    padding: '20px'
  },
  quizCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.45)',
    borderRadius: '24px',
    boxShadow: 'var(--shadow-lg)',
    width: '100%',
    maxWidth: '500px',
    padding: '30px',
    animation: 'fadeInUp 0.3s ease-out'
  },
  quizHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '15px'
  },
  closeBtn: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    padding: '0 5px',
    lineHeight: '1'
  },
  progressBarWrapper: {
    height: '6px',
    backgroundColor: 'var(--border)',
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '15px'
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'var(--primary)',
    transition: 'width 0.3s ease'
  },
  questionNum: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px'
  },
  questionPrompt: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '24px',
    lineHeight: '1.4'
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '24px'
  },
  optionBtn: {
    padding: '16px 20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    textAlign: 'left',
    backgroundColor: '#fff',
    border: '2px solid var(--border)',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: 'var(--text-primary)'
  },
  correctBtn: {
    backgroundColor: '#e6f7ed',
    borderColor: '#2e7d32',
    color: '#1b5e20',
    fontWeight: '700'
  },
  incorrectBtn: {
    backgroundColor: '#fdeded',
    borderColor: '#d32f2f',
    color: '#c62828',
    fontWeight: '700'
  },
  disabledBtn: {
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderColor: 'var(--border)',
    color: 'var(--text-muted)',
    cursor: 'default'
  },
  feedbackContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    marginTop: '20px',
    animation: 'fadeIn 0.2s ease'
  },
  feedbackCorrect: {
    color: '#2e7d32',
    fontWeight: '700',
    fontSize: '1.1rem'
  },
  feedbackIncorrect: {
    color: '#d32f2f',
    fontWeight: '700',
    fontSize: '1.1rem'
  },
  nextBtn: {
    padding: '12px 24px',
    backgroundColor: 'var(--primary)',
    color: '#fff',
    borderRadius: '12px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(196, 30, 58, 0.2)',
    transition: 'all 0.2s ease',
    width: '100%'
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px 0'
  },
  trophyIcon: {
    fontSize: '4rem',
    marginBottom: '15px'
  },
  scoreText: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: 'var(--text-primary)'
  },
  motivationText: {
    color: 'var(--text-secondary)',
    marginBottom: '30px',
    fontSize: '1.05rem',
    lineHeight: '1.5'
  },
  finishCloseBtn: {
    padding: '14px 28px',
    background: 'var(--primary-gradient)',
    color: '#fff',
    borderRadius: '20px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(196, 30, 58, 0.3)',
    width: '100%'
  }
};

export default MiniQuiz;
