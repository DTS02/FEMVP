import React, { Component , Fragment} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter,
  } from "react-router-dom";
import Registrasi from './Registrasi/Registrasi';
import AdminPanel from './AdminPanel/AdminPanel';
import Login from './Login/Login';
import Home from './Home/Home';
import DetailKelas from './DetailKelas/DetailKelas'

// import NavigationBar from './Component/NavBarAdmin/NavbarAdmin'
import LP from './LandingPage/LP';


class App extends Component {
    render() {
        return (
          
            // {/* <Registrasi /> */}
            //     {/* <AdminPanel /> */}
               
                  
            // {/* <Login /> */}
          <Fragment>
            {/* <Home />         */}
            {/* <LP /> */}
            <DetailKelas />
                </Fragment> 
            
        
           )   }
}
export default App;