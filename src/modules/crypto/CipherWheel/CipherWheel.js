import React, { useEffect, useState } from 'react';
import './CipherWheel.css';
import outerWheel from './outerWheel.png';
import innerWheel from './innerWheel.png';

function CipherWheel() {
    // these are hooks to maintain and update the state of the page (the text encryption and wheel rotation)
    const [shift, setShift] = useState(0);
    const [inputText, setInputText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    // useEffect hook is used to update the encrypted text
    useEffect(() => {
        const updateEncryptedText = () => {
            // this ASCII math increments all the characters in the string when the shift is updated
            const encrypted = inputText.toUpperCase().replace(/[A-Z]/g, char => 
                String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65)
            );
            setEncryptedText(encrypted); // updates the state of the encrypted text via hook
        };

        updateEncryptedText();
    }, [inputText, shift]); // these dependencies mean that when inputText or shift is updated, the function will run

    // handler for wheel click
    const handleWheelClick = () => {
        // cycles the shift from 0 to 25
        setShift(prevShift => (prevShift + 1) % 26);
    };

    // handler for text input
    const handleTextInput = (event) => {
        // just updates the input text
        // since input text is a dependency of the useEffect hook, updating it will cause the updateEncryptedText to run
        setInputText(event.target.value);
    };

    return (
        <div class="cipherWheel">
            <h2>Caeser Cipher: click the wheel to encrypt your message</h2>
            
            <div id="cipherWheelContainer" onClick={handleWheelClick}>
                <img src={outerWheel} id="outerWheel" alt="Outer Cipher Wheel" style={{ transform: `translate(-50%, -50%) rotate(${-shift * (360 / 26)}deg)` }} />
                <img src={innerWheel} id="innerWheel" alt="Inner Cipher Wheel" />
            </div>
            <div id="encryptedText">{encryptedText}</div>
            <input type="text" id="inputText" placeholder="Enter text here..." value={inputText} onChange={handleTextInput} />
        </div>
    );
}

export default CipherWheel;
