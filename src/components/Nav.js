import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav as Navbs } from 'react-bootstrap';

const Nav = () => {
  return( 
  <div>
  <Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">NR</Navbar.Brand>
  <Navbs className="me-auto">
    <Navbs.Link href="/">Home</Navbs.Link>
    <Navbs.Link href="/contacts">Contact Me</Navbs.Link>
  </Navbs>
  </Container>
</Navbar>

  </div>
  );
};

export default Nav;
