
  import "bootstrap/dist/css/bootstrap.min.css";
  import Image from "react-bootstrap/Image";
  import React, { useEffect, useState } from "react";
  import Gambar from "./image/top.png";
  import {useDispatch, useSelector} from 'react-redux';
  import './style.css';
  import {getUserDetails, updateUserProfile } from '../Actions/userActions';
  import { Form, Button, Col, Container, Row } from "react-bootstrap";
  import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstans';
  import axios from 'axios'
  import Message from '../profile/Message'
  import Loader from '../profile/Loader'
  
  
  const Profile = ({  history }) => {
  // const userId = match.params.id
     
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole]=useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userProfileDetails = useSelector((state) => state.userProfileDetails);
    const { user } = userProfileDetails;
    const userProfileEdit = useSelector((state) => state.userProfileEdit);
    const {success} =userProfileEdit
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin
  
    
    useEffect(() => {
      if (!userInfo) {
        history.push("/login");
      } else {
        if (!user || !user.email || success){
          dispatch({type: USER_UPDATE_PROFILE_RESET})
          dispatch(getUserDetails('profile'))
          
      } else {
            setEmail(user.name);
            setPassword(user.password);
            setPasswordConfirm(user.passwordConfirm)
            setfirstName(user.firstName);
            setlastName(user.lastName);
            setuserName(user.userName);
            setRole(user.role);
            setImage(user.image);
      }
    }
  },[dispatch, history, userInfo, user, success])
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ 
        id: user._id,
        firstName,
        lastName,
        email,
        userName,
   
        image,
        role,
        password,
        passwordConfirm, }))
    }
  }
  
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/upload/', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
    // const submitHandler = (e) => {
    //   e.preventDefault()
    //   dispatch(
    //     updateUserProfile({
    //       _id: userId,
    //       firstName,
    //       lastName,
    //       email,
    //       userName,
    //       alamat,
    //       image,
    //       role,
    //       password,
    //       passwordConfirm,
    //     })
    //   )
    // }
   
   
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
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

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
  