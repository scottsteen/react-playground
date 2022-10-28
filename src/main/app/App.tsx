import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import { UseEffect as ShowsUseEffect } from '../shows';
import { HelloWorld, HelloYou } from '../composed';

const ShowsSuspenseful = React.lazy(() => import('../shows/Suspenseful'));

const App = () => (
  <React.Suspense fallback={<h3>Loading...</h3>}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/use-effect" element={<ShowsUseEffect />} />
        <Route path="/shows/suspenseful" element={<ShowsSuspenseful />} />
        <Route path="/composed/hello-world" element={<HelloWorld />} />
        <Route path="/composed/hello-you" element={<HelloYou />} />
      </Routes>
    </Router>
  </React.Suspense>
);

export default App;
