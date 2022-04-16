import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './Components/Home';
import { Addcountry } from './Components/Addcountry';
import { Addcity } from './Components/Addcity';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-country' element={<Addcountry/>} />
        <Route path='/add-city' element={<Addcity/>} />
      </Routes>
    </div>
  )
}

export default App
