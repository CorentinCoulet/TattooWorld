import './App.scss'
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import UserAccount from './pages/userAccount';
import ArtistAccount from './pages/artistAccount';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/user' element={<UserAccount />} />
        <Route path='/artist' element={<ArtistAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
