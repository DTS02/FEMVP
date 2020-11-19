import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./Registrasi.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostData } from "./PostData";
import { Redirect } from "react-router-dom";
import LP from "../LandingPage/LP";
import Login from "../Login/Login"

class Registrasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      passwordConfirm: "",
      email: "",
      role: "",
      redirectToReferrer: false,
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.userName &&
      this.state.password &&
      this.state.passwordConfirm &&
      this.state.email &&
      this.state.role
    ) {
      PostData("signup", this.state).then((result) => {
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
      <Router>
        <Fragment>
          <form className="form-add-post" onSubmit={this.handleSubmit}>
            <p className="headtitle">
              Yuk daftar
              <br /> biar bisa belajar
              <br /> bareng kita
            </p>
            <div className="nama-satu">
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Nama Depan Kamu"
                onChange={this.onChange}
              />

              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Nama Belakang Kamu"
                onChange={this.onChange}
              />
            </div>
            <div className="nama-dua">
              <input
                id="userName"
                type="text"
                name="userName"
                placeholder="Username"
                onChange={this.onChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              ></input>
              <input
                type="Password"
                name="passwordConfirm"
                placeholder="Konfirmasi Password Kamu"
                onChange={this.onChange}
              ></input>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Pilih Status Anggota
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item name="role" onChange={this.onChange}>
                    Pengajar
                  </Dropdown.Item>
                  <Dropdown.Item name="role" onChange={this.onChange}>
                    Pelajar
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <button
              className="btn-submit"
              type="submit"
              value="Daftar"
              onClick={this.signup}
            >
              Daftar
            </button>
            <p className="kelogin">
              Kamu sudah mendaftar? Yuk langsung <Link to="/Login">masuk!</Link>
                    </p>
                   
          </form>
        </Fragment>
      </Router>
    );
  }
}
export default Registrasi;
