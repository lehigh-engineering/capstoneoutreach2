import React from 'react';
import './FeedbackPage.css';
import bugImg from './images/bug.jpg';
import lightImg from './images/lightbulb.png';
import feedbackImg from './images/feedback.jpg';

function FeedbackPage() {
    const handleBugClick = () => {
        window.open('https://forms.gle/iimbTyyMUkANQWPV7', '_blank');    
    };

    const handleGeneralClick = () => {
        window.open('https://forms.gle/9q5J5oXXaP4Ct95c9', '_blank');    
    };

    const handleIdeaClick = () => {
        window.open('https://forms.gle/hSqREJtDXx5TaEtA7', '_blank');    
    };

    return (
        <div class="feedback">
            <h1>We'd love to hear from you!</h1>
            <div class="feedback-container">
                <div class="feedback-item">
                    <h3>Encountered any issues,<br></br>like typos or software glitches?</h3>
                    <img src={bugImg} alt="Bug" />
                    <button className={'button-container'} onClick={handleBugClick}
                        > Report a Bug
                    </button>
                </div>
                <div class="feedback-item">
                    <h3>Have any feedback on what you like<br></br>or suggestions on what could be improved?</h3>
                    <img src={feedbackImg} alt="Feedback" />
                    <button className={'button-container'} onClick={handleGeneralClick}
                        > General Feedback
                    </button>
                </div>
                <div class="feedback-item">
                    <h3>Have an idea<br></br>for a new module?</h3>
                    <img src={lightImg} alt="Light" />
                    <button className={'button-container'} onClick={handleIdeaClick}
                        > New Module Idea
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeedbackPage;
