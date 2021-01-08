import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Weather as a Service</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="http://www.nilanp.tech">myPortfolio</Nav.Link>
            <Nav.Link href="https://www.hermitapp.me">
              projectInProgress
            </Nav.Link>
            <Nav.Link href="https://www.github.com/nilan01">myGithub</Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default Navigation;
