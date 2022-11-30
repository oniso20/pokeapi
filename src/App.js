import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './components/Home';
import PokeList from './components/PokeList';
import About from './components/About';
import PokeSingle from './components/PokeSingle';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="pokelist/:pokesingle" element={<PokeSingle />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
