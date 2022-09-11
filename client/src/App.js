
import React from 'react';
import ButtonAppBar from "./components/AppBar.js";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register.js';
import Login from './components/Login.js';
import Landing from './components/LandingPage.js';

// https://mui.com/material-ui/react-dialog/ <- look into dialogs 

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path="/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/" element = {<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
