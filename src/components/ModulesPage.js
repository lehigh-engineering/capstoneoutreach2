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

    const [flipped, setFlipped] = useState({});

    const handleMouseEnter = (moduleID) => {
        setFlipped((prevState) => ({
            ...prevState,
            [moduleID]: true,
        }));
    };

    const handleMouseLeave = (moduleID) => {
        setFlipped((prevState) => ({
            ...prevState,
            [moduleID]: false,
        }));
    };

    const modules = [
        {id: 'cryptography', title: "Introduction to Cryptography", img: cipherImg, summary: "Learn about the Caesar Cipher and how other cryptography mechanisms help keep us safe on the web!"},
        {id: 'cybersecurity', title: "Introduction to Cybersecurity", img: hackerImg, summary: "A brief overview on cybersecurity and the role AI plays in it!"},
        {id: 'makecode', title: "Introduction to MakeCode", img: heartImg, summary: "Utilize blockcoding to learn about basic core computer science concepts!"},
        {id: 'maze', title: "Program a Maze with Paper", img: mazeImg, summary: "Program a maze for a deeper insight in how computer science programs run!"},
        {id: 'scratch', title: "Introduction to Scratch", img: scratchImg, summary: "Create your own animation and explore computer science concepts through blockcoding!"},
    ];

    const upperBeginner = [
        {id: 'maze', title: "Program a Maze with Paper", img: mazeImg, summary: "Program a maze for a deeper insight in how computer science programs run!"},
    ]

    const proficient = [
        {id: 'cryptography', title: "Introduction to Cryptography", img: cipherImg, summary: "Learn about the Caesar Cipher and how other cryptography mechanisms help keep us safe on the web!"},
        {id: 'scratch', title: "Introduction to Scratch", img: scratchImg, summary: "Create your own animation and explore computer science concepts through blockcoding!"},
    ]

    const advanced = [
        {id: 'cybersecurity', title: "Introduction to Cybersecurity", img: hackerImg, summary: "A brief overview on cybersecurity and the role AI plays in it!"},
        {id: 'makecode', title: "Introduction to MakeCode", img: heartImg, summary: "Utilize blockcoding to learn about basic core computer science concepts!"},
    ]


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
                            {modules.map((module) => (
                                <div
                                    className={`module ${flipped[module.id] ? 'flipped' : ''}`}
                                
                                    key={module.id}
                                >
                                <div className="module-inner">
                                    <div className="module-flip-container"
                                        onMouseEnter={() => handleMouseEnter(module.id)}
                                        onMouseLeave={() => handleMouseLeave(module.id)}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={module.img} alt={module.title} />
                                            </div>
                                            <div className="module-back">
                                                <div className="summary-text">{module.summary}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href={`/${module.id}`}>{module.title}</a></p></nav>
                                </div>
                            </div>
                            ))}
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
                            {upperBeginner.map((module) => (
                                <div
                                    className={`module ${flipped[module.id] ? 'flipped' : ''}`}
                                
                                    key={module.id}
                                >
                                <div className="module-inner">
                                    <div className="module-flip-container"
                                        onMouseEnter={() => handleMouseEnter(module.id)}
                                        onMouseLeave={() => handleMouseLeave(module.id)}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={module.img} alt={module.title} />
                                            </div>
                                            <div className="module-back">
                                                <div className="summary-text">{module.summary}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href={`/${module.id}`}>{module.title}</a></p></nav>
                                </div>
                            </div>
                            ))}
                        </div>
                    </>
                )}
                {activeTab === 'proficient' && (
                    <>
                        <h1>Proficient Level</h1>
                        <h2>Recommended for: Grades 6-8</h2>
                        <div className="module-container">
                            {proficient.map((module) => (
                                <div
                                    className={`module ${flipped[module.id] ? 'flipped' : ''}`}
                                
                                    key={module.id}
                                >
                                <div className="module-inner">
                                    <div className="module-flip-container"
                                        onMouseEnter={() => handleMouseEnter(module.id)}
                                        onMouseLeave={() => handleMouseLeave(module.id)}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={module.img} alt={module.title} />
                                            </div>
                                            <div className="module-back">
                                                <div className="summary-text">{module.summary}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href={`/${module.id}`}>{module.title}</a></p></nav>
                                </div>
                            </div>
                            ))}
                        </div>
                    </>
                )}
                {activeTab === 'advanced' && (
                    <>
                        <h1>Advanced Level</h1>
                        <h2>Recommended for: Grades 9-12</h2>
                        <div className="module-container">
                            {advanced.map((module) => (
                                <div
                                    className={`module ${flipped[module.id] ? 'flipped' : ''}`}
                                
                                    key={module.id}
                                >
                                <div className="module-inner">
                                    <div className="module-flip-container"
                                        onMouseEnter={() => handleMouseEnter(module.id)}
                                        onMouseLeave={() => handleMouseLeave(module.id)}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={module.img} alt={module.title} />
                                            </div>
                                            <div className="module-back">
                                                <div className="summary-text">{module.summary}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href={`/${module.id}`}>{module.title}</a></p></nav>
                                </div>
                            </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ModulesPage;