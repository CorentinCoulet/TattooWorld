import './App.scss'
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';

const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
