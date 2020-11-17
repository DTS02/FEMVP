import React, { Component , Fragment} from 'react';
import './Registrasi.css';





class Registrasi extends Component {
    render() {
        return (
            <Fragment>

                <div className="form-add-post">
                    <p className='headtitle'>Yuk daftar<br /> biar bisa belajar<br /> bareng kita</p>
                    <div className='nama-satu'>
                        <input type="text" name="title" placeholder="Nama Depan Kamu" ></input>
                        <input type="text" name="title"  placeholder="Nama Belakang Kamu" ></input>
                    </div>
                    <div className='nama-dua'>
                    <input type="text" name="title" placeholder="Username Kamu" ></input>
                        <input type="text" name="title" placeholder="Email" ></input>
                        <input type="password" name="title" placeholder="Password" ></input>
                        <input type="Password" name="title" placeholder="Konfirmasi Password Kamu" ></input>
                       

                    </div>
                                                    
                    <button className="btn-submit" >Simpan</button>
                    <p className='kelogin'>Kamu sudah mendaftar? Yuk langsung masuk!</p>
                </div>
               

            </Fragment>
              
            
        )
    }
}
export default Registrasi;