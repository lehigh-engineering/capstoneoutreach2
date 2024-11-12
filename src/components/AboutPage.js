import React from 'react';
import './AboutPage.css';
import kyraImg from './images/kyra.png'
import berniceImg from './images/bernice.png'
import laraImg from './images/lara.png'
import jacobImg from './images/jacob.png'
import classroomImg from './images/classroom.png'
import packardImg from './images/packard.jpg'


function AboutPage() {
    return (
        <div class="about">
            <section class="ourMission">
                <div class="missionText">
                    <h1>Our Mission</h1>
                    <p>The Computer Science Outreach Program involves collaboration with Lehigh University's P.C. Rossin College of Engineering and its outreach manager, Chayah Wilbers, to develop educational outreach assets aimed at sparking interest in computer science among late elementary, middle school, and high school students.</p>
                    <p>Our goal was to broaden Lehigh's outreach to the wider Bethlehem community, addressing the gap in computer science education and compliance with STEELS (Science, Technology & Engineering, Environmental Literacy & Sustainability) standards by 2025.</p>
                    <p>Our proposed solution was the creation of a website hosting computer science lessons with accompanying plans and activities. The lessons were made to be fun, easy to follow, and hopefully inspire students in the Bethlehem area.</p>
                </div>
                <div class="missionImg">
                    <img src={classroomImg} alt="Classroom"></img>
                </div>
            </section>
            <section class="ourMission">
                <div class="missionImg">
                    <img src={packardImg} alt="Classroom"></img>
                </div>
                <div class="missionText">
                    <h1>Our Journey</h1>
                    <p>Our journey began in Spring 2024 with a vision to provide teachers in the Bethlehem community with access to high quality stand-alone computer science modules that they can easily incorporate into their cirriculum.</p>
                    <p>Along the way we faced many challenges in assessing user needs and balancing them with the realistic design and functionalities of our solution. However, by utilizing our personal experience in computer science and adopting a customer first mentality, we published six modules closely aligned with the STEELS Standards to a user friendly site  </p>
                    <p>As we look ahead, we're excited to continue expanding the resources we offer, refining our site and content, and reach beyond the Bethlehem community, offering these resources to teachers and students all over.</p>
                </div>
            </section>
            <h2>Our Team</h2>
            <section class="ourTeam">
                <div class="teamMember">
                  <img src={kyraImg} alt="Kyra"></img> 
                  <h3>Kyra Lee</h3>
                  <p>Computer Science and Business '25<br/>Full Stack Developer</p>
                </div> 
                <div class="teamMember">
                    <img src={berniceImg} alt="Bernice"></img>
                    <h3>Bernice Wong</h3>
                    <p>Computer Science and Business '25<br/>Full Stack Developer</p>
                </div> 
                <div class="teamMember">
                    <img src={laraImg} alt="Lara"></img>
                    <h3>Lara Flaten</h3>
                    <p>Computer Science '25<br/>Engineering Minor<br/>Frontend Developer</p>
                </div> 
                <div class="teamMember">
                    <img src={jacobImg} alt="Jacob"></img>
                    <h3>Jacob The Losen</h3>
                    <p>Computer Science Engineering & Finance '25<br/>AWS Backend & CI/CD Developer</p>
                </div> 

            </section>            
        </div>
    );
}

export default AboutPage;