import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import React , {Component} from "react";
import Gambar from "./image/top.png";
import { Form, Button, Col, Container, Row} from "react-bootstrap";


class Adminverifikasi  extends Component {
  
  render() {
  return (
    <div>
      <Container>
        <Row>
          <Image src={Gambar} fluid />
        </Row>
        <br></br>
        <h2>Profil</h2>
        <br></br>
        <div>
          <Image src={} />
        </div>
            
          <Form>
            <Form.Row>
                <Col>
              <Form.Group controlId="formGridFirstname">
                {/* <Form.Label>Nama Depan</Form.Label> */}
                <Form.Control type="firstname" placeholder="Nama Depan" />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formGridLastname">
                {/* <Form.Label>Nama Belakang</Form.Label> */}
                <Form.Control type="lastname" placeholder="Nama Belakang" />
              </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group controlId="formGridUsername">
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formGridAlamat">
              {/* <Form.Label>Alamat</Form.Label> */}
              <Form.Control placeholder="Alamat" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridConfirmPass">
                {/* <Form.Label>Konfirmasi Password</Form.Label> */}
                <Form.Control placeholder="Konfirmasi Password" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAlamat">
              {/* <Form.Label>Status</Form.Label> */}
              <Form.Control placeholder="Status" />
            </Form.Group>
    
            <Button variant="primary" type="submit">Terima</Button>{' '}
             <Button variant="danger" type="cancel">Tolak</Button>{' '}
            <Button variant="danger" type="cancel">Kembali</Button>
            

          </Form>

      </Container>
    </div>
  );
  }
}
export default Profile;