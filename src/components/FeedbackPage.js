import React from 'react';
import './FeedbackPage.css';

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
            <h2>Feedback</h2>
            <p>Encountered any issues, like typos or software glitches?</p>
            <button className={'button-container'} onClick={handleBugClick}
                > Report a Bug
            </button>
            <p>Have suggestions or feedback on what you like or what could be improved?</p>
            <button className={'button-container'} onClick={handleGeneralClick}
                > General Feedback
            </button>
            <p>Have an idea for a new module?</p>
            <button className={'button-container'} onClick={handleIdeaClick}
                > New Module Idea
            </button>
        </div>
    );
}

export default FeedbackPage;
