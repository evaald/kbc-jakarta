import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import AboutUs from './pages/AboutUs';
import Story from "./pages/Story";
import Event from "./pages/Event";
import Media from "./pages/Media";
import VisitUs from "./pages/VisitUs";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Beranda/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Story' element={<Story/>}></Route>
      <Route path='/Event' element={<Event/>}></Route>
      <Route path='/Media' element={<Media/>}></Route>
      <Route path='/VisitUs' element={<VisitUs/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
