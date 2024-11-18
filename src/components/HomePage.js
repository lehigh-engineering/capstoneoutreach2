import React from 'react';
import './HomePage.css';
import studentsImg from './images/students.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div class="home">
            <div className="text">
                Computer Science Outreach Program
            </div>
            <div className='summaryText'>
                This student-led initiative aims to broaden the outreach of our program to address the gaps in STEM education and compliance with the K-12 STEELS Standards in PA.
                Original modules serve as individual lesson plans for teachers of all levels to engage young students in core computer science concepts and spark an early interest in engineering.
            </div>
            <Link to="/modules" className="button">
                Learn More ►
            </Link>
            <img src={studentsImg} alt="studentsImg" className="image"></img>
        </div>
    );
}

export default HomePage;