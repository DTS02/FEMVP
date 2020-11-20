import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./Registrasi.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { register } from "../userActions";
import { USER_REGISTER_STATUS_RESET } from "../userConstants";

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostData } from "./PostData";
import { Redirect } from "react-router-dom";
import LP from "../LandingPage/LP";
import Login from "../Login/Login";
const MySwal = withReactContent(Swal);
const Registrasi = ({ setLogginActive }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, status } = userRegister;

  useEffect(() => {
    if (status === "success") {
      MySwal.fire({
        title: "Sukses",
        icon: "success",
        text: "Register berhasil. Silakan Login",
      }).then((result) => {
        if (result.isConfirmed) {
          setLogginActive();
          dispatch({ type: USER_REGISTER_STATUS_RESET });
        }
      });
    }
  }, [status, setLogginActive, dispatch]);

  useEffect(() => {
    if (error !== undefined) {
      MySwal.fire({
        icon: "error",
        title: error,
      }).then((result) => {
        if (result.isConfirmed) {
          setFirstName("");
          setLastName("");
          setUserName("");
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
          setRole("");
        }
      });
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register(
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm,
        role
      )
    );
  };

  return (
    <Router>
      <Fragment>
        <Form className="form-add-post" onSubmit={submitHandler}>
          <p className="headtitle">
            Yuk daftar
            <br /> biar bisa belajar
            <br /> bareng kita
          </p>
          <div className="nama-satu">
            <input
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              placeholder="Nama Depan Kamu"
            />

            <input
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="lastName"
              placeholder="Nama Belakang Kamu"
            />
          </div>
          <div className="nama-dua">
            <input
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              name="userName"
              placeholder="Nama Panggilan Kamu"
            />
            <input
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
            ></input>
            <input
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            ></input>
            <input
              value={passwordConfirm}
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              name="passwordConfirm"
              placeholder="Konfirmasi Password"
            ></input>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Pilih Status Anggota
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  value={role}
                  required
                  onChange={(e) => setRole(e.target.value)}
                  type="submit"
                  name="role"
                >
                  Pengajar
                </Dropdown.Item>
                <Dropdown.Item
                  value={role}
                  required
                  onChange={(e) => setRole(e.target.value)}
                  type="submit"
                  name="role"
                >
                  Pelajar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button className="btn-submit" type="submit" variant="default">
            Daftar
          </button>
          <p className="kelogin">
            Kamu sudah mendaftar? Yuk langsung <Link to="/Login">masuk!</Link>
          </p>
        </Form>
      </Fragment>
    </Router>
  );
};

export default Registrasi;
