import React, { useState } from 'react';
import '../css/quizzes.css';

function Quizzes() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const quizQuestions = [
        {
            questionText: "안녕하세요 means what in korean?",
            options: ["Hello (formal)", "How are you?", "Hello (informal)", "Goodbye (formal)"],
            correctAnswer: "Hello (formal)"
        },
        {
            questionText: "제 이름은 means what in korean?",
            options: ["My name is __", "Thank you", "I am __", "I'm fine, thank you"],
            correctAnswer: "My name is __"
        },
        {
            questionText: "감사합니다",
            options: ["Thank you (formal)", "Thank you (informal)", "No thank you", "I'm good, thank you"],
            correctAnswer: "Thank you (formal)"
        }
    ];

    const question = quizQuestions[currentQuestionIndex];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowFeedback(true);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowFeedback(false);
        } else {
            // End of quiz
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null);
            setShowFeedback(false);
        }
    };

    const startQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div className="app-container"> 
            <main className="main-content">
                <section className="challenge-section">
                    <div className="content-wrapper">
                        {!showQuiz ? ( 
                            <div>
                                <img src="img/quizzes.png" alt="Quiz Image" />
                                <button className="start-button" onClick={startQuiz}>
                                    Start Quiz
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="character-display">
                                    <div className="character-box">
                                        <p>{question.questionText}</p>
                                    </div>
                                </div>

                                <div className="choices" role="radiogroup">
                                    {question.options.map((option, index) => (
                                        <div 
                                            className={`choice ${selectedOption === option ? (option === question.correctAnswer ? 'correct' : 'incorrect') : ''}`} 
                                            key={index} 
                                            onClick={() => handleOptionClick(option)} 
                                            tabIndex="0" 
                                            role="radio" 
                                            aria-checked={selectedOption === option}
                                        >
                                            <span className="label">{index + 1}.</span>
                                            <span className="text">{option}</span>
                                        </div>
                                    ))}
                                </div>

                                {showFeedback && (
                                    <div className="feedback">
                                        {selectedOption === question.correctAnswer ? "Correct!" : "Wrong answer"}
                                    </div>
                                )}

                                <div className="navigation-buttons">
                                    <button className="prev-button" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
                                    <button className="next-button" onClick={goToNextQuestion}>{currentQuestionIndex === quizQuestions.length - 1 ? 'Finish' : 'Next'}</button>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Quizzes;