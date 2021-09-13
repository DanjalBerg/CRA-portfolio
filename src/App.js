import React from 'react';

//routing
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </Router>
)

export default App;
