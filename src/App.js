import React from 'react';

//routing
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import MasterThesis from './components/MasterThesis'
import D3Project from './components/D3Project'
import NotFound from './components/NotFound';


const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/CV' element={<CV />} />
      <Route path='/Master_Thesis' element={<MasterThesis />} />
      <Route path='/D3_Project' element={<D3Project />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </Router>
)

export default App;
