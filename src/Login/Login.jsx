import React, { Component } from "react";
import "./Login.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter,
  } from "react-router-dom";
import { Button, Form, FormGroup, Label } from "react-bootstrap";
import { PostDataLogin } from "../Registrasi/PostData";
import LP from '../LandingPage/LP';

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
          return <Link to="/LP" />;
        }
        <Route path="/LP" component={LP} />
    

    return (
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
          <input
            type="email"
            placeholder="Input Email"
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <div></div>
          <input
            type="password"
            placeholder="Input Password"
            onChange={this.onChange}
          />
        </FormGroup>
        <div className="text-right">
          <a href="">Lupa Password?</a>
        </div>
        <div className="text-center">
          <button type="button" className="btn1" onClick={this.login}>
            Masuk
          </button>
          <p></p>
          <p>Kamu Belum Gabung?</p>
          <button type="button" className="btn2">
            Daftar
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
