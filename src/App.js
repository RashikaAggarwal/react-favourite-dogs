import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from './views/home/Home';
import Favourites from './views/favourites/Favourites';

//This component implements react-router
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/favourites" element={<Favourites/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
