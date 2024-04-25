import React from 'react';
import './HomePage.css';

import cipherImg from './images/cipher.jpg';
import hackerImg from './images/hacker.jpeg';
import scratchImg from './images/Scratch.png';
import mazeImg from './images/maze.jpeg';
import heartImg from './images/heart.jpg';
import HTMLImg from './images/HTML_logo.jpg'


function HomePage() {
    return (
        <div class="home">
            {/* <h1>Computer Science Outreach</h1> */}
            {/* <h2>Modules in progress...</h2>
            <div class="modules-ip-container">
                <div class="module-ip">Module 1</div>
                <div class="module-ip">Module 2</div>
                <div class="module-ip">Module 3</div>
                <div class="module-ip">Module 4</div>
                <div class="module-ip">Module 5</div>
                <div class="module-ip">Module 6</div>
            </div> */}
            <div class="left-column">
                <h2>Table of Contents</h2>
                <ul class="lower">
                    <h3>Lower-Beginner Level</h3>
                    <p><i>Recommended for: Grades 1-3</i></p>
                    <li class="content">Module 1</li>
                    <li class="content">Module 2</li>
                    <li class="content">Module 3</li>
                    <li class="content">Module 4</li>
                </ul>
                <ul class="upper">
                    <h3>Upper-Beginner Level</h3>
                    <p><i>Recommended for: Grades 4-5</i></p>
                    <li class="content"><a href="/maze">Program a Maze with Paper</a></li>
                    <li class="content">Module 2</li>
                    <li class="content">Module 3</li>
                    <li class="content">Module 4</li>
                </ul>
                <ul class="proficient">
                    <h3>Proficient Level</h3>
                    <p><i>Recommended for: Grades 6-8</i></p>
                    <li class="content"><a href="/cryptography">Introduction to Cryptography</a></li>
                    <li class="content"><a href="/scratch">Introduction to Scratch</a></li>
                    <li class="content"><a href="/makecode">Introduction to MakeCode</a></li>
                    <li class="content">Module 4</li>
                </ul>
                <ul class="advanced">
                    <h3>Advanced Level</h3>
                    <p><i>Recommended for: Grades 9-12</i></p>
                    <li class="content"><a href="/cybersecurity">Introduction to Cybersecurity</a></li>
                    <li class="content">Module 2</li>
                    <li class="content">Module 3</li>
                    <li class="content">Module 4</li>
                </ul>
            </div>
            <div class="body">
                <h1>Modules</h1>
                {/* Search bar not yet functional */}
                <div class="search-bar">
                    <input type="text" placeholder="Search modules..."></input>
                    <button type="button">Search</button>
                </div>
                <div class="module">
                    <img src={mazeImg} alt="Maze"></img><nav><p><a href="/maze">Program a Maze with Paper</a></p></nav>
                </div>
                <div class="module">
                    <img src={cipherImg} alt="Ceasar's Cipher"></img><nav><p><a href="/cryptography">Introduction to Cryptography</a></p></nav>
                </div>
                <div class="module">
                    <img src={scratchImg} alt="Scratch"></img><nav><p><a href="/scratch">Introduction to Scratch</a></p></nav>
                </div>
                <div class="module">
                    <img src={heartImg} alt="Heart"></img><nav><p><a href="/makecode">Introduction to MakeCode</a></p></nav>
                </div>
                <div class="module">
                    <img src={hackerImg} alt="Hacker"></img><nav><p><a href="/cybersecurity">Introduction to Cybersecurity</a></p></nav>
                </div>
                <div class="module">
                    <img src={HTMLImg} alt="HTML"></img><nav><p><a href="/html">Introduction to HTML</a></p></nav>
                </div>
            </div>
        </div>
    );
}

export default HomePage;