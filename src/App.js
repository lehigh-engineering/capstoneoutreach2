import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import ModulesPage from './components/ModulesPage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import FeedbackPage from './components/FeedbackPage';
import NotFoundPage from './components/NotFoundPage';

import CryptoModule from './modules/crypto/CryptoModule';
import CipherWheel from './modules/crypto/CipherWheel/CipherWheel';
import InjectionModule from './modules/injection/InjectionModule';
import MakeCodeModule from './modules/makecode/MakeCodeModule';
import ScratchModule from './modules/scratch/ScratchModule';
import MazeModule from './modules/maze/MazeModule';
import HtmlModule from './modules/html/HtmlModule';
import EverdayAlgsModule from './modules/algorithms/EverydayAlgsModule';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { get } from 'aws-amplify/api';

Amplify.configure(awsconfig);

function App() {
  // const [modulesData, setModules] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const invokeLambda = async () => {
    try {
      const response = await get({
          apiName: 'capstoneoutreachgateway',
          path: '/modules',
          headers: {
                  'Content-Type': 'application/json',
              },
          options: {
            body: {
              message: 'Mow the lawn'
            }
          }
        }).response;
      
        const data = await response.body.json(); // Parse the JSON response
          if (Array.isArray(data)) {
              // setModules(data);
              localStorage.setItem("modules", JSON.stringify(data));
          } else {
              console.error('Expected an array but got:', data);
          }
          console.log('GET call succeeded: ', data); // Log the resolved response
  } 
  
  catch (error) {
      console.error('GET call failed: ', error);
  }
  };

  useEffect(() => {
    invokeLambda();
  }, []);

  return (
    <Router>
      <div className="App">
        <header class="banner">
          <a href="https://www2.lehigh.edu"><img src="./lehigh-white-logo.svg" alt="logo"></img></a>
          <h1><a href="https://engineering.lehigh.edu">P.C. ROSSIN COLLEGE OF<br></br>ENGINEERING AND APPLIED SCIENCE</a></h1>
          <button className="hamburger" onClick={toggleNav}>
            ☰
          </button>
          <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
            <h2><NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink></h2>
            <h2><NavLink to="/modules" className="nav-link" activeClassName="active">Modules</NavLink></h2>
            <h2><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></h2>
            <h2><NavLink to="/resources" className="nav-link" activeClassName="active">Resources</NavLink></h2>
            <h2><NavLink to="/feedback" className="nav-link" activeClassName="active">Feedback</NavLink></h2>
          </nav>
        </header>
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />

          <Route path="/cryptography" element={<CryptoModule />} />
          <Route path="/cryptography/cipherwheel" element={<CipherWheel />} />
          <Route path="/cybersecurity" element={<InjectionModule />} />
          <Route path="/makecode" element={<MakeCodeModule />} />
          <Route path="/maze" element={<MazeModule />} />
          <Route path="/scratch" element={<ScratchModule />} />
          <Route path="/html" element={<HtmlModule/>}/>
          <Route path="/alg" element={<EverdayAlgsModule/>}/>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;