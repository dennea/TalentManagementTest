import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
import Login from './components/Login.js';
import Register from './components/Register.js';
import Landing from './components/LandingPage.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// https://mui.com/material-ui/react-dialog/ <- look into dialogs 

function App() {
  return (
    <Router>
        <div >
            <Navbar bg="link" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Talent Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as = {Link} to = {"/"}>Home</Nav.Link>
                            <Nav.Link as = {Link} to = {"/login"}>Login</Nav.Link>
                            <Nav.Link as = {Link} to = {"/register"}>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
                <Route path="/login" element = {<Login />}>
                </Route>
                <Route path="/register" element={<Register />}>
                </Route>
                <Route path="/" element={<Landing/>}>
                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
