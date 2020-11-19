import React, { Component } from 'react';

import Registrasi from './Registrasi/Registrasi';
import AdminPanel from './AdminPanel/AdminPanel';
import Login from './Login/Login';

// import NavigationBar from './Component/NavBarAdmin/NavbarAdmin'
import LP from './LandingPage/LP'

class App extends Component {
    render() {
        return (
            <div>
            {/* <Registrasi /> */}
                {/* <AdminPanel /> */}
                <LP />
            {/* <Login /> */}
            </div>
        )
    }
}
export default App;