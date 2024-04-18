// import React from 'react';
import React, { useEffect } from 'react';
import './ScratchModule.css';

import scratchImg from './Scratch.png';
import scratchBlock from './ScratchBlocks.png'

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
        <div class="scratch">
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
            <h1>Introduction to Scratch:<br></br><i>Creative Coding</i></h1>
            <img src={scratchImg} alt="Scratch"></img>
            <div class="body">
                <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul>
                        <li><a href="https://files5.pdesas.org/250014226114139172173254247149098013233116174016/Download.ashx?hash=2.2">3.5.6-8.G</a></li>
                        <li><a href="https://files5.pdesas.org/055216065045142101091198140253174218018106005019/Download.ashx?hash=2.2">3.5.6-8.K</a></li>
                        <li><a href="https://files5.pdesas.org/104225195229097234252036052078158115232233084229/Download.ashx?hash=2.2">3.5.6-8.P</a></li>
                        <li><a href="https://files5.pdesas.org/010055042080117107037076135031230155085176210204/Download.ashx?hash=2.2">3.5.6-8.Q</a></li>
                        <li><a href="https://files5.pdesas.org/169090007038056100217210124003150051027020137024/Download.ashx?hash=2.2">3.5.6-8.S</a></li>
                        <li><a href="https://files5.pdesas.org/225125079146198173223229244205143071127114037068/Download.ashx?hash=2.2">3.5.6-8.U</a></li>
                        <li><a href="https://files5.pdesas.org/011052090081143130065135076036209199015185251214/Download.ashx?hash=2.2">3.5.6-8.V</a></li>
                        <li><a href="https://files5.pdesas.org/191077107162061033191092180254094011093001251131/Download.ashx?hash=2.2">3.5.6-8.X</a></li>
                        <li><a href="https://files5.pdesas.org/067057030146123187047085208090089082001012155008/Download.ashx?hash=2.2">3.5.6-8.GG</a></li>
                    </ul>
                <h2 id="Objectives">Obectives</h2>
                    <ul>
                        <li>Students will understand how to navigate the Scratch interface</li>
                        <li>Students will understand how to chain motion blocks together to create a simple animation</li>
                        <li>Students will understand basic control structures, conditionals, and loops</li>
                    </ul>
                <h2 id="Materials">Materials</h2>
                    <ul>
                        <li><a href="https://scratch.mit.edu/">Scratch Website</a></li>
                        <li>A personal computer</li>
                    </ul>
                <h2 id="Basic Vocab">Basic Vocab</h2>
                    <ul>
                        <li><b>Sprite</b>
                            <ul><li>The objects on the Scratch stage that perform actions</li></ul>
                        </li>
                        <li><b>Stage</b>
                            <ul><li>Where the project is displayed when active</li></ul>
                        </li>
                        <li><b>Blocks</b>
                            <ul><li>Programming commands that you snap together to create a program in Scratch</li></ul>
                        </li>
                        <li><b>Conditional</b>
                            <ul><li>Expressions that evaluate to either true or false and allow computers to make decisions based on a specific criteria</li></ul>
                        </li>
                    </ul>
                <h2 id="Introduction">Introduction</h2>
                    <p>Introduce Scratch as a means to create interactive stories, games, and animations. It was first launched in 2007 by the Lifelong Kindergarten Group at the MIT Media Lab and was developed with the intention of providing an intuitive platform allowing for creative expression. As one of the first kid-friendly open source resources of its time, it drew in users, teachers and students alike, and fostered a community of young minds seeking to create, with some going as far as creating extensions that improve user experience. </p>
                    <p>Although lacking the finesse of professional cartoons and animations, Scratch covers a variety of actions, environments, and stories, only limited by creativity. To demonstrate the potential of Scratch, you can display some finished projects located <a href="https://scratch.mit.edu/explore/projects/all/"><u>here</u>.</a></p>
                    <p>To navigate to your own project, click create, located near the top next to the Scratch logo</p>
                <h2>Basic Blocks</h2>
                    <p>Start with the motion blocks ⇒ As the name suggests, they all make the sprite perform a motion. To utilize a block, drag it from its side  panel to the center. Clicking on it will make the sprite move as specified. To delete a block, simply click on it so that it is highlighted, and hit delete.</p>
                    <p>Go through a few of the motion blocks with the class and observe what happens each time and encourage them to play around with all the possible options so they know what they have at their disposal. Values can be altered as well to perform more specific actions. For example, instead of moving the default ten steps, you can have your sprite take a larger step of 100. </p>
                    <p><i>Try some negative values too and draw connections to how the stage is essentially a large coordinate grid</i></p>
                    <p>As students grow more comfortable with the interface, they can independently explore the Looks and Sounds blocks as well.</p>
                <h2>Chaining Blocks</h2>
                    <p>Combining actions allow for multiple actions to happen simultaneously. By snapping two blocks together to create a combined block. Try adding a “Say Hello” block under a “Move 10 Steps” block so that they snap together. Clicking the large block will trigger both actions at once! </p>
                <h2>Events</h2>
                    <p>Event blocks focus on specifying when an action occurs. Essentially think of it as When x Do y. By adding an Event block to your Action block, you can induce the action at will. Notice that all the Event blocks are header blocks since they are the highest level of control. Try adding a “When Flag clicked” block followed by some basic blocks. Clicking the green flag at the top will run the block. Remove it and the green flag has no effect anymore! </p>
                <h2>Control</h2>
                    <p>Control blocks help control what occurs on stage. It dictates when and how many times certain actions should be performed. Observe the three main types: loops, ifs, and commands. </p>
                    <p>Loops “loop” through the block UNTIL the end condition is met. Try the “Repeat 10” block. Any action placed inside it will run ten times! In this case, the block is looped through ten times. What other Control blocks are loops? (“Forever” and “Repeat until”)</p>
                    <p>If blocks only run IF a certain condition is met. Note that the two if blocks take in a diamond shaped condition. Go through all the different types of blocks and take note of which ones would fit. To demo you can build a block stack like the one pictured below. Discuss why you might need the wait in between. (The blocks run sequentially without the wait, once the flag is clicked, the sprite checks if it senses that it is touching the mouse. Obviously he isn’t since the mouse is on the flag and so the if block will never be true) </p>
                    <img src={scratchBlock} alt="Scratch"></img>
                    <p>In this case, the sprite will only move 10 steps IF it is touching the mouse pointer. </p>
                    <p>The Command blocks are the rest of them. They instruct simple commands such as create a clone or delete a clone.</p>
                <h2>Fun Bonuses</h2>
                    <li>Access backdrop on the bottom right to change the scene</li>
                    <li>Choose a sprite on the bottom right to choose from a wide range of sprites and customize its size and direction</li>
                <h2 id="Class Activity">Class Activity</h2>
                    <p><b>Option 1:</b></p>
                    <p>Give the class some time to independently explore Scratch and create their own animation. Perhaps help brainstorm ideas related to concepts in their other lessons or ones that teach helpful lessons. For example, an environmental awareness one based in the arctic featuring a polar bear!</p>
                    <p><b>Option 2:</b></p>
                    <p>Have the whole class collaborate to create one animation! Take ideas and opinions from the students and have everyone involved in the creating and debugging process.</p>
                    <p><b>Option 3:</b></p>
                    <p>Instruct students to program their sprite to do a variety of tasks. Here it is very important to study how different students may have taken different approaches to come to the same desired output. Analyze the differences and the pros and cons of each approach.</p>
                    <blockquote>
                        <ul>
                            <li>Have the sprites throw a dance party complete with music and a variety of dance moves</li>
                            <li>Create a weather forecast for the week (weather should change day to day or depending on user inputs)</li>
                            <li>Create a virtual pet that changes outfits, sounds, and position based on mood, user input, etc.</li>
                        </ul>
                    </blockquote>
                <h2 id="Summary">Summary</h2>
                    <p>Bring the class back together and have them share their animations(as applicable based on classroom activity). Discuss the strategies they employed and the challenges they faced during the activity.</p>
                    <p>Discuss how concepts (problem solving, sequencing, loops, conditionals, and event handling) introduced in Scratch mirror many engineering and coding principles. Encourage students to think about where else in their lives they may have been unconsciously utilizing these concepts. What other industries do they think these concepts are beneficial? </p>
                    <p>Emphasize the importance of creativity in Computer Science/Engineering. Coding requires more flexibility than one might think and knowing how to adapt and attack a problem from different angles will make you a successful programmer. In addition, much like with your animation, your computer science projects are only capped by your imagination!</p>
                    <p>In summary, Scratch acts as an excellent stepping stone into the world of engineering, primarily computer science. It introduces fundamental programming concepts in a visual environment and these concepts act as building blocks to understand more advanced programming languages and techniques! In addition, Scratch promotes creativity and experimentation which allows young programmers to build their problem solving skills.</p>
                <h2 id="Discussion">Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <ul>
                        <li>Computer Science concepts are all around us. At its core, computer science breaks down large tasks into small manageable pieces, something we already naturally do.
                            <ul>
                                <li>Sequential list of tasks to get ready in the morning</li>
                                <li>Conditionals when making decisions based on a varying factor</li>
                                <li>Looping through the same classes every day until the end of the year</li>
                                <li>For more professional applications
                                    <ul>
                                        <li>Design phases of engineers. Engineers iterate through multiple design phases optimizing and refining each time until the desired performance is met</li>
                                        <li>Sensor feedback use conditionals to control robotics</li>
                                        <li>Events in Civil engineering such as earthquakes and floods trigger other actions</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Future Applications
                        <ul>
                            <li>Software Engineering
                                    <ul>
                                        <li>The concepts taught in Scratch provide a strong foundation for students looking to pursue a career in computer science</li>
                                    </ul>
                            </li>
                            <li>Game Development
                                    <ul>
                                        <li>Scratch also introduces game design at its most basic level. Refining the crude animation of Scratch to the sophistication of games seen on screens simply requires an expansion of these concepts and higher level services and resources</li>
                                    </ul>
                            </li>
                            <li>Education
                                    <ul>
                                        <li>Scratch projects are a fun and informative way to interact with others and perhaps teach something</li>
                                    </ul>
                            </li>
                            <li>Digital Art and Media
                                    <ul>
                                        <li>Those interested in digital art and media may pursue careers in graphic design, animation, or digital marketing, leveraging their programming skills to create engaging visual content for various platforms</li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    </ul>
            </div>
        </div>
    );
}

export default SkeletonModule;