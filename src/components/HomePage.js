import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div class="home">
            <div class="container">
                <div class="text">
                    Computer Science Outreach Program
                </div>
                <div className='summaryText'>
                    Lehigh's Computer Science Outreach Program aims to broaden Lehigh’s outreach to the wider Bethlehem community, addressing the gap in computer science education and compliance with STEELS standards by 2025.
                    With original stand-alone modules, we equip teachers of all levels with the resources to expose young students to core computer science concetps and spark an early interest in engineering.
                </div>
                <Link to="/modules" className="button">
                    Learn More
                </Link>
            </div>
        </div>
    );
}

export default HomePage;