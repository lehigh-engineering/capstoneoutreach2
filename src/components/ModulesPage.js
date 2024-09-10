import React, { useState } from 'react';
import './ModulesPage.css';

import cipherImg from './images/cipher.jpg';
import hackerImg from './images/hacker.jpg';
import heartImg from './images/heart.png';
import scratchImg from './images/scratch.png';
import mazeImg from './images/maze.jpg';

function ModulesPage() {
    const [activeTab, setActiveTab] = useState('all-modules');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="modulesPage">
            <header>
                <nav className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'all-modules' ? 'active' : ''}`}
                        onClick={() => handleTabClick('all-modules')}
                        > All Modules
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'lower-beginner' ? 'active' : ''}`}
                        onClick={() => handleTabClick('lower-beginner')}
                        > Lower-Beginner Level
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'upper-beginner' ? 'active' : ''}`}
                        onClick={() => handleTabClick('upper-beginner')}
                        > Upper-Beginner Level
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'proficient' ? 'active' : ''}`}
                        onClick={() => handleTabClick('proficient')}
                        > Proficient Level
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'advanced' ? 'active' : ''}`}
                        onClick={() => handleTabClick('advanced')}
                        > Advanced Level
                    </button>
                </nav>
            </header>
            <div className="modules">
                {activeTab === 'all-modules' && ( 
                    <>
                        <h1>All Modules</h1>
                        <div className="module-container">
                            <div className="module">
                                <img src={cipherImg} alt="Ceasar's Cipher" />
                                <nav><p><a href="/cryptography">Introduction to Cryptography</a></p></nav>
                            </div>
                            <div className="module">
                                <img src={hackerImg} alt="Hacker" />
                                <nav><p><a href="/cybersecurity">Introduction to Cybersecurity</a></p></nav>
                            </div>
                            <div className="module">
                                <img src={heartImg} alt="Heart" />
                                <nav><p><a href="/makecode">Introduction to MakeCode</a></p></nav>
                            </div>
                            <div className="module">
                                <img src={mazeImg} alt="Maze" />
                                <nav><p><a href="/maze">Program a Maze with Paper</a></p></nav>
                            </div>
                            <div className="module">
                                <img src={scratchImg} alt="Scratch" />
                                <nav><p><a href="/scratch">Introduction to Scratch</a></p></nav>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'lower-beginner' && (
                    <>
                        <h1>Lower-Beginner Level</h1>
                        <h2>Recommended for: Grades 1-3</h2>
                        <div className="module-container">
                            <p><i>No content available for this tab yet.</i></p>
                        </div>
                    </>
                )}
                {activeTab === 'upper-beginner' && (
                    <>
                        <h1>Upper-Beginner Level</h1>
                        <h2>Recommended for: Grades 4-5</h2>
                        <div className="module-container">
                            <div className="module">
                                <img src={mazeImg} alt="Maze" />
                                <nav><p><a href="/maze">Program a Maze with Paper</a></p></nav>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'proficient' && (
                    <>
                        <h1>Proficient Level</h1>
                        <h2>Recommended for: Grades 6-8</h2>
                        <div className="module-container">
                            <div className="module">
                                <img src={cipherImg} alt="Ceasar's Cipher" />
                                <nav><p><a href="/cryptography">Introduction to Cryptography</a></p></nav>
                            </div>
                            <div className="module">
                                <img src={scratchImg} alt="Scratch" />
                                <nav><p><a href="/scratch">Introduction to Scratch</a></p></nav>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'advanced' && (
                    <>
                        <h1>Advanced Level</h1>
                        <h2>Recommended for: Grades 9-12</h2>
                        <div className="module-container">
                            <div className="module">
                                <img src={hackerImg} alt="Hacker" />
                                <nav><p><a href="/cybersecurity">Introduction to Cybersecurity</a></p></nav>
                            </div>
                            <div className="module">
                                <img src={heartImg} alt="Heart" />
                                <nav><p><a href="/makecode">Introduction to MakeCode</a></p></nav>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ModulesPage;