import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mountains from './images/mountains.png'
import pinterest from './images/c-pinterest.png'
import facebook from './images/c-facebook.png'
import google from './images/c-google+.png'
import twitter from './images/c-twitter.png'

const header = () => {
  return (
    <div className='header'>
     <Navbar expand="lg" style={{backgroundColor:'black'}}>
     
  <Container>
  <img
            src={mountains}
            height="10"
            className="d-inline-block align-top"
            alt="YourLogo"
            
            style={{margin:'0px -4% 3% 2%'}}
          />
    
    <Navbar.Brand href="#home" className='symbol' style={{ color: 'white' }}>
    
      YOO<span>PIN</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'white' }} />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
        <Nav.Link href="#pages" style={{ color: 'white' }}>Pages</Nav.Link>
        <Nav.Link href="#features" style={{ color: 'white' }}>Features</Nav.Link>
        <Nav.Link href="#extensions" style={{ color: 'white' }}>Extension</Nav.Link>
        <Nav.Link href="#tutorial" style={{ color: 'white' }}>Tutorials</Nav.Link>
        <Nav.Link href="#contactus" style={{ color: 'white' }}>Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <a href='https://in.pinterest.com/'><img
            src={pinterest}
            height="20"
            className="d-inline-block align-top"
            alt="YourLogo"
            
            style={{margin:'0px 20px 0px 0px'}}
          /></a>

    <a href='https://www.facebook.com/'><img
            src={facebook}
            height="20"
            className="d-inline-block align-top"
            alt="YourLogo"
            
            style={{margin:'0px 20px 0px 0px'}}
          /></a>

    <a href='https://www.google.com/'><img
            src={google}
            height="20"
            className="d-inline-block align-top"
            alt="YourLogo"
            
            style={{margin:'0px 20px 0px 0px'}}
          /></a>
          
    <a href='https://twitter.com/'><img
            src={twitter}
            height="20"
            className="d-inline-block align-top"
            alt="YourLogo"
            
            style={{margin:'0px 20px 0px 0px'}}
          /></a>
    

  </Container>
</Navbar>


    </div>
  )
}

export default header
