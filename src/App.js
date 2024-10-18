import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { get } from 'aws-amplify/api';

Amplify.configure(awsconfig);

function App() {
  // const [modulesData, setModules] = useState([]);
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

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <button onClick={invokeLambda}>Invoke Lambda</button> */}
      </div>
    </Router>
  );
}

export default App;
