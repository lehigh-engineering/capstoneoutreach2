import React, { useEffect } from 'react';
import './MazeModule.css';

import mazeImg from './maze.jpeg';

function MazeModule() {
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
        <div class="maze">
            { <div class="toc">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#STEELS Standards">STEELS Standards</a></li>
                    <li><a href="#Objectives">Objectives</a></li>
                    <li><a href="#Materials">Materials</a></li>
                    <li><a href="#Basic Vocab">Basic Vocab</a></li>
                    <li><a href="#Introduction">Introduction</a></li>
                    <li><a href="#Class Activity">Class Activity</a></li>
                    <li><a href="#Discussion">Discussion</a></li>
                </ul>
            </div> }
            <h1>Program a Maze with Paper</h1>
            <img src={mazeImg} alt="Maze"></img>
            <div class="body">
            <p>Inspired by <a href="https://www.sciencebuddies.org/stem-activities/program-a-maze-with-paper?from=Blog">Program a Maze with Paper from Science Buddies</a></p>
                <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul>
                        <li><a href="https://files5.pdesas.org/050205197024147196040149181007017248032244235080/Download.ashx?hash=2.2">3.5.6-8.F</a></li>
                        <li><a href="https://files5.pdesas.org/010055042080117107037076135031230155085176210204/Download.ashx?hash=2.2">3.5.6-8.Q</a></li>
                        <li><a href="https://files5.pdesas.org/141226021166097059033041122098250156067086251078/Download.ashx?hash=2.2">3.5.6-8.T</a></li>
                    </ul>
                <h2 id="Objectives">Obectives</h2>
                    <ul>
                        <li>Introduce the basics of programming (bugs, commands, relationship between person and program)</li>
                        <li>Hands-on learning: by physically manipulating paper mazes and coding sequences of commands to navigate them, participants engage in experiential learning, which can help their understanding of programming concepts</li>
                        <li>Problem-solving skills: Participants are encouraged to think critically and strategically to solve the maze challenges presented in the activity</li>
                    </ul>
                <h2 id="Materials">Materials</h2>
                    <ul>
                        <li><a href="PrintableMazes.pdf">insert mazes here</a></li>
                        <li>Ruler (if you are creating your own maze)</li>
                        <li>Pencil</li>
                    </ul>
                <h2 id="Basic Vocab">Basic Vocab</h2>
                    <ul>
                        <li><b>Program</b>
                            <ul><li>At its most basic level, a program is a set of instructions that tells a computer what to do.</li></ul>
                        </li>
                        <li><b>Bugs</b>
                            <ul><li>Errors in computer code that lead to unexpected behavior</li></ul>
                            <ul><li>Similar to how you may make a mistake when following a recipe, computer programs can misinterpret the directions and act differently than how they’re supposed to</li></ul>                    
                        </li>
                        <li><b>Debugging</b>
                            <ul><li>The process of finding and removing bugs.</li></ul>
                        </li>
                    </ul>
                <h2 id="Introduction">Introduction</h2>
                    <p>Begin by asking students what they think a computer program is.</p>
                    <p>Then explain what it actually is: </p>
                    <ul>
                        <li>You probably use computer programs every day. Every time you play a video game, 
                            or use a phone or computer, you are using computer programs. These programs are a 
                            set of instructions that tell the computer what to do. For example, if you click the 
                            “like button” on an app, there’s a program that tells your device to increase the like 
                            count or turn the heart from white to red. There are many examples of what computer 
                            programs can do. Can you think of more? </li>
                        <li>Computers are very good at following directions. Programmers are responsible for making
                             these directions and telling computers what to do. But what happens if a programmer 
                             gives the computer wrong instructions by accident? Computers don’t have a brain like you 
                             and I do, so they will follow these directions even if they’re wrong. This can cause a 
                             program to “crash”: behave incorrectly or sometimes stop completely. Programmers call 
                             these errors “bugs” and “debugging” is when you find and remove these problems. </li>
                    </ul>
                    <p>Introduce the activity: </p>
                    <ul>
                        <li>In this activity, you’ll learn more about creating a program to solve a maze. In other words, 
                            you will be creating a set of directions to help a computer find their way through a maze 
                            without crashing or getting lost. If you make a mistake, you will “crash” into the wall of 
                            the maze or get lost and you’ll have to debug your program and try again!</li>
                    </ul>
                <h2 id="Class Activity">Class Activity</h2>
                    <h3>Preparation:</h3>
                        <ol>
                            <li>If you are creating your own maze, use a piece of graph paper and a ruler to create a 
                                small maze within a square/rectangular grid. 
                                    <ol type="a">
                                        <li>All of the lines in the grid should be either vertical or horizontal (no diagonal or curved lines).</li>
                                        <li>Clearly label a “start” and “finish” point. </li>
                                    </ol>
                            </li>
                            <li>If you are using a premade maze, print them out.</li>
                            <li>Start with smaller, easier mazes and then you can create more difficult ones later. </li>
                        </ol>
                    <h3>Paper Maze Instructions:</h3>
                        <ol>
                            <li>Imagine you are a person navigating through a maze starting at the “start” point. On a piece of paper, 
                                write down step by step directions how you would move through the maze. For example, “move forward 2 squares” or “turn left”. </li>
                            <li>Continue writing directions until you can reach the finish point.</li>
                            <li>Test your maze! Follow the directions EXACTLY how they’re written, even if they are incorrect to simulate how computers follow directions. 
                                <ol type="a">
                                    <li>One way students can do this is by swapping their list of directions with a partner and having each student follow the other’s 
                                        directions and see if they successfully navigated the maze. </li>
                                    <li>Another option would be to ask a student to volunteer and you (the instructor) can use their directions to try to navigate 
                                        through the maze in front of the class.</li>
                                </ol>
                            </li>
                            <li>If you could successfully make it to the finish line, congratulations! However, if your directions led you to crash into a wall, 
                                your program has bugs and you need to debug your program.</li>
                            <li>To debug your program, carefully go through your program step by step to see what went wrong. Even one small mistake can mess up 
                                your whole program, so look very closely!</li>
                            <li>If you did have bugs, rewrite your program and try again. </li>
                        </ol>
                <h2 id="Discussion">Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <ul>
                    <li>Discuss the importance of telling the computer exactly what to do and what happens when there are bugs
                        <ul><li>Bugs can cause a program to crash</li></ul>
                    </li>
                    <li>Discuss more generally how computers differ from humans
                        <ul>
                            <li>We can usually use reason to figure out what to do, but computers/programs can’t 
                            think on their own. That’s why they need a human to give clear directions about what to do.</li>
                            <li>Even in instances of AI, such as ChatGPT, a real person codes and programs it</li>
                        </ul>
                    </li>
                    <li>Discuss how computers have changed the way people think, interact, live, and communicate
                        <ul>
                            <li>People need to be good problem solvers in order to work with computers
                                <ul><li>Just like how in the maze activity, it can sometimes be difficult to strategize and 
                                    plan the route through the maze, while anticipating potential obstacles and making decisions to navigate effectively
                                </li></ul>
                            </li>
                            <li>The use of computers has encouraged people to think more creatively. Often times in programming, 
                                you have to experiment with different strategies and approaches.</li>
                        </ul>
                    </li>
                    </ul>
                    <h2>Additional Resources</h2>
                    <a href="https://studio.code.org/hoc/1">Maze Game on Code.org (highly recommended)</a>
                    <ul>
                        <li>Students can use the fundamental ideas from this activity and apply it to this game on their devices.</li>
                        <li>The maze is a bit more complicated and set up as a game instead of just a maze.</li>
                        <li>It utilizes code blocks and tests the student’s code to see if they completed the levels successfully.</li>
                        <li>This game just helps further connect the paper maze activity to actually programming but uses the same concepts.</li>
                    </ul>
            </div>
        </div>
    );
}

export default MazeModule;