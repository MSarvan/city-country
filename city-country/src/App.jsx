import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './Components/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-country' element={<Home/>} />
        <Route path='/add-city' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
