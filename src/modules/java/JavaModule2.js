import React, { useState } from 'react';
import '../template/Module.css';
import javaImg from './java.png';
import arrImg from './arrayDec.png';
import forImg from './forLoop.png';
import { saveAsPDF } from '../downloadPDF';


function JavaModule2() {
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
                    <h1><span class="pixelated">Introduction to Java 2.0:</span><br></br><i>Intermediate Programming Concepts</i></h1>
                    <img src={javaImg} alt="Java"></img>
                </div>
                {isDownloading ? (
                    <p className='downloading'>Downloading...</p>
                ) : (
                    <button className="download-button" onClick={() => saveAsPDF('.anyModuleContent', 'Java2Module.pdf', setIsDownloading)}>
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
                        <li>Students will understand what arrays are and how to access elements within them</li>
                        <li>Students will understand another form of control flow: for loops</li>
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
                        <li><b>Arrays</b>
                            <ul><li>A data structure that stores a fixed-size sequence of elements of the same type.</li></ul></li>
                        <li><b>Syntax</b>
                            <ul><li>The set of rules that defines the structure and format of code in a programming language. It specifies how symbols, keywords, and operators should be used to write valid code statements that the compiler or interpreter can understand.</li></ul></li>
                        <li><b>Loops</b>
                            <ul><li>A programming construct that repeats a block of code multiple times.</li></ul></li>
                        <li><b>Compiler</b>
                            <ul><li>A program that translates code written in a high-level programming language (like C++, Java, or Rust) into machine code that the computer's processor can execute directly.</li></ul></li>
                        <li><b>Program</b>
                            <ul><li>A set of instructions written in a specific programming language that tells a computer how to perform a particular task or set of tasks.</li></ul></li>
                    </ul>
                    <h2 id="Introduction">Introduction</h2>
                    <p>In this module, we’ll continue expanding on our knowledge of Java by exploring TWO key concepts that are essential for creating more complex programs: arrays AND for loops. These tools will allow us to handle multiple pieces of data at once and execute repeated actions with control.</p>
                    <p>Arrays let us store and work with multiple values of the same type in a single variable.</p>
                    <p>For Loops give us a convenient way to repeat code a specified number of times.</p>

                    <p>Ask the class how arrays and for loops may relate to the concepts learned in the first module. Notice that the arrays must hold values of the same variable type, and a for loop seems to have the same functionality as a while loop.</p>

                    <h3>Arrays:</h3>
                    <p>Arrays allow us to store a series of values of the same type in a single variable. Each element in an array can be accessed by its index, counting elements starting at 0.</p>
                    <h4>Declaration:</h4>
                    <p>Both of the arrays below hold ints. An array of strings would be declared String[] name = new String[10] myInts is a variable containing an empty array of size 10. intValues is an array of numbers (1, 5, 18, 3, 7, 9, 23, 5, 11, 2)</p>
                    <img src={arrImg} alt="Array"></img>
                    <p>Each of the elements has its own unique index, counting from 0. For example, in the above example, the number 3 is held in index 3, and 7 in 4. To access the element in the array, we use the following syntax:” name[index]”</p>
                    <p>Try instantiating your own array of numbers, and print out different elements of it through the index. An example is shown below:</p>
                    <p>Printing out index two of the array results in 6.</p>
                    <pre><code>
                        int[] temp = &#123;1, 4, 6, 2&#125;;
                        System.out.println(temp[2]);
                    </code></pre>
                    <p>You can also update values of an array. Simply specify which index you want modified and pass in the desired value with the syntax: “temp[index] = new value;”. Using the same array from above, try changing a value!</p>
                    <p>Instead of 6, 10 is printed instead as we have changed the value prior to printing</p>
                    <pre><code>
                        int[] temp = &#123;1, 4, 6, 2&#125;;
                        temp[2] = 10;
                        System.out.println(temp[2]);
                    </code></pre>
                   
                   

                    <h3>For Loops:</h3>
                    <p>A for loop helps us repeat actions for a specific number of times, and it's great when you know how many times you want to repeat something. Often used together with arrays, it allows us to traverse the entire array in sequence.</p>
                    <h4>Declaration:</h4>
                    <p>A new variable, in this case “i” is declared and initialized. In each iteration of the for loop, i is incremented by 1 as decreed by “i++”.  Note that this incrementation can be changed to any other statement, “i = i - 2” for example. For as long as the loop continuation condition holds true, the for loop will keep running with each new iteration having i at a different value.</p>
                    <img src={forImg} alt="For Loop"></img>
                    <p>Have the class attempt to use a for loop to print every element of their array from early. Think about when the for loop should end.</p>
                    <p>Hint: Arrays can’t go out of bounds. You want it to loop through exactly every element of the array and not one more! You can do this manually if you know the length of the array, or use “name.length” , a built-in java method.</p>
                    <h4>Solution:</h4>
                    <pre><code>
                        int[] temp = &#123;1, 2, 3, 4, 5, 6&#125;;
                        for (int i = 0; i &lt; temp.length; i++)&#123;
                            System.out.println(temp[i]);
                        &#125;
                    </code></pre>

                    <h2 id="Class Activity">Class Activity</h2>
                    <p><b>Option 1:</b></p>
                    <p>Create an array of 15 grades using any values you desire. Calculate the average of the class! For an extra challenge, apply a curve by adding 10 to every, or just some grades before recalculating the average.</p>

                    <p><b>Solution</b></p>
                    <pre><code>
                        int[] grades = &#123;85, 92, 78, 64, 89, 73, 95, 88, 76, 84, 91, 67, 80, 93, 70&#125;;<br></br>
                        int total = 0;<br></br>
                        for (int i = 0; i &lt; grades.length; i++)&#123;<br></br>
                        total += grades[i];<br></br>
                        &#125;<br></br>
                        System.out.println("Average grade before curve:");<br></br>
                        System.out.println(total / grades.length);<br></br>
                        <br></br>
                        //curving the class by 5 points<br></br>
                        for (int i = 0; i &lt; grades.length; i++)&#123;<br></br>
                        grades[i] = grades[i] + 5;<br></br>
                        &#125;<br></br>
                        <br></br>
                        int curvedTotal = 0;<br></br>
                        for (int i = 0; i &lt; grades.length; i++)&#123;<br></br>
                        curvedTotal += grades[i];<br></br>
                        &#125;<br></br>
                        <br></br>
                        System.out.println("Average grade after curve:");<br></br>
                        System.out.println(curvedTotal / grades.length);<br></br>                        
                    </code></pre>
                    <p>We begin by initializing an array of realistic values for grades. Note that students may populate their arrays differently resulting in varying values for averages. There is no one right answer! We then also initialize the variable total to hold the summation of all the grades. Using a for loop, we loop through the entire array of grades and add them to our total variable. Finally, we simply print the average which we calculate by dividing the total sum by the length.</p>
                    <p>For the challenge activity, first we must loop through the array and modify the values of each element. We set each element to itself + 5 through each iteration, applying the curve. Then much like before, we loop through it again from the beginning and accumulate the total sum to find the average.</p>

                    <p><b>Option 2:</b></p>
                    <p>Find the minimum and maximum of an array.</p>
                    <p><b>Solution:</b></p>
                    <pre><code>
                        int[] grades = &#123;85, 92, 78, 64, 89, 73, 95, 88, 76, 84, 91, 67, 80, 93, 70&#125;;<br></br>
                        int min = 10000;<br></br>
                        int max = 0;<br></br>
                        for (int i = 0; i &lt; grades.length; i++)&#123;<br></br>
                        if (grades[i] &lt; min)&#123;<br></br>
                        min = grades[i];<br></br>
                        &#125; else if (grades[i] &gt; max)&#123;<br></br>
                        max = grades[i];<br></br>
                        &#125;<br></br>
                        &#125;<br></br>
                        System.out.println("Min of array: ");<br></br>
                        System.out.println(min);<br></br>
                        System.out.println("Max of array: ");<br></br>
                        System.out.println(max);<br></br>
                        
                    </code></pre>

                    <p>We begin by initializing an array of any values we desire. Next we assign an arbitrarily high value for minimum (Keep in mind this value must be larger than any value in the array you created. Think about why!  Or you can simply set it equal to the first element of the array with int min = grades[0]. Talk about why this would work as well) We do a similar thing for max, assigning a value lower than any within the array, or simply the value of the first element. </p>
                    <p>Then we traverse the array using a for loop to access every element of the array. Using our if statements, we check if the current value is smaller than min. If it is, we update min. The else if branch then checks if it is larger than max, updating max if so. A common mistake made here is simply having an else arm. Without the conditional specified, max would not be updated correctly. Finally we can print and verify that our program works as desired!</p>
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
                                    <ul><li>Discuss the similarities and differences between while loops and for loops
                                        <ul><li>When might you use one over the other</li></ul>
                                        <ul><li>Recognize that you can achieve the same functionality with both of them, but one may provide cleaner code</li></ul></li></ul>
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

export default JavaModule2;