import React, { useEffect } from 'react';
import './MakeCodeModule.css';

import heartImg from './heart.jpg';
import homeImg from './makecodeImages/home.png';
import moduleImg from './makecodeImages/module.png';
import step2aImg from './makecodeImages/step2a.png';
import step2bImg from './makecodeImages/step2b.png';
import step2cImg from './makecodeImages/step2c.png';
import step3Img from './makecodeImages/step3.png';
import doneImg from './makecodeImages/done.png';
import JSImg from './makecodeImages/JS.png';
import pythonImg from './makecodeImages/python.png';

function MakeCodeModule() {
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
        <div class="makecode">
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
            <h1>Introduction to MakeCode:<br></br><i>Block Coding a "Beating" Heart</i></h1>
            <img src={heartImg} alt="Heart" class="header-image"></img>
            <div class="body">
                <h2 id="STEELS Standards 6-8">6-8 STEELS Standards</h2>
                    <ul>
                        <li><a href="https://files5.pdesas.org/050205197024147196040149181007017248032244235080/Download.ashx?hash=2.2">3.5.6-8.F</a></li>
                        <li><a href="https://files5.pdesas.org/177208096231121112061065043070011224112245220020/Download.ashx?hash=2.2">3.5.6-8.M</a></li>
                        <li><a href="https://files5.pdesas.org/168187066151024048116205196005223142111099005219/Download.ashx?hash=2.2">3.5.6-8.N</a></li>
                        <li><a href="https://files5.pdesas.org/169090007038056100217210124003150051027020137024/Download.ashx?hash=2.2">3.5.6-8.S</a></li>
                        <li><a href="https://files5.pdesas.org/019172020242187031073166154060018088195219119221/Download.ashx?hash=2.2">3.5.6-8.AA</a></li>
                        <li><a href="https://files5.pdesas.org/202207034238051062213202015009077219061167227169/Download.ashx?hash=2.2">3.5.6-8.CC</a></li>
                        <li><a href="https://files5.pdesas.org/045225123022235241112123166034241118193020004055/Download.ashx?hash=2.2">3.5.6-8.HH</a></li>
                    </ul>
                <h2 id="STEELS Standards 9-12">9-12 STEELS Standards</h2>
                    <ul>
                        <li><a href="https://files5.pdesas.org/210068028204179255183193205226156047092243105180/Download.ashx?hash=2.2">3.5.9-12.J</a></li>
                        <li><a href="https://files5.pdesas.org/161203195084170179233068016174194158009105195187/Download.ashx?hash=2.2">3.5.9-12.N</a></li>
                        <li><a href="https://files5.pdesas.org/077243227002061056253089236238029152122022131221/Download.ashx?hash=2.2">3.5.9-12.U</a></li>
                        <li><a href="https://files5.pdesas.org/249184236118237112138065070190000199084023253024/Download.ashx?hash=2.2">3.5.9-12.BB</a></li>
                        <li><a href="https://files5.pdesas.org/222150208161165221218230117007195241191135055206/Download.ashx?hash=2.2">3.5.9-12.LL</a></li>
                    </ul>
                <h2 id="Objectives">Obectives</h2>
                    <ul>
                        <li>Students will understand how to interact with Microsoft's MakeCode resource</li>
                        <li>Students will learn how to block code a flashing / ”beating” heart</li>
                        <li>Students will review what their code would've looked like in JavaScript and Python</li>
                    </ul>
                <h2 id="Materials">Materials</h2>
                    <ul>
                        <li><a href="https://makecode.microbit.org/">Activity website</a> (no account necessary)</li>
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=hiERNxxfxJQ">Supplemental tutorial</a></li>
                            </ul>
                        <li><b>Optional</b>: a Microsoft micro:bit</li>
                    </ul>
                <h2 id="Basic Vocab">Basic Vocab</h2>
                    <ul>
                        <li><b>Block coding</b>
                            <ul><li>A form of beginner programming where visual blocks that represent real coding logic are arranged to create functional programs.</li></ul>
                        </li>
                        <li><b>JavaScript</b>
                            <ul><li>A high-level, interpreted scripting language used primarily in web development to create dynamic and interactive websites.</li></ul>
                        </li>
                        <li><b>Python</b>
                            <ul><li>A high-level, interpreted programming language known for its simplicity and readability, widely used for web development, data analysis, artificial intelligence, and more.</li></ul>
                        </li>
                        <li><b>Loop</b>
                            <ul><li>A programming construct that repeats a sequence of instructions until a specific condition is met or a certain number of iterations are completed.</li></ul>
                        </li>
                    </ul>
                <h2 id="Introduction">Introduction</h2>
                    <p>Begin by asking students if they have heard of Microsoft or block coding before. Discuss with them how large-scale of a technology company Microsoft is, including the impacts that Microsoft has had on their daily lives, before starting your discussion on block coding.</p>
                    <p>Now, initiate further discussion about what they think coding entails. It is easy (and humorous) to think of this abstract concept of “coding” where someone is hunched over their computer in a dark room somewhere, wearing a hoodie, and “hacking into the mainframe.” However, emphasize strongly how coding is something that ANYONE can do - even without a hoodie! 😊 For this specific activity, though, what you <i>will</i> need, preferably, is every student with a personal computer to work freely on.</p>
                    <p>This module's activity will be utilizing Microsoft's MakeCode resource, which is a great tool for getting into coding, starting with the basics of block coding. Block coding is completely beginner-friendly; instead of typing a coding language, you simply drag and drop jigsaw-like pieces together to build things. The visual blocks do, however, actually represent real-life coding logic and programming concepts (such as loops). Furthermore, these blocks can be arranged in special ways to create functional programs, just as those in and/or for our computers. Microsoft's MakeCode resource aids in the visualization of this process so that you will be able to see real-time changes, as well as obtain hands-on exposure to the realm of coding!</p>
                <h2>Flashing Heart Tutorial</h2>
                    <ol>
                        <li>Navigate to <a href="https://makecode.microbit.org/">Microsoft MakeCode</a> where you will be directed onto the home page, as shown below. NOTE: you are <i>not</i> required to login or create an account to interact with this resource.</li>
                        <img src={homeImg} alt="Home"></img>
                        <li>Locate the “Flashing Heart” tutorial and click on “Start Tutorial” on the “Blocks” option.
                            <ul><li><b>Optional</b>: click on “Play Video Lesson” which will direct you to <a href="https://www.youtube.com/watch?v=hiERNxxfxJQ">YouTube</a> where you may follow a supplemental video tutorial.</li></ul>
                        </li>
                        <img src={moduleImg} alt="Module"></img>
                        <li>Once the Flashing Heart - Blocks tutorial page loads, follow the directions at the top of the screen: <i>Click on the <b>Basic</b> category in the Toolbox…</i> (see below)</li>
                        <img src={step2aImg} alt="Step2a"></img>
                        <li><i>…Drag the <b>show leds</b> block into the <b>forever block</b>…</i> (see below). Here, the <b>forever</b> block represents what is referred to in coding as a loop.
                            <ul><li>RECALL - <b>Loop</b>: programming construct that repeats a sequence of instructions until a specific condition is met or a certain number of iterations are completed.</li></ul>
                        </li>
                        <img src={step2bImg} alt="Step2b"></img>
                        <li><i>…Then in the <b>show leds</b> block, click on the squares to draw a heart design.</i> (see below)</li>
                        <img src={step2cImg} alt="Step2c"></img>
                        <li>Now, click the “Next” button, which will instruct you to: <i>Drag another <b>show leds</b> block underneath the first.</i> (see below)</li>
                        <img src={step3Img} alt="Step3"></img>
                        <li>Notice how the animated heart is “beating” now? Click the “Next” button again, which will congratulate you on your new ⭐ flashing heart animation! ⭐</li>
                    </ol>
                <h2 id="Class Activity">Class Activity</h2>
                    <p>While creating a flashing heart animation is exciting in and of itself, this module aims to dig deeper into some real code behind this block coding exercise!</p>
                    <ol>
                        <li>Once you have clicked through all of the following steps via the “Next” button, followed by the “Done” button, you will be taken to a page like the one below. At the top, locate the “Blocks” button, and either click the “JavaScript” button next to it, or you may click the down arrow symbol next to “JavaScript” to select either JavaScript or Python. For now, let's look at the JavaScript, so click on that one.</li>
                        <img src={doneImg} alt="Done"></img>
                        <li>This will take you to a page displaying different symbols and characters than the blocks we were previously working with. Would you believe that the blocks were essentially a user-friendly medium to write the actual JavaScript code, as shown below? It's true! Whereas blocks are utilized as form of beginner programming (“block coding”) such that visual blocks are arranged to create functional programs representing <i>real</i> coding logic, what we see below <i>is</i> the real code, in JavaScript!</li>
                        <img src={JSImg} alt="JS"></img>
                        <li>Now, locate the drop down arrow at the top again, but select “Python” this time (shown below). Compare the two. What do you notice is similar between them? What do you notice is different?</li>
                        <img src={pythonImg} alt="Python"></img>
                    </ol>
                    <p><b>Hint (differences)</b>: the JavaScript uses the syntax <code>basic.forever(function on_forever()...)</code> to encapsulate the beating heart, whereas Python uses <code>def on_forever(): ... basic.forever(on_forever).</code></p>
                    <p><b>Hint (similarities)</b>: both the JavaScript and Python define a function <code>on_forever()</code>, of which <code>basic.forever()</code> invokes the function as an argument. Additionally, the graphics are displayed by calling a function on “basic”: <code>basic.showLeds(...)</code> for the JavaScript and <code>basic.show_leds(...)</code> for the Python.</p>
                <h2 id="Summary">Summary</h2>
                    <p>Bring the class back together and have them discuss the strategies they employed and the challenges they faced during the creation of the beating heart animation via block coding, and the following code analysis.</p>
                    <p>Discuss the similarities and differences between block coding and programming languages like the ones seen (although JavaScript is technically a “scripting” language), followed by the similarities and differences between JavaScript and Python. What may coding be used for in different real-world applications? Include the importance and utility that loops can offer within certain code applications.</p>
                    <p>Key concepts:</p>
                    <ul>
                        <li><u>Block coding</u>: Beginner-friendly programming using visual blocks.</li>
                        <li><u>JavaScript</u>: High-level scripting language for web development.</li>
                        <li><u>Python</u>: High-level programming language known for simplicity and readability.</li>
                        <li><u>Loops</u>: Programming construct for repetitive tasks.</li>
                    </ul>
                    <p>Overall, this module aims to provide students with hands-on experience in (block) coding using Microsoft's interactive and engaging MakeCode resource, while also familiarizing students with basic programming concepts as well as comparing different coding languages that perform the same function.</p>
                <h2 id="Discussion">Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <ul>
                        <li>What would have happened if we added an extra <b>show leds</b> block INSIDE of the <b>forever</b> block?
                            <ul><li>Consider both an <i>empty</i> <b>show leds</b> block and a <i>populated one</i> (e.g., the heart design one)</li></ul></li>
                        <li>What would have happened if we added an extra <b>show leds</b> block OUTSIDE of the <b>forever</b> block?
                            <ul><li>Consider both an <i>empty</i> <b>show leds</b> block and a <i>populated one</i> (e.g., the heart design one)</li></ul></li>
                        <li>What would have happened if we removed the <b>forever</b> block entirely, or never had it at all?</li>
                    </ul>
            </div>
        </div>
    );
}

export default MakeCodeModule;