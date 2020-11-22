
  import "bootstrap/dist/css/bootstrap.min.css";
  import Image from "react-bootstrap/Image";
  import React, { Component, useState } from "react";
  import Gambar from "./image/top.png";
  import {useDispatch, useSelector} from 'react-redux';
  import Figure from 'react-bootstrap/Figure';
  import './style.css'; 
  
  import {getUserDetails, updateUserProfile } from '../Actions/userActions';
  import { Form, Button, Col, Container, Row } from "react-bootstrap";
  import Axios from "axios";
  
  
  const Profile = ({ match, history }) => {
    const userId = match.params.id
     
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole]=useState('');
    const dispatch = useDispatch();
    const userProfileDetails = useSelector((state) => state.userProfileDetails);
    const { success, error, user } = userProfileDetails;
    const userProfileEdit = useSelector((state) => state.userProfileEdit);
    const {
      success: successUpdate,
      error: errorUpdate,
    } =userProfileEdit
  
    
    useEffect(() => {
      if (sukses) {
        history.push("/HomePage");
      }
    }, [history, success]);
  
    useEffect(() => {
      if (!user.email || user._id !== userId) {
        MySwal.fire({
          icon: "error",
          title: error,
        }).then((result) => {
          if (result.isConfirmed) {
            setEmail(user.name);
            setPassword(user.password);
            setPasswordConfirm(user.passwordConfirm)
            setAlamat(user.alamat);
            setfirstName(user.firstName);
            setlastName(user.lastName);
            setuserName(user.userName);
            setRole(user.role);
            setImage(user.image);
          }
        });
      }
    }, [dispatch, history,userId, user, success]);
  
    const uploadFileHandler = async (e) => {
      const file =e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
      setUploading(true)
  
      try{
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        const {data} = await axios.post('/upload/',formData, config)
  
        setImage(data)
        setUploading(false)
      } catch{
        console.error(error)
        setUploading(false)
      }
    }
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(
        updateUserProfile({
          _id: userId,
          firstName,
          lastName,
          email,
          userName,
          alamat,
          image,
          role,
          password,
          passwordConfirm,
        })
      )
    }
    state = {
      profileImg:
        "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
    }
    imageHandler = (e) =>{
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0]) 
    }
      const { profileImg } = this.state;
      return (
        <div>
          <Container>
            <div className="Profile">
            <Row>
              <Image src={Gambar} fluid />
            </Row>
            <br></br>
            <h2>Profil</h2>
            <br></br>
            <div>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  style={{
                    border: "2px"
                     }}
                  alt=""
                  src={profileImg}
                /> <br></br>
                <input type="file" name="img-upload" id="profil" accept="image/*" onChange={this.imageHandler} />
                <Figure.Caption>
                  <h3>ID: 12334567</h3>
                </Figure.Caption>
              </Figure>
            </div>
            </div>
            <Form onSubmit={submitHandler}>
              <Form.Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    type="firstName" placeholder="Nama Depan" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    type="lastname" placeholder="Nama Belakang" required/>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group controlId="Username">
                <Form.Label>Username</Form.Label>
                <Form.Control value={userName}
                onChange={(e) => setuserName(e.target.value)}
                placeholder="Username" required/>
              </Form.Group> 
              <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" required/>
              </Form.Group>
              
              <Form.Row>
                <Form.Group as={Col} controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" />
                </Form.Group>
  
                <Form.Group as={Col} controlId="ConfirmPass">
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <Form.Control value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="Konfirmasi Password" />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="role">
                <Form.Label>role</Form.Label>
                <Form.Control value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="role" />
              </Form.Group>
              <div className="Button-profile">
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
              <Button variant="danger" type="cancel">
                Cancel
              </Button>
             </div>
             <br></br>
            </Form>
          </Container>
        </div>
      );
    }
  
  export default Profile;
  