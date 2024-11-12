import React, { useEffect, useState } from 'react';
import '../template/Module.css';
import { useParams } from 'react-router-dom';

import htmlImg from './HTML.png';
import EverydayAlgorithms from './EverydayAlgorithms.json'

function ModuleHandler() {
    const [isVisible, setIsVisible] = useState(false);
    const vocabItems = Object.entries(EverydayAlgorithms.basic_vocab);

    // Extracts the `id` parameter from the route
    const { id } = useParams();

    console.log(id)

    useEffect(() => {
        // Add event listeners to all TOC links
        const tocLinks = document.querySelectorAll('.toc a');
        tocLinks.forEach(link => {
            link.addEventListener('click', scrollToSection);
        });

        // Remove event listeners when component unmounts
        return () => {
            tocLinks.forEach(link => {
                link.removeEventListener('click', scrollToSection);
            });
        };
    }, []);

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const yOffset = -80; // Adjust as needed to consider any fixed header
            const rect = targetSection.getBoundingClientRect();
            const scrollPosition = rect.top + window.scrollY + yOffset;
            window.scrollBy({ top: scrollPosition, left: 0, behavior: 'smooth' });
        }
    }
    return (
        <div class="anymodule">
            <button className="toc-toggle" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? '-' : '+'}
            </button>
            {isVisible && (
                <div className="toc">
                    <h2>Table of Contents</h2>
                    <ul>
                        <li><a href="#STEELS Standards">STEELS Standards</a></li>
                        <li><a href="#Objectives">Objectives</a></li>
                        <li><a href="#Materials">Materials</a></li>
                        <li><a href="#Basic Vocab">Basic Vocab</a></li>
                        <li><a href="#Introduction">Introduction</a></li>
                        <li><a href="#Class Activity">Class Activity</a></li>
                        <li><a href="#Summary">Summary</a></li>
                        <li><a href="#Discussion">Discussion</a></li>
                    </ul>
                </div>
            )}
            <div class="header-container">
                <h1>Introduction to HTML:<br></br><i>A Basic Webpage</i></h1>
                <img src={htmlImg} alt="HTML"></img>
            </div>
            
            <div class="anymodulebody">
                <h2 id="STEELS Standards">STEELS Standards</h2>
                <ul>
                    {EverydayAlgorithms.STEELS.map((standard, index) => (
                        <li key={index}>
                            <a href={standard.url}>{standard.title}</a>
                        </li>
                    ))}
                </ul>

                <h2 id="Objectives">Obectives</h2>
                <ul>
                    {EverydayAlgorithms.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>

                <h2 id="Materials">Materials</h2>
                <ul>
                    {EverydayAlgorithms.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                    ))}
                </ul>

                <h2 id="Basic Vocab">Basic Vocab</h2>
                <div>
                    {vocabItems.map(([word, definition]) => (
                        <p key={word}>
                        <b>{word}:</b> {definition}
                        </p>
                    ))}
                </div>

                <h2 id="Introduction">Introduction</h2>
                <div dangerouslySetInnerHTML={{ __html: EverydayAlgorithms.introduction }} />
                
                <h2 id="Class Activity">Class Activity</h2>
                <div dangerouslySetInnerHTML={{ __html: EverydayAlgorithms.class_activity }} />
                
                <h2 id="Discussion">Discussion</h2>
                <p><i>(Try to guide student discussion to touch on these)</i></p>
                <div dangerouslySetInnerHTML={{ __html: EverydayAlgorithms.discussion }} />
            </div>
        </div>
    );
}

export default ModuleHandler;