import React from 'react';
import { Navbar, Nav, Card, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css' 
import style from '../css/Home.css'

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "CANON EOS DSLR Camera",
      price: "$360✶✶✶✶✶",
      rating: "(95)",
      image: "https://th.bing.com/th/id/R.31dce12ef4fd7349bc5236e4ef8d277e?rik=D%2bWVQGcfE52rDg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0595%2f0849%2f0426%2fproducts%2fCANOND800_1200x1200.jpg%3fv%3d1629802911&ehk=ZtuzT7oPM3UgUR0%2bov%2b30XQB4QAholdYmYjlJ6vnYA8%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "ASUS HD Gaming Laptop",
      price: "5700",
      rating: "",
      image: "https://th.bing.com/th/id/OIP.Rd_iJx2XbIFc1gYGECNPQAHaFS?rs=1&pid=ImgDetMain",
    },
  ];
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
      <h1>Enhance Your Music Experience</h1>
      <div className="products-container">
        {featuredProducts.map((product) => (
          <div key={product.id} className="featured-product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} {product.rating}</p>
          </div>
        ))}
      </div>
      <h2>Our Products</h2>
      <div className="other-products">
      </div>
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
