import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel'
import React , {Component} from "react";
import Banner from './image/banner.png'
import './style.css';
import { Form, Button, Col, Container, Row} from "react-bootstrap";


class daftarKelas  extends Component {
  
  render() {
  return (
    <div>
      <Container>
        <Row>
        <Carousel>
  <Carousel.Item>
    <img 
      src={Banner}
      alt="First slide"
    />
    <Carousel.Caption>
        <h1 style={h1Style}>Kamu udah milih kelas</h1>
      <h1 style={h2Style}>Desain Grafis,</h1>
      <h1 style={h1Style}>yuk pilih topik dulu !</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Banner}
      alt="Third slide"
    />

    <Carousel.Caption>
    
    <h1 style={h1Style}>Kamu udah milih kelas</h1>
      <h1 style={h2Style}>Desain Grafis,</h1>
      <h1 style={h1Style}>yuk daftar dulu !</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </Row>
        <br></br>
<Container>
        <Form >
  <fieldset>      
      <Col>
    <Form.Group>
      <Form.Label htmlFor="">Username</Form.Label>
      <Form.Control wid id="userName" placeholder="Username" />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group>
      <Form.Label htmlFor="">Pilih Topik</Form.Label>
      <Form.Control as="select" id="topik">
        <option>-Pilih-</option>
        <option>Ilustration</option>
      </Form.Control>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group>
      <Form.Label htmlFor="">Pilih Jadwal</Form.Label>
      <Form.Control as="select" id="topik">
        <option>-Pilih-</option>
        <option>Senin : 08.00 - 09.00</option>
        <option>Kamis : 08.00 - 09.00</option>
        <option>Sabtu : 08.00 - 10.00</option>
      </Form.Control>
    </Form.Group>
    </Col>
    <Col>
    <Button className="Buttonclass" type="submit">Submit</Button>
    </Col>
  </fieldset>
</Form>
</Container>
      </Container>
    </div>
  );
  }
}

const h1Style = {
    fontFamily: 'Montserrat',
    fontSize: '35px',
    textAlign: 'left',
    color:'black',
    fontWeight: 'bold'
   

}

const h2Style = {
    fontFamily: 'Montserrat',
    fontSize: '30px',
    textAlign: 'left',
    color: 'red',
    fontWeight: 'bold'
}


export default daftarKelas;