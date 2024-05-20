import React, { useState } from 'react';
import '../css/writing.css'
import * as hangul from 'hangul-js';


export default function Writing(props) {
    const [writingAreaText, setWritingAreaText] = useState('');
    const [question, setQuestion] = useState('What is the word for "School" in Korean?');

    const questions = [
        {}
    ]

    const selectCharacter = (char) => {
        setWritingAreaText(hangul.assemble(writingAreaText + char));
    };

    const deleteCharacter = () => {
        setWritingAreaText(writingAreaText.slice(0, -1));
    };

    const handleSubmit = () => {
        console.log('Submitted:', writingAreaText);
    };

    return (
        <main>
            <h1 className="writing-header">Practice Typing Words!</h1>

            <p>{question}</p>
            <div id="writing-area">{writingAreaText}</div>
            <div className="grid-container">
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
                <div className="grid-item" onClick={deleteCharacter}>Delete</div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </main>
    );
}