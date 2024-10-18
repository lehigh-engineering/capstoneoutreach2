import React, { useState, useEffect } from 'react';
import './ModulesPage.css';

import Spinner from './Spinner';

function ModulesPage() {
    const [modules, setModules] = useState([]);
    const [activeTab, setActiveTab] = useState('all-modules');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch modules from localStorage when the component mounts
        const storedModules = localStorage.getItem('modules');

        if (storedModules) {
            const parsedModules = JSON.parse(storedModules);
            if (Array.isArray(parsedModules) && parsedModules.length > 0) {
                setModules(parsedModules);
                setLoading(false); // Data is available, stop loading
            } else {
                setLoading(true); // No valid data, stay in loading state
            }
        } else {
            setLoading(true); // No data in localStorage
        }
    }, []); // Empty dependency array to only run once on mount

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const  [flipped, setFlipped] = useState({});
    
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
            {loading ? <Spinner /> : <div className="modules">
                {activeTab === 'all-modules' && ( 
                    <>
                        <h1>All Modules</h1>
                        <div className="module-container">
                        {modules.map((module) => (
                        <div key={module.id} className={`module ${flipped[module.id] ? 'flipped' : ''}`}>
                                <div className="module-inner">
                                    <div className="module-flip-container"
                                        onMouseEnter={() => handleMouseEnter(module.id)}
                                        onMouseLeave={() => handleMouseLeave(module.id)}>
                                        <div className="module-flip">
                                            <div className="module-front">
                                                <img src={module.url} alt={module.keyword} />
                                            </div>
                                            <div className="module-back">
                                                <div className = "summary-text">{module.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav><p><a href={`/${module.keyword}`}>{module.title}</a></p></nav>
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
                        {modules.filter(module => module.level === 'lowerbeg').length === 0 ? (
                            <p><i>No content available for this tab yet.</i></p>
                        ) : (
                            modules.filter(module => module.level === 'lowerbeg').map((module) => (
                                    <div key={module.id} className={`module ${flipped[module.id] ? 'flipped' : ''}`}>
                                        <div className="module-inner">
                                        <div className="module-flip-container"
                                                onMouseEnter={() => handleMouseEnter(module.id)}
                                                onMouseLeave={() => handleMouseLeave(module.id)}>
                                                <div className="module-flip">
                                                    <div className="module-front">
                                                        <img src={module.url} alt={module.keyword} />
                                                    </div>
                                                    <div className="module-back">
                                                        <div className="summary-text">{module.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav><p><a href={`/${module.keyword}`}>{module.title}</a></p></nav>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
                
                {activeTab === 'upper-beginner' && (
                    <>
                        <h1>Upper-Beginner Level</h1>
                        <h2>Recommended for: Grades 4-5</h2>
                        <div className="module-container">
                        {modules.filter(module => module.level === 'upperbeg').length === 0 ? (
                            <p><i>No content available for this tab yet.</i></p>
                        ) : (
                            modules.filter(module => module.level === 'upperbeg').map((module) => (
                                <div key={module.id} className={`module ${flipped[module.id] ? 'flipped' : ''}`}>
                                    <div className="module-inner">
                                    <div className="module-flip-container"
                                            onMouseEnter={() => handleMouseEnter(module.id)}
                                            onMouseLeave={() => handleMouseLeave(module.id)}>
                                            <div className="module-flip">
                                                    <div className="module-front">
                                                        <img src={module.url} alt={module.keyword} />
                                                    </div>
                                                    <div className="module-back">
                                                        <div className="summary-text">{module.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav><p><a href={`/${module.keyword}`}>{module.title}</a></p></nav>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
                {activeTab === 'proficient' && (
                    <>
                        <h1>Proficient Level</h1>
                        <h2>Recommended for: Grades 6-8</h2>
                        <div className="module-container">
                        {modules.filter(module => module.level === 'proficient').length === 0 ? (
                            <p><i>No content available for this tab yet.</i></p>
                        ) : (
                            modules.filter(module => module.level === 'proficient').map((module) => (
                                <div key={module.id} className={`module ${flipped[module.id] ? 'flipped' : ''}`}>
                                    <div className="module-inner">
                                    <div className="module-flip-container"
                                            onMouseEnter={() => handleMouseEnter(module.id)}
                                            onMouseLeave={() => handleMouseLeave(module.id)}>
                                                <div className="module-flip">
                                                    <div className="module-front">
                                                        <img src={module.url} alt={module.keyword} />
                                                    </div>
                                                    <div className="module-back">
                                                        <div className="summary-text">{module.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav><p><a href={module.keyword}>{module.title}</a></p></nav>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
                {activeTab === 'advanced' && (
                    <>
                        <h1>Advanced Level</h1>
                        <h2>Recommended for: Grades 9-12</h2>
                        <div className="module-container">
                        {modules.filter(module => module.level === 'advanced').length === 0 ? (
                            <p><i>No content available for this tab yet.</i></p>
                        ) : (
                            modules.filter(module => module.level === 'advanced').map((module) => (
                                <div key={module.id} className={`module ${flipped[module.id] ? 'flipped' : ''}`}>
                                    <div className="module-inner">
                                    <div className="module-flip-container"
                                            onMouseEnter={() => handleMouseEnter(module.id)}
                                            onMouseLeave={() => handleMouseLeave(module.id)}>
                                                <div className="module-flip">
                                                    <div className="module-front">
                                                        <img src={module.url} alt={module.keyword} />
                                                    </div>
                                                    <div className="module-back">
                                                        <div className="summary-text">{module.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav><p><a href={module.keyword}>{module.title}</a></p></nav>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
            </div>}
        </div>
    );
}

export default ModulesPage;