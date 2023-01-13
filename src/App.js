
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header.jsx';
import CardImagen from './CardImagen.jsx';
import { Container, Col, Row } from 'react-bootstrap';
import Footer from './Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header titulo="Galería de imágenes con React"></Header>
      <Container>
        <Row>
          <Col>
            <CardImagen imagen="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://www.google.com/url?sa=i&url=https%3A%2F%2Fkids.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fred-fox&psig=AOvVaw2DOr8iymJSXafVlCIk1x1a&ust=1672291040584000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCU193Hm_wCFQAAAAAdAAAAABAE" titulo="Zorro" descripcion="foto de un zorro"></CardImagen>
          </Col>
          <Col>
            <CardImagen imagen="https://images.pexels.com/photos/8014534/pexels-photo-8014534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="T-Rex" descripcion="foto de tyranosaurio"></CardImagen>
          </Col>
          <Col>
            <CardImagen imagen="https://images.pexels.com/photos/946344/pexels-photo-946344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo="Cuervo" descripcion="foto de cuervo"></CardImagen>
          </Col>
        </Row>
      </Container>
      <Footer texto="Todos los Derechos Reservados @2022."></Footer>
    </div>

  )
};

export default App;
