// import Profile from './profile/profile_edit';
// import DaftarKelas from './kelas/daftar_kelas';
import Artikel from './artikel/artikel';
import React, {Component} from 'react';
import './App.css'; 
class App extends Component{
  
  render() {
    return(
      <div>
        <Artikel />
        {/* <Profile /> */}
        {/* <DaftarKelas /> */}
      </div>
    );
  }
}
export default App;