import React, { useState } from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Statistic from "./pages/Statistic";
import DinamikPage from "./pages/DinamikPage";

function App() {
  return (
    <div className="ag-format-container" style={{backgroundColor: '#100231', width: '100%', minHeight:'750px'}}>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admins" element={<Admin/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/traders" element={<Statistic/>} />
        {/* <Route path="/admin/{id}" element={<DinamikPage/>}/> */}
      </Routes> 
    </div> 
      
   
  );

  }
export default App;
