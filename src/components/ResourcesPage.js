import React from 'react';
import './ResourcesPage.css';

import navigationBar from './images/navigationBar.png';
import printIcon from './images/printIcon.png';

function ResourcesPage() {
    return (
        <div class="resources">
            <h2>Resources</h2>
            <ul>
                <li><a href="https://www.pdesas.org/Page/Viewer/ViewPage/58/">STEELS Standards</a></li>
                <li>How to print module content:
                    <ol>
                        <li>Navigate to the module you would like to print.</li>
                        <li>Locate the navigation bar at the top of your machine.</li>
                        <img src={navigationBar} alt="Navigation bar"></img>
                        <li>Under "File" simply press "Print..." and follow the steps to print.</li>
                        <img src={printIcon} alt="Print icon"></img>
                    </ol>
                </li>
            </ul>
        </div>
    );
}

export default ResourcesPage;