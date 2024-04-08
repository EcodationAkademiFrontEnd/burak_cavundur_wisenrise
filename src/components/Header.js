import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import logo from '../img/wise-rise-logo.png';

function Header () {
    const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top nav-back">
      <Container>
        <Navbar.Brand href="#">
            <img src={logo} height="55" width="auto"/>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Toggle>
        <span className="fa-layers fa-fw fa-lg">
            <FontAwesomeIcon icon={faBars} size="1x"/>
        </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Kategoriler" id="navbarScrollingDropdown"
   show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}>
              <NavDropdown.Item href="#action3">
              Ebeveynlik&Çocuk Gelişimi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Ev&Stil
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
              Gastronomi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              İş Dünyası
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
              Kişisel Gelişim
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">
              Psikoloji
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
              Sağlık
              </NavDropdown.Item>
              <NavDropdown.Item href="#action10">
              Sanat
              </NavDropdown.Item>
              <NavDropdown.Item href="#action11">
              Yaşam
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Planlar</Nav.Link>
            
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Giriş</Nav.Link> */}
            <Button variant="btn-light">Giriş</Button>
            <Button variant="btn-danger">Kayıt Ol</Button>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;