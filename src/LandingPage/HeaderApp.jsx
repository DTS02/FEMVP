import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LP from './LP'
import Registrasi from '../Registrasi/Registrasi';
import Login from '../Login/Login';
import './LP.css';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

class HeaderApp extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Router>
                        <Navbar bg="white">
                            <Navbar.Brand href="/App">Banking Crowd Academy</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Link to ="/Login">Masuk</Link>
                                <h3 style={{ color: "#40A8C4" }}>|</h3>
                                
                                <Link to="/Registrasi">Daftar</Link>
                            </Navbar.Collapse>
                        </Navbar>
                      
                        <Route path="/Registrasi" component={Registrasi} />
                        <Route path="/Login" component={Login} />
                    </Router>
                </Container>
            </div>
        )
    }
}



export default HeaderApp;