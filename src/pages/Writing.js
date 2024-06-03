import React, { useState } from 'react';
import '../css/writing.css'
import * as hangul from 'hangul-js';


export default function Writing(props) {
    const [writingAreaText, setWritingAreaText] = useState('');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);

    const questions = [
        {
            question: 'What is the word for "School" in Korean?',
            answer: '학교'
        },
        {
            question: 'What is the word for "House" in Korean?',
            answer: '집'
        },
        {
            question: 'What is the word for "Study" in Korean?',
            answer: '공부'
        },
        {
            question: 'What is the word for "Hello" (formal) in Korean?',
            answer: '안녕하세요'
        }
    ];

    const question = questions[questionIndex];

    const selectCharacter = (char) => {
        setWritingAreaText(hangul.assemble(writingAreaText + char));
    };

    const deleteCharacter = () => {
        setWritingAreaText(writingAreaText.slice(0, -1));
        setShowFeedback(false);
    };

    const handleSubmit = () => {
        setShowFeedback(true);
    };

    const goToNextQuestion = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setShowFeedback(false);
            setWritingAreaText('');
        } else {
            // End of quiz
        }
    };

    const goToPreviousQuestion = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
            setShowFeedback(false);
            setWritingAreaText('');
        }
    };

    return (
        <main>
            <h1 className="writing-header">Practice Typing Words!</h1>

            <p>{question.question}</p>
            <div id="writing-area">{writingAreaText}</div>
            {showFeedback && (
                <div className="feedback">
                    {writingAreaText === question.answer ? "Correct!" : "Wrong answer"}
                </div>
            )}
            <div className="navigation-buttons">
                <button className="prev-button" onClick={goToPreviousQuestion} disabled={questionIndex === 0}>Previous</button>
                 <button className="next-button" onClick={goToNextQuestion} disabled={questionIndex === questions.length - 1}>Next</button>
            </div>
            <div className="grid-container">

                <div className="grid-item" onClick={() => selectCharacter('ㄱ')}>ㄱ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㄴ')}>ㄴ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㄷ')}>ㄷ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㄹ')}>ㄹ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅁ')}>ㅁ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅂ')}>ㅂ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅅ')}>ㅅ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅇ')}>ㅇ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅈ')}>ㅈ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅊ')}>ㅊ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅋ')}>ㅋ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅌ')}>ㅌ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅍ')}>ㅍ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅎ')}>ㅎ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㄲ')}>ㄲ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㄸ')}>ㄸ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅃ')}>ㅃ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅆ')}>ㅆ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅉ')}>ㅉ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅏ')}>ㅏ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅑ')}>ㅑ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅓ')}>ㅓ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅕ')}>ㅕ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅗ')}>ㅗ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅛ')}>ㅛ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅜ')}>ㅜ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅠ')}>ㅠ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅡ')}>ㅡ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅣ')}>ㅣ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅐ')}>ㅐ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅒ')}>ㅒ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅔ')}>ㅔ</div>
                <div className="grid-item" onClick={() => selectCharacter('ㅖ')}>ㅖ</div>
                <div className="grid-item" onClick={() => selectCharacter(' ')}>Space</div>
                <div className="grid-item" onClick={deleteCharacter}>Delete</div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </main>
    );
}