import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavTop() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ boxShadow: "3px 3px 3px #ccc" }}
    >
      <Navbar.Brand href="/">Superstore.bg</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shopping-cart">Cart</Nav.Link>
          <Nav.Link href="/about-us">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
