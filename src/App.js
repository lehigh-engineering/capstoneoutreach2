import React from 'react';
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

// import { Amplify } from 'aws-amplify';
// import { generateClient } from 'aws-amplify/api';
// import config from './amplifyconfiguration.json';
// Amplify.configure(config);

// const client = generateClient();

import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
import awsconfig from './aws-exports';
import { post } from 'aws-amplify/api';

Amplify.configure(awsconfig);
const API = generateClient();

function App() {
  const invokeLambda = async () => {
    try {
      const restOperation = post({
        apiName: 'capstoneoutreachgateway',
        path: '/modules',
        options: {
          body: {
            message: 'Mow the lawn'
          }
        }
      });
  
      const { body } = await restOperation.response;
      const response = await body.json();
  
      console.log('POST call succeeded');
      console.log(response);
    } catch (e) {
      console.log('POST call failed: ', JSON.parse(e.response.body));
    }
    // try {
    //   const response = await API.get('fred', '/public', {});
    //   console.log('Response from Lambda:', response);
    //   alert('Lambda response: ' + JSON.stringify(response));
    // } catch (error) {
    //   console.error('Error invoking Lambda:', error);
    //   alert('Error invoking Lambda: ' + error);
    // }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />

          <Route path="/cryptography" element={<CryptoModule />} />
          <Route path="/cryptography/cipherwheel" element={<CipherWheel />} />
          <Route path="/cybersecurity" element={<InjectionModule />} />
          <Route path="/makecode" element={<MakeCodeModule />} />
          <Route path="/maze" element={<MazeModule />} />
          <Route path="/scratch" element={<ScratchModule />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <button onClick={invokeLambda}>Invoke Lambda</button> */}
      </div>
    </Router>
  );
}

export default App;
