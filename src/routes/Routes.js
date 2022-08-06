import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add';
import Details from '../pages/Details';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/add" element={<Add />}></Route>
        <Route exact path="/details" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>);
};

export default AppRoutes;