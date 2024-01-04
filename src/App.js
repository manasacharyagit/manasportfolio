


import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App  bg-indigo-100"> 
    {/* Add a flex class to the main container */}
    
      <Navbar/>

    
        <div className="content">
          
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

        </div>
      <Footer/>
    </div>
  );
}

export default App;
