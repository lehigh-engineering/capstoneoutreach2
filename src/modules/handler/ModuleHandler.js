import React, { useEffect, useState } from 'react';
import '../template/Module.css';
import { useParams } from 'react-router-dom';

import fetchFileFromS3 from '../../services/s3service';
import Spinner from '../../components/Spinner';
import { saveAsPDF } from '../downloadPDF';

function ModuleHandler() {
    const [isVisible, setIsVisible] = useState(false);

    // Extracts the `id` parameter from the route
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);
    const toggleSidebar = () => setIsVisible(!isVisible);

    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchFileFromS3('cs-modules-bucket', `${id}.json`);
                console.log(result)
                setData(result);
            } catch (error) {
                console.error('Error fetching module data:', error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [id]);

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
            
            {loading ? <Spinner /> : <div className={`anyModuleContent ${isVisible ? 'shift-right' : ''}`}>
                <div class="header-container">
                    <h1>{data.title}</h1>
                    <img src={"https://cs-images-bucket.s3.us-east-2.amazonaws.com/" + data.img} alt="HTML"></img>
                </div>
                {isDownloading ? (
                    <p className='downloading'>Downloading...</p>
                ) : (
                    <button className="download-button" onClick={() => saveAsPDF('.anyModuleContent', data.title + '.pdf', setIsDownloading)}>
                        Download as PDF
                    </button>
                )}
                <div class="anymodulebody">
                    <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul>
                        {data.STEELS.map((standard, index) => (
                            <li key={index}>
                                <a href={standard.url}>{standard.title}</a>
                            </li>
                        ))}
                    </ul>

                    <h2 id="Objectives">Obectives</h2>
                    <ul>
                        {data.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                        ))}
                    </ul>

                    <h2 id="Materials">Materials</h2>
                    <ul>
                        {data.materials.map((material, index) => (
                            <li key={index}>{material}</li>
                        ))}
                    </ul>

                    <h2 id="Basic Vocab">Basic Vocab</h2>
                    <div>
                        {data && data.basic_vocab && Object.entries(data.basic_vocab).map(([word, definition]) => (
                            <p key={word}>
                                <b>{word}:</b> {definition}
                            </p>
                        ))}
                    </div>

                    <h2 id="Introduction">Introduction</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.introduction }} />
                    
                    <h2 id="Class Activity">Class Activity</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.class_activity }} />
                    
                    <h2 id="Discussion">Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <div dangerouslySetInnerHTML={{ __html: data.discussion }} />
                </div>
            </div>}
        </div>
    );
}

export default ModuleHandler;