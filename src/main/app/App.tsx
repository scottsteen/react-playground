import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import { UseEffect as ShowsUseEffect } from '../shows';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows/use-effect" element={<ShowsUseEffect />} />
    </Routes>
  </Router>
);

export default App;
