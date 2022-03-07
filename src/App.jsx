import React from 'react';
import Home from './components/Home/Home'
import Favorite from './components/FavList/FavList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
export default function App() {


  return (
    // <Home />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<Favorite />} />
    </Routes>
  )
}