import React, { useState } from 'react';
import './ModulesPage.css';

import cipherImg from './images/cipher.jpg';
import hackerImg from './images/hacker.jpg';
import heartImg from './images/heart.png';
import scratchImg from './images/scratchcat.png';
import mazeImg from './images/maze.jpg';

function ModulesPage() {
    const [activeTab, setActiveTab] = useState('all-modules');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const  [flipped, setFlipped] = useState({});
    const handleFlip = (moduleID) => {
        setFlipped((prevState) => ({
            ...prevState,
            [moduleID]: !prevState[moduleID],
        }));
    };

    const modules = [
        {id: 'cryptography', title: "Introduction to Cryptography", img: cipherImg, summary: "Crypto Test"},
        {id: 'cybersecurity', title: "Introduction to Cybersecurity", img: hackerImg, summary: "Crypto Test"},
        {id: 'makecode', title: "Introduction to MakeCode", img: heartImg, summary: "Crypto Test"},
        {id: 'maze', title: "Program a Maze with Paper", img: mazeImg, summary: "Crypto Test"},
        {id: 'scratch', title: "Introduction to Scratch", img: scratchImg, summary: "Crypto Test"},
    ];

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
                            <div className={`module ${flipped['cryptography'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('cryptography')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={cipherImg} alt="Ceasar's Cipher" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Learn about the Caesar Cipher and how other cryptography mechanisms help keep us safe on the web! </div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/cryptography">Introduction to Cryptography</a></p></nav>
                                </div>
                            </div>
                            <div className={`module ${flipped['cybersecurity'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('cybersecurity')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={hackerImg} alt="Hacker" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">A brief overview cybersecurity and the role AI plays in it!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/cybersecurity">Introduction to Cybersecurity</a></p></nav>
                                </div>
                            </div>
                            <div className={`module ${flipped['make'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('make')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={heartImg} alt="Heart" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Utilize blockcoding to learn about basic core computer science concepts!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/makecode">Introduction to MakeCode</a></p></nav>
                                </div>
                            </div>
                            <div className={`module ${flipped['maze'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('maze')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={mazeImg} alt="Maze" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Program a maze for a deeper insight in how computer science programs run!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/maze">Program a Maze</a></p></nav>
                                </div>
                            </div>
                            <div className={`module ${flipped['scratch'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('scratch')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={scratchImg} alt="Scratch" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Create your own animation and explore computer science concepts through blockcoding!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/scratch">Introduction to Scratch</a></p></nav>
                                </div>
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
                           <div className={`module ${flipped['maze'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('maze')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={mazeImg} alt="Maze" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Program a maze for a deeper insight in how computer science programs run!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/maze">Program a Maze</a></p></nav>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'proficient' && (
                    <>
                        <h1>Proficient Level</h1>
                        <h2>Recommended for: Grades 6-8</h2>
                        <div className="module-container">
                            <div className={`module ${flipped['cryptography'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('cryptography')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={cipherImg} alt="Ceasar's Cipher" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Learn about the Caesar Cipher and how other cryptography mechanisms help keep us safe on the web! </div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/cryptography">Introduction to Cryptography</a></p></nav>
                                </div>
                            </div>
                            <div className={`module ${flipped['scratch'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('scratch')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={scratchImg} alt="Scratch" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Create your own animation and explore computer science concepts through blockcoding!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/scratch">Introduction to Scratch</a></p></nav>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'advanced' && (
                    <>
                        <h1>Advanced Level</h1>
                        <h2>Recommended for: Grades 9-12</h2>
                        <div className="module-container">
                            <div className={`module ${flipped['cybersecurity'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('cybersecurity')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={hackerImg} alt="Hacker" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">A brief overview cybersecurity and the role AI plays in it!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/cybersecurity">Introduction to Cybersecurity</a></p></nav>
                                </div>
                            </div>
                            <div className={`module ${flipped['make'] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container" onClick={() => handleFlip('make')}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={heartImg} alt="Heart" />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">Utilize blockcoding to learn about basic core computer science concepts!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href="/makecode">Introduction to MakeCode</a></p></nav>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ModulesPage;