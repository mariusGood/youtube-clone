import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Channels from './components/Channels';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<Channels />} />
        <Route path='/search/:searchId' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
