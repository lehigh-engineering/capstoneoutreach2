import React, { useEffect } from 'react';
import './SkeletonModule.css';

import skeletonImg from './skeleton.avif';

function SkeletonModule() {
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
        <div class="skeleton">
            { <div class="toc">
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
            </div> }
            <h1>Title:<br></br><i>Subtitle</i></h1>
            <img src={skeletonImg} alt="Skeleton"></img>
            <div class="body">
                <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul>
                        <li>Standard 1</li>
                        <li>Standard 2</li>
                        <li>And so on...</li>
                    </ul>
                <h2 id="Objectives">Obectives</h2>
                    <ul>
                        <li>Objective 1</li>
                        <li>Objective 2</li>
                        <li>Objective 3</li>
                    </ul>
                <h2 id="Materials">Materials</h2>
                    <ul>
                        <li><a href="[link]">Some website</a></li>
                        <li>Some other thing</li>
                    </ul>
                <h2 id="Basic Vocab">Basic Vocab</h2>
                    <ul>
                        <li><b>Term</b>
                            <ul><li>Definition.</li>
                                <li>Other relevant notes/terms:
                                    <ul>
                                        <li><b>Term 1</b>: Definition.</li>
                                        <li><b>Term 2</b>: Definition.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><b>Term</b>
                            <ul><li>Definition.</li></ul>
                        </li>
                        <li><b>Term</b>
                            <ul><li>Definition.</li></ul>
                        </li>
                    </ul>
                <h2 id="Introduction">Introduction</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2>Activity Name</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2 id="Class Activity">Class Activity</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2 id="Summary">Summary</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2 id="Discussion">Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <ul>
                        <li>Bla bla bla.</li>
                        <li>Bla, bla bla bla!</li>
                    </ul>
            </div>
        </div>
    );
}

export default SkeletonModule;