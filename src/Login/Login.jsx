import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { login } from "../userActions";
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import {  Form, FormGroup, Input } from "reactstrap";

const MySwal = withReactContent(Swal);

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, token } = userLogin;

  useEffect(() => {
    if (token) {
      history.push("/LP");
    }
  }, [history, token]);

  useEffect(() => {
    if (error && error !== undefined) {
      MySwal.fire({
        icon: "error",
        title: error,
      }).then((result) => {
        if (result.isConfirmed) {
          setEmail("");
          setPassword("");
        }
      });
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Router>
      <Form className="login">
        <h2>
          <span className="font-weight-bold">Selamat Datang Kamu,</span>
        </h2>
        <h2>
          <strong>Yuk Masuk!</strong>
        </h2>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <label>Email</label>
            <div></div>
            <Input
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="name"
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            <label>Password</label>
            <div></div>
            <Input
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password "
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <div className="text-right">
            <a href="/">Lupa Password?</a>
          </div>

          <div className="text-center">
            <button type="submit" className="btn1" variant="default ">
              Masuk
            </button>

            <p></p>
            <p>Kamu Belum Gabung?</p>
            <button type="button" className="btn2">
              Daftar
            </button>
          </div>
        </Form>
      </Form>
    </Router>
  );
};

export default Login;
