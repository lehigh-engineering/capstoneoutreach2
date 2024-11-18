import React, { useState } from 'react';
import '../template/Module.css';
import javaImg from './java.png';
import { saveAsPDF } from '../downloadPDF';


function JavaModule() {
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
                            <li><a href="#Summary">Summary</a></li>
                            <li><a href="#Discussion">Discussion</a></li>
                        </ul>
                    </div>
                )} <div className="toc-toggle" onClick={toggleSidebar}> {isVisible ? '◄' : '►'} </div>
            </div>
            <div className={`anyModuleContent ${isVisible ? 'shift-right' : ''}`}>
                <div class="header-container">
                    <h1><span class="pixelated">Introduction to Java:</span><br></br><i>Basic Programming Concepts</i></h1>
                    <img src={javaImg} alt="Java"></img>
                </div>
                {isDownloading ? (
                    <p>Downloading...</p>
                ) : (
                    <button className="download-button" onClick={() => saveAsPDF('.anyModuleContent', 'JavaModule.pdf', setIsDownloading)}>
                        Download as PDF
                    </button>
                )}
                <div class="body-content">
                    <h2 id="STEELS Standards">STEELS Standards</h2>
                        <ul>
                            <li><a href="https://files5.pdesas.org/163005038051165169006245176208132131190217116096/Download.ashx?hash=2.2">3.5.6-8.H</a></li>
                            <li><a href="https://files5.pdesas.org/108112041116232255207228146204090032226252193124/Download.ashx?hash=2.2">3.5.6-8.I</a></li>
                            <li><a href="https://files5.pdesas.org/225125079146198173223229244205143071127114037068/Download.ashx?hash=2.2">3.5.6-8.U</a></li>
                            <li><a href="https://files5.pdesas.org/235036232045134075125059046142179129042095134123/Download.ashx?hash=2.2">3.5.6-8.BB</a></li>
                            <li><a href="https://files5.pdesas.org/202207034238051062213202015009077219061167227169/Download.ashx?hash=2.2">3.5.6-8.CC</a></li>
                            <li><a href="https://files5.pdesas.org/101203203242197017109096133004207133057127052228/Download.ashx?hash=2.2">3.5.6-8.EE</a></li>
                        </ul>
                    <h2 id="Objectives">Objectives</h2>
                        <ul>
                            <li>Students will understand what variables are and how to declare them in Java</li>
                            <li>Stu dents will understand core programming logic and how to implement them</li>
                            <li>Students will apply the concepts together to create a more complex program that performs a given task</li>
                        </ul>
                    <h2 id="Materials">Materials</h2>
                        <ul>
                            <li>
                                <a href="https://www.programiz.com/java-programming/online-compiler/">Online Java Compiler</a>
                            </li>
                        </ul>
                    <h2 id="Basic Vocab">Basic Vocab</h2>
                        <ul>
                            <li><b>Variables</b>
                                <ul><li>Symbolic name or reference for a value stored in memory that can change over time as the program runs.</li></ul></li>
                            <li><b>Conditional</b>
                                <ul><li>A statement in programming that lets the code make decisions.</li></ul></li>
                            <li><b>Loops</b>
                                <ul><li>A programming construct that repeats a block of code multiple times.</li></ul></li>
                            <li><b>Compiler</b>
                                <ul><li>A program that translates code written in a high-level programming language (like C++, Java, or Rust) into machine code that the computer's processor can execute directly.</li></ul></li>
                            <li><b>Program</b>
                                <ul><li>A set of instructions written in a specific programming language that tells a computer how to perform a particular task or set of tasks.</li></ul></li>
                        </ul>
                    <h2 id="Introduction">Introduction</h2>
                        <p>Programming is like giving instructions to a computer so that it can perform tasks. In Java, we use different tools to write these instructions, such as variables, conditional statements, and loops. These are fundamental building blocks that will help you create programs to solve problems or automate tasks.</p>
                        <p>Begin by having your class open their online Java compilers. Everything today will take place within the “main method” which is what will be called when you run the program. Run the program by clicking the run button and observe the result on the right side. The print statement should have been executed and “Try programiz.pro” is printed.</p>
                        
                    <h3>Basic Variable Types:</h3>
                        <ul>
                            <li><strong>Int</strong>: Represents all integers<br></br>
                                <em>Example</em>: -2, -1, 0, 1, 2
                            </li>
                            <li><strong>Boolean</strong>: Holds a True or False value</li>
                            <li><strong>Char</strong>: A single letter or character<br></br>
                                <em>Example</em>: ‘a’, ‘,’
                            </li>
                            <li><strong>String</strong>: A combination of zero or more characters</li>
                        </ul>

                        <h3>Variable Declaration:</h3>

                        <p>Variables in Java are declared with the following format:</p>
                        <pre><code>Type name = value;</code></pre>
                        <p>For example:</p>
                        <pre><code>int x = 5;</code></pre>
                        <p>This assigns the integer variable <code>x</code> with the value of 5.</p>
                        <p>Have your class create a new variable, assign it a value, and print that value out! The code should look something like this:</p>
                        <pre><code>
                            int myNumber = 10; // Declare and assign a value
                            System.out.println(myNumber); // Print the value
                        </code></pre> 
                        <p>Try setting a string to your int x and observe what happens. Java tells you they have “incompatible types” and won’t compile the code. You can either change the variable type or fix the value you are trying to assign. Play around with the variable types and get familiar with declaring them!</p>
                        
                        <h3>If Conditionals:</h3>
                        <p>Execute a block of code IF something holds true. If conditionals are declared with the following syntax:</p>
                        <pre><code>if (conditional) {
                            // Code to be executed if the conditional evaluates to true
                        }</code></pre>

                        <p><strong>For example:</strong></p>
                        <p>Because the value of <code>x</code> is 5, and <code>5 &gt; 3</code> evaluates to <code>true</code>, the print statement inside is executed.</p>
                        <pre><code>
                            int x = 5;
                            if (x &gt; 3) &#123;
                                System.out.println("inside if");
                            &#125;
                        
                        </code></pre>
                        
                        <h3>While Loops:</h3>
                        <p>Execute a block of code WHILE the conditional holds true. While loops are declared with the following syntax:</p>
                        <pre><code>while (conditional) {
                            // Code to be executed as long as the conditional evaluates to true
                        }</code></pre>
                        <p><strong>For example:</strong></p>
                        <p>Count is initialized with a value of 0. The while loop runs as long as count &lt; 10. As a result, in each iteration of the loop, we print the current value of count and increment it by 1 until it is no longer less than 10</p>
                        <pre><code>
                            int x = 0;
                            while (x &lt; 10) &#123;
                                System.out.println(x);
                                x = x+1;
                            &#125;
                        </code></pre>

                    <h2 id="Class Activity">Class Activity</h2>
                        <p><b>Option 1:</b></p>
                        <p>Have the class try to print out a triangle of stars with the height specified by you! A resulting triangle of height 4 should look something like this:</p>
                        <p>*</p>
                        <p>**</p>
                        <p>***</p>
                        <p>****</p>
                        
                        
                        <p><b>Option 2:</b></p>
                        <p>Write a program that prints out the months corresponding to a number. For example, if x is set to 10, we should print out “October”.</p>
                        <p>This would be a good option to introduce error checking. How would a value of 100 be handled? How about a -5 or a string?</p>

                    <h2 id="Summary">Summary</h2>
                        <p>Bring the class back together and have them share their programs (as applicable based on classroom activity). Discuss the strategies they employed and the challenges they faced during the activity.</p>
                        <p>Have a few volunteers take a deeper dive into their program, walking their peers through the code line by line and verbally explaining their thought process as they coded their solution. Analyze the many ways to do the same task and weigh the pros and cons of each.</p>
                        <p>Discuss some errors they ran into and how they went about solving them. What were the most common ones? Did everyone solve them in the same way? How did they figure out the solution?</p>
                        <p>Discuss the versatility of programming languages such as java. If you have a problem or task, you can code a solution for it! This goes far beyond classroom assignments, many of the world’s largest problems in a variety of fields can be addressed or supplemented with programming solutions!</p>
                        <p>In summary, familiarity with core programming concepts develop a strategic problem solving way of thinking that can be used to help automate and improve upon many small tasks, or play a role in solving important problems.</p>                    
                    
                    <h2 id="Discussion">Discussion</h2>
                        <p><i>(Try to guide student discussion to touch on these)</i></p>
                        <ul>
                            <li>Understanding Errors and Debugging.
                                <ul>
                                    <li>Errors tend to try and be informative of what might go wrong.
                                        <ul><li>Mismatched types, missing semicolons, null pointer exception, index out of bounds, etc</li></ul>
                                    </li>
                                    <li>Logic errors lead to messy results!
                                        <ul><li>Infinite loops</li></ul>
                                        <ul><li>Wrong execution of statements</li></ul>
                                    </li>
                                    <li>Logic Building with Conditionals
                                        <ul><li>Review how the logic executes only when you want to perform a desired task</li></ul>
                                        <ul><li>If and while loops are the core of all logic
                                            <ul><li>There are other ways to simplify their code but the logic behind it remains the same</li></ul></li></ul>
                                        <ul><li>Understanding the end conditions of loops is essential</li></ul>
                                    </li>
                                    <li>Practical Applications
                                        <ul><li>Game design</li></ul>
                                        <ul><li>Basic tasks (calculator, filtering, etc)</li></ul>
                                        <ul><li>Almost Anything!</li></ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default JavaModule;