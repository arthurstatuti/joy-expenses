import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import New from '../pages/New';
import Details from '../pages/Details';
import Settings from '../pages/Settings';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/new" element={<New />}></Route>
        <Route exact path="/details" element={<Details />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>);
};

export default AppRoutes;
