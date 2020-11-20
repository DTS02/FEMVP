import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from 'react-redux';
import AuthPage from "./Login/Login";
import DetailKelas from './DetailKelas/DetailKelas'
import LP from './LandingPage/LP';
// import NavigationBar from './Component/NavBarAdmin/NavbarAdmin'



const App = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { token } = userLogin;

  return (
    <Router>
      <LP />
      <Switch>
        <Route exact path="/">
          {!!token ? (
            <Redirect to="/DetailKelas" />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/login" component={AuthPage}></Route>
        <ProtectedRoute
          exact
          path="/Detail Kelas"
          component={DetailKelas}
        ></ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;