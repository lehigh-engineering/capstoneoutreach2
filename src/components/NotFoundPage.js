import React from 'react';
import './NotFoundPage.css';

import sadComputer from './images/computer.png'

function NotFoundPage() {
    return (
        <div class="not-found">
            <h1>404: Page Not Found</h1>
            <img src={sadComputer} alt="Sad Computer"></img>
            <nav><p><a href="/home">Navigate back to home.</a></p></nav>
        </div>
    );
}

export default NotFoundPage;