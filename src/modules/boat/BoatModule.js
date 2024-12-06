import React, { useState } from 'react';
import '../template/Module.css';
import boatImg from './boat.png';
import { saveAsPDF } from '../downloadPDF';

function BoatModule() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const toggleSidebar = () => setIsVisible(!isVisible);

    return (
        <div class="anyModule">
            <div className={`toc-bar ${isVisible ? 'expanded' : ''}`}>
                {isVisible && (
                    <div className="toc">
                        <h1>Table of Contents</h1>
                        <ul>
                            <li><a href="#STEELS Standards">STEELS Standards</a></li>
                            <li><a href="#Objectives">Objectives</a></li>
                            <li><a href="#Materials">Materials</a></li>
                            <li><a href="#Basic Vocab">Basic Vocab</a></li>
                            <li><a href="#Introduction">Introduction</a></li>
                            <li><a href="#Class Activity">Class Activity</a></li>
                            {/* <li><a href="#Summary">Summary</a></li> */}
                            <li><a href="#Discussion">Discussion</a></li>
                            <li><a href="#Additional Resources">Additional Resources</a></li>
                        </ul>
                    </div>
                )} <div className="toc-toggle" onClick={toggleSidebar}> {isVisible ? '◄' : '►'} </div>
            </div>
            <div className={`anyModuleContent ${isVisible ? 'shift-right' : ''}`}>
                <div className="header-container">
                    <h1><span class="pixelated">Build a Boat</span></h1>
                    <img src={boatImg} alt="Boat"></img>
                </div>
                {isDownloading ? (
                    <p className='downloading'>Downloading...</p>
                ) : (
                    <button className="download-button" onClick={() => saveAsPDF('.anyModuleContent', 'BoatModule.pdf', setIsDownloading)}>
                        Download as PDF
                    </button>
                )}
                <div class="body-content">
                    <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul>
                        <li><a href="https://files5.pdesas.org/141073079053144248148057232011143131034150087124/Download.ashx?hash=2.2">3.5.K-2.M</a></li>
                        <li><a href="https://files5.pdesas.org/207188128182216098135223010234062053089224157192/Download.ashx?hash=2.2">3.5.K-2.O</a></li>
                        <li><a href="https://files5.pdesas.org/230198236125025041020219120027246004043065138073/Download.ashx?hash=2.2">3.5.K-2.Q</a></li>
                        <li><a href="https://files5.pdesas.org/152063251096087095083175130123152206203033242246/Download.ashx?hash=2.2">3.5.K-2.S</a></li>
                        <li><a href="https://files5.pdesas.org/113138152203182022087183133026002037229218156066/Download.ashx?hash=2.2">3.5.K-2.T</a></li>
                        <li><a href="https://files5.pdesas.org/008228223242225148199109001031172155125180147244/Download.ashx?hash=2.2">3.5.K-2.U</a></li>
                        <li><a href="https://files5.pdesas.org/060062204042181157173161060221247229079039096097/Download.ashx?hash=2.2">3.5.K-2.V</a></li>
                        <li><a href="https://files5.pdesas.org/034176159050101146218043064179252091131180164175/Download.ashx?hash=2.2">3.5.K-2.X</a></li>
                        <li><a href="https://files5.pdesas.org/120013050040189120039035103019186249131050125077/Download.ashx?hash=2.2">3.5.K-2.DD</a></li>
                    </ul>
                    <h2 id="Objectives">Objectives</h2>
                        <ul>
                            <li>Students will work collaboratively as a team to design a solution to a given problem</li>
                            <li>Students will develop a plan to create a solution that addresses specific needs and requirements</li>
                            <li>Students will experiment creatively to learn what methods work best</li>
                        </ul>
                    <h2 id="Materials">Materials</h2>
                        <ul>
                            <li>Aluminum foil</li>
                            <li>Tape</li>
                            <li>Popsicle sticks</li>
                            <li>Small container or tub of water</li>
                            <li>Small toys, coins, or marbles</li>
                            <li>Pencil and paper</li>
                        </ul>
                    <h2 id="Basic Vocab">Basic Vocab</h2>
                        <ul>
                            <li><b>Design</b>
                                <ul><li>A plan you make for something you want to create.</li></ul>
                            </li>
                            <li><b>Properties/characteristics</b>
                                <ul><li>The special things about an object that make it good for certain jobs.</li></ul>
                                <ul><li>For example: light/heavy or soft/hard.</li></ul>                    
                            </li>
                            <li><b>Problem</b>
                                <ul><li>A question, condition, or situation that must be solve in order to do something successfully.</li></ul>
                            </li>
                            <li><b>Experiment</b>
                                <ul><li>A test of an idea or method.</li></ul>
                            </li>
                        </ul>
                    <h2 id="Introduction">Introduction</h2>
                        <p>Begin by discussing the idea that there are multiple solutions to a given problem.</p>
                        <p>As an example, pose the hypothetical situation of their shoelaces constantly becoming untied:</p>
                        <ul>
                            <li>This is a problem because it can cause you to trip.</li>
                            <li>Ask the students how they would solve the problem. </li>
                            <li>Example responses may be tying the laces tighter, double knotting the laces, or changing the shoes altogether.</li>
                            <li>Although they are different methods, they all solve the problem of untied shoelaces.</li>
                        </ul>
                        <p>Explain that there is a process to create a good solution to a problem, especially if it’s a complex problem.</p>
                        <ul>
                            <li>A design is something that has been created to solve a problem.</li>
                            <li>To make a design, it’s a good idea to first develop a plan before testing ideas out immediately. Planning is important because it helps you know what to do before you start. This can save time, prevent mistakes, and help you do your best.</li>
                            <li>It’s important to be creative! Problems can be hard to solve, so it’s important to think about different ways you could approach a problem.</li>
                        </ul>
                        <p>Emphasize the possibility of not solving a problem on the first try.</p>
                        <ul>
                            <li>Oftentimes, creating a design to solve a problem requires multiple attempts.</li>
                            <li>If your test doesn’t work, you can learn from it and try again. You can ask yourself what worked and what didn’t, and try to change your design accordingly.</li>
                            <li>No design is 100% perfect!</li>
                        </ul>
                    <h2 id="Class Activity">Class Activity</h2>
                        <h3>Preparation:</h3>
                            <ul>
                                <li>The problem: a person needs help transporting their things across a river safely. In this activity, you will be designing a boat to help!</li>
                                <li>Discuss the different materials available to use and their different properties/why they are desirable for this activity (foil is waterproof, popsicle sticks are strong):</li>
                                <li>Explain that with these materials, the students will have to design and create a small boat that will be able to carry objects (toys/pennies/marbles) in the water.</li>
                            </ul>
                        <h3>Instructions:</h3>
                            <ol>
                                <li>Split the students into small teams and have them discuss with each other how they might go about creating the boat.</li>
                                <li>Have the students work together to sketch their ideas on paper to create a plan for their design.</li>
                                <li>Once the students have a plan, they should work together in their team to construct their boats. Students should test their boats as they build and make improvements as needed.</li>
                                <li>Once everyone has created their boat, test them out!</li>
                                <li>One team at a time will place their boat in the water and add “cargo” to see if it can carry the objects without sinking.</li>
                            </ol>
                    <h2 id="Discussion">Discussion</h2>
                        <p><i>(Try to guide student discussion to touch on these)</i></p>
                        <ul>
                        <li>Ask the students what worked well about some of the boats and what didn’t.
                            <ul><li>For example: what materials or designs worked best?</li></ul>
                        </li>
                        <li>Highlight the variety of designs: how were the boats different from each other?</li>
                        <li>Discuss the importance of creating a boat that could float to meet the person’s needs.</li>
                        <li>Ask the students if they had to make changes to their design along the way.
                            <ul><li>Although they may have had a plan beforehand, it is common for adjustments to be made in response to problems they were not aware of before testing.</li></ul>
                        </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default BoatModule;