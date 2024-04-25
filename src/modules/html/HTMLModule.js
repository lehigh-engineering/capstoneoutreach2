import React, { useEffect } from 'react';
import './HTMLModule.css';

import HTMLImg from './HTML_logo.jpg';

function HTMLModule() {
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
        <div class="HTML">
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
            <h1>Introduction to HTML:<br></br><i>A Basic Webpage</i></h1>
            <img src={HTMLImg} alt="HTML"></img>
            <div class="body">
                <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul><li>TBD</li></ul>
                    {/* <ul>
                        <li><a href="https://files5.pdesas.org/050205197024147196040149181007017248032244235080/Download.ashx?hash=2.2">3.5.6-8.F</a></li>
                        <li><a href="https://files5.pdesas.org/108112041116232255207228146204090032226252193124/Download.ashx?hash=2.2">3.5.6-8.I</a></li>
                        <li><a href="https://files5.pdesas.org/003238120220204089254017007080175097174255132133/Download.ashx?hash=2.2">3.5.6-8.O</a></li>
                        <li><a href="https://files5.pdesas.org/250227253081094174158106133032253203029161074103/Download.ashx?hash=2.2">3.5.6-8.Z</a></li>
                        <li><a href="https://files5.pdesas.org/235036232045134075125059046142179129042095134123/Download.ashx?hash=2.2">3.5.6-8.BB</a></li>
                        <li><a href="https://files5.pdesas.org/101203203242197017109096133004207133057127052228/Download.ashx?hash=2.2">3.5.6-8.EE</a></li>
                        <li><a href="https://files5.pdesas.org/031176110099065030206242252068251045122192108014/Download.ashx?hash=2.2">3.5.6-8.KK</a></li>
                    </ul> */}
                <h2 id="Objectives">Obectives</h2>
                    <ul>
                        <li>Students will understand the fundamental concepts of HTML (Hypertext Markup Language)</li>
                        <li>Students will be able to create simple web pages using HTML</li>
                        <li>Students will understand the importance of HTML in our technological world</li>
                    </ul>
                <h2 id="Materials">Materials</h2>
                    <ul>
                        <li>Computer with any text editor (notepad, textedit, visual studio code, etc)</li>
                        <li><a href="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf">HTML Cheat Sheet</a></li>
                        <li><a href="https://devhints.io/css">CSS Cheat Sheet</a></li>
                    </ul>
                <h2 id="Basic Vocab">Basic Vocab</h2>
                    <ul>
                        <li><b>Markup Language</b>
                            <ul><li>A set of rules and symbols used when doing a markup of a document</li>
                            </ul>
                        </li>
                        <li><b>Web page</b>
                            <ul><li>A document connected to the World Wide Web and viewable to anyone connected to the internet who has a web browser</li>
                            </ul>
                        </li>
                        <li><b>Syntax</b>
                            <ul><li>The rules and arrangement of words to form comprehensible and recognizable commands</li></ul></li>
                        <li><b>Text editor</b>
                            <ul><li>A system or program that allows a user to edit text</li>
                            </ul>
                        </li>
                        <li><b>Elements</b>
                            <ul><li>Building blocks of HTML. Each element has a name and can have attributes that give it special properties</li>
                            </ul>
                        </li>
                        <li><b>Attributes</b>
                            <ul><li>Extra information added to HTML tags to provide special information or additional properties</li></ul></li>
                        <li><b>Tags</b>
                            <ul><li>Surrounds elements and are enclosed in "<></>” brackets</li></ul></li>
                    </ul>
                <h2 id="Introduction">Introduction</h2>
                    <p>Begin by asking students which websites they visit most often or perhaps websites you utilize often in the classroom. Discuss some features that make each web page unique and appealing. For example, a very aesthetically pleasing color scheme, a sleek layout, or user friendly navigation.</p>
                    <p>Draw up a mock website on the board and have students fill it out with their ideas. They may choose where to put a header, a table of contents, format their contents, add images, choose colors, etc. Take the different ideas and opinions and discuss the pros and cons of conflicting ideas to create a class webpage.</p>
                <h2>HTML</h2>
                    <p>Introduce HTML as a way to create a personalized web page with nothing more than a local text editor. The objective for this class for you as a teacher is to attempt to replicate the class webpage as closely as possible in your demonstration before allowing students to branch off and create their own pages.</p>
                    <p>IBegin by instructing your class to open the text editor on their computers and copying the code block below into their text editor:</p>
                    <pre>
                        <code>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                        &lt;head&gt;
                            &lt;title&gt;Your Page Title&lt;/title&gt;
                        &lt;/head&gt;
                        &lt;body&gt;

                            &lt;h1&gt;This is a Heading&lt;/h1&gt;
                            &lt;p&gt;This is a paragraph.&lt;/p&gt;

                        &lt;/body&gt;
                        &lt;/html&gt;
                        </code>
                    </pre>
                    <p>For an optional line by line analysis of the code above:
                        <ul>
                            <li>&lt;!DOCTYPE html&gt;
                                <ul><li>Tells the browser that the file is an HTML5 document</li></ul>
                            </li>
                            <li>&lt;html&gt;
                                <ul><li>Root element of an HTML page</li></ul>
                            </li>
                            <li>&lt;head&gt;
                                <ul><li>Section containing the metadata of an HTML page such as title and link to external resources</li></ul>
                            </li>
                            <li>&lt;body&gt;
                                <ul><li>Section containing the main content of the webpage</li></ul>
                            </li>
                        </ul>
                    </p>
                    <p>Save the file as &lt;any name&gt;.html. The important thing is that the file is saved with an .html extension. Locate the saved file and open it (you might need to right click and select “open with”), you should be redirected to a browser that displays your webpage.</p>
                    <p>After ensuring that the class is able to open their html file, you can play around with the title, heading, and paragraph. Make a change in your text editor, save it, and reopen the html file, and you should see the changes reflected in the browser.</p>

                <h2>Structural Elements:</h2>
                    <p><em>For simplicity, only the opening tag is shown, but every opening tag must have a closing tag</em></p>
                    <ul>
                        <li><b>Headers</b>
                            <ul><li>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, etc. 
                                <ul>
                                    <li>&lt;h1&gt;: The largest and most important</li>
                                    <li>&lt;h2&gt;: Smaller than h1, but still important</li>
                                    <li>&lt;h3&gt;: Smaller than h2, and so on...</li>
                                    <li>Each succeeding header decreasing in size</li>
                                </ul>
                            </li></ul>
                        </li>
                        <li><b>Paragraphs</b>
                            <ul>
                                <li>&lt;p&gt;, Used for paragraphs of text</li>
                            </ul>
                        </li>
                        <li><b>Lists</b>
                            <ul>
                                <li>&lt;ol&gt;, The actual list items are wrapped in &lt;li&gt;</li>
                                <li>The bullet points are numbered</li>
                            </ul>

                            <ul>
                                <li>&lt;ul&gt;, The actual list items are wrapped in &lt;li&gt;</li>
                                <li>Ex.</li>
                                <ul><li>
                                    <pre>
                                    <code>&lt;ol&gt;
                                        &lt;li&gt;hello&lt;/li&gt;
                                        &lt;li&gt;world&lt;/li&gt;
                                    &lt;/ol&gt;
                                    </code>
                                    </pre>          
                                </li></ul>
                            </ul>
                        </li>
                    </ul>


                    <h2><b><i>Advanced (Optional): Styling your page</i></b></h2>
                        <p>Create a new text editor file and save it as stylesheet.css. Ensure both the html files and css files are saved in the same folder. This might take some manual readjusting and movement of files.</p>
                        <p>In the HTML file, add the following line between the &lt;head&gt; tags: &lt;link type="text/css" rel="stylesheet" href="stylesheet.css"/&gt;</p>
                        <p>Verify you were able to successfully link the two files by observing if changes in the .css file are reflected in the .html file. To do so, assuming you have a &lt;h1&gt; tag somewhere in your HTML file, place the following code block into your css file:</p>
                        <pre>
                            <code>
                            h1 &#123;
                                color: red;
                            &#125;                        
                            </code>
                        </pre>
                        <p>Upon reloading your webpage, your header should have changed to red!</p>
                        <p>If there is no change, make sure the two files are linked properly and in the same folder. Also check that BOTH files have been saved properly and you are opening the updated files.</p>
                        <p>With a CSS file, you can adjust layout, color, font, and add decorative features such as animations or columns. CSS works by specifying how an HTML element or elements look. For example, if you have an &lt;ol&gt; element, the CSS portion corresponding to it looks like:</p>
                        <pre>
                            <code>
                                ol &#123;
                                    Insert styling information here
                                &#125;
                            </code>
                        </pre>
                        <p>Any element between &lt;ol&gt; and &lt;/ol&gt; tags will be modified based on the styling information provided. This is called type selection and will be the focus of this class. Refer to the CSS cheat sheet for other selector types.</p>
                        <p>Using the CSS cheat sheet linked in materials, play around with changing your webpage and exploring the many different features you can incorporate. I recommend sticking to fonts and backgrounds for the lesson. Try different fonts/layouts/colors, and observe how your web page reflects the changes. Debug!! When something unexpected happens, trace your code and see if you can identify the issue. Google also has a lot of documentation on css.</p>

                  <h2 id="Class Activity">Class Activity</h2>
                    <p>Have the students create their own web pages using what they learned and the internet as a resource! Potentially introduce a theme: for example, create a holiday themed website, work on raising awareness of a current issue, create a diary/journal, etc</p>
                <h2 id="Summary">Summary</h2>
                    <p>Bring the class back together and have them share their personal websites. Discuss the strategies they employed and the challenges they faced during the activity. Did anyone try something new? Discuss how they went about figuring how to code the feature and what resources they used.</p>
                    <p>Discuss real-world applications of HTML and web pages. What are the corporate and personal uses of web pages? How can a well made web page raise interest and increase user traffic. What would they use their own personal websites for?</p>
                    <p>In summary, HTML is just one of the many tools used in front end applications in the technical industry. It essentially builds the skeleton of any webpage, roughly fleshing out the contents and individual sections. With the  blocky distinct structure of the elements that make up HTML, we can think of HTML as legos. Each individual element represents a block that we use to add a small feature to our overall build of many blocks.</p>
                    <p>Frontend work goes far beyond HTML. HTML is used in tandem with other languages such as css and javascript to really bring your website to life This interplay between languages allow for amazing and unique customization of your webpages!</p>
                <h2 id="Discussion">Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <ul>
                        <li>HTML can be found in EVERY website (and even mobile apps) no matter how complex or the number of technologies used. Basic knowledge of it is very useful for every day applications, not just in computer science
                            <ul><li>Blogs</li></ul>
                            <ul><li>Corporate sites</li></ul>
                            <ul><li>Personal Advertising</li></ul>
                            <ul><li>Game sites</li></ul>
                            <ul><li>Educational sites</li></ul>
                        </li>
                        <li>Design and marketing applications
                            <ul><li>Appealing and interactive websites/emails play a large role in positive user feedback</li></ul>
                            <ul><li>This opens up career opportunities in design, marketing, and even psychology as these skills combine with HTML to create the most attractive and eye catching sites</li></ul>
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default HTMLModule;