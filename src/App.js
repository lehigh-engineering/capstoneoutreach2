import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import NotFoundPage from './components/NotFoundPage';

import CryptoModule from './modules/crypto/CryptoModule';
import CipherWheel from './modules/crypto/CipherWheel/CipherWheel';
import InjectionModule from './modules/injection/InjectionModule';
import SkeletonModule from './modules/skeleton/SkeletonModule';
import ScratchModule from './modules/scratch/ScratchModule';
import MazeModule from './modules/maze/MazeModule';
import MakeCodeModule from './modules/makecode/MakeCodeModule';
import HTMLModule from './modules/html/HTMLModule';

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
        apiName: 'fred',
        path: '/public',
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
      console.log('POST call failed: ', e);
    }
  };

  return (
    <Router>
      <div className="App">
        <button onClick={invokeLambda}>Invoke Lambda</button>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/cryptography" element={<CryptoModule />} />
          <Route path="/cryptography/cipherwheel" element={<CipherWheel />} />
          <Route path="/cybersecurity" element={<InjectionModule />} />
          <Route path="/skeleton" element={<SkeletonModule />} />
          <Route path="/scratch" element={<ScratchModule />} />
          <Route path="/maze" element={<MazeModule />} />
          <Route path="/makecode" element={<MakeCodeModule />} />
          <Route path="/html" element={<HTMLModule />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
