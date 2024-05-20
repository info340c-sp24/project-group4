import React, { useState } from 'react';
import '../css/wordpage.css';

function WordPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const questions = [
        {
            character: "아",
            options: ['a', 'e', 'i'],
            correctAnswer: 'a'
        },
        {
            character: "이",
            options: ['e', 'a', 'o'],
            correctAnswer: 'e'
        },
        {
            character: "우",
            options: ['u', 'o', 'a'],
            correctAnswer: 'u'
        }
    ];

    const question = questions[currentQuestionIndex];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowFeedback(true);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowFeedback(false);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null);
            setShowFeedback(false);
        }
    };

    return (
        <div className='wordpage'>
            <div className="app-container">
                <main className="main-content">
                    <section className="challenge-section">
                        <div className="content-wrapper">
                            <h2>What sound does this make?</h2>
                            <div className="character-display">
                                <div className="character-box">
                                    <span className="korean-character" lang="ko">{question.character}</span>
                                </div>
                            </div>
                            
                            <div className="choices" role="radiogroup">
                                {question.options.map((option, index) => (
                                    <div className="choice" key={index} onClick={() => handleOptionClick(option)} tabIndex="0" role="radio" aria-checked={selectedOption === option}>
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
                                <button className="prev-button" onClick={goToPreviousQuestion}>Previous</button>
                                <button className="next-button" onClick={goToNextQuestion}>Next</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default WordPage;
