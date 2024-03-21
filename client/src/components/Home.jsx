import React from 'react';
import { Navbar, Nav, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'

const HomePage = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <h2 className="text-center mb-4">Categories</h2>
        <Row>
          <Col>
            <Card className="category-card">
              <Card.Img variant="top" src="/path/to/playstation-image.jpg" />
              <Card.Body>
                <Card.Title>PlayStation</Card.Title>
                <Card.Text>
                  Explore our range of PlayStation products.
                </Card.Text>
                <Card.Link href="#">View Products</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="category-card">
              <Card.Img variant="top" src="/path/to/gaming-image.jpg" />
              <Card.Body>
                <Card.Title>Gaming</Card.Title>
                <Card.Text>
                  Discover a variety of gaming accessories and more.
                </Card.Text>
                <Card.Link href="#">View Products</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-light py-4">
        <Container>
          <div className="text-center">
            <p>&copy; 2024 Ecommerce. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
