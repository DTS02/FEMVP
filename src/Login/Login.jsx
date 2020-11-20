import React, { Component } from "react";
import "./Login.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
  BrowserRouter,
    Redirect,
  } from "react-router-dom";
import { Button, Form, FormGroup, Label ,  Input} from "reactstrap";
import { PostDataLogin } from "../Registrasi/PostData";
import LP from '../LandingPage/LP';
import App from '../App'
import Home from "../Home/Home";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",

      password: "",
      redirectToReferrer: false,
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.email && this.state.password) {
      PostDataLogin("login", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
   
        if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
          return <Redirect to exact={App} />;
        }
        

    return (
      <Router>
     
      <form className="login">
        <h2>
          <span className="font-weight-bold">Selamat Datang Kamu,</span>
        </h2>
        <h2>
          <strong>Yuk Masuk!</strong>
        </h2>

        <FormGroup>
          <label>Email</label>
          <div></div>
          <Input
            type="email"
            placeholder="Input Email"
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <div></div>
          <Input
            type="password"
            placeholder="Input Password"
            onChange={this.onChange}
          />
        </FormGroup>
        <div className="text-right">
          <a href="/">Lupa Password?</a>
        </div>
        
        <div className="text-center">
          <button type="submit"
            className="btn1"
              onClick={this.login} >    
            <Link to="/Home">Masuk</Link>
            <Route path exact="/Home" component={LP}></Route>
            
          </button>
     
          <p></p>
          <p>Kamu Belum Gabung?</p>
          <button type="button" className="btn2">
            Daftar
          </button>
        </div>
        </form>
        </Router>
    );
  }
}

export default Login;
