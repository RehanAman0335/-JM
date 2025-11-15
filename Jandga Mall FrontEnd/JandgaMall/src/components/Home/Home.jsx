import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css";
import ShalwarKameez1 from "/src/assets/Images/Shalwarkameez1.jpg";
import ShalwarKameez2 from "/src/assets/Images/Shalwarkameez2.jpg";
import ShalwarKameez5 from "/src/assets/Images/Shalwarkameez5.jpg";
import JazzCash_easypaisa from "/src/assets/Images/JazzCash_easypaisa.jpg";
import VisaMc from "/src/assets/Images/VisaMc.jpg";
// import Product images here if needed

function Home() {
  let heading = "Welcome to Jandga Mall";

  // Array of products to display in the grid
  const products = [
    {
      id: 1,
      name: "Shalwarkameez",
      price: "Rs:2,999",
      Image: "./src/assets/Images/Shalwarkameez1.jpg",
    },
    {
      id: 2,
      name: "Shalwarkameez",
      price: "Rs:4,999",
      Image: "/src/assets/Images/Shalwarkameez2.jpg",
    },
    {
      id: 3,
      name: "Shalwarkameez",
      price: "Rs:3,999",
      Image: "/src/assets/Images/Shalwarkameez5.jpg",
    },
    {
      id: 4,
      name: "Laptop: acer i5 10th Generation",
      price: "Rs:24,999",
      Image: "/src/assets/Images/Acer i5 10t.jpg",
    },
    {
      id: 5,
      name: "Laptop: Dell i7 8th Generation",
      price: "Rs:30,499",
      Image: "/src/assets/Images/Dell i7.jpeg",
    },
    {
      id: 6,
      name: "Apple: MacBook",
      price: "Rs:2,50,499",
      Image: "/src/assets/Images/Apple MacBook.webp",
    },
    {
      id: 7,
      name: "Samsung: Galaxy Z Fold",
      price: "Rs:15,499",
      Image: "/src/assets/Images/Samsung Galaxy ZFold.jpg",
    },
    {
      id: 8,
      name: "Iphone 14 proMax",
      price: "Rs:1,25,599",
      Image: "/src/assets/Images/Iphone 14 proMax.webp",
    },
    {
      id: 9,
      name: "Poco-X6-Pro-1",
      price: "Rs:20,599",
      Image: "/src/assets/Images/Poco-X6-Pro-1.webp",
    },
    {
      id: 10,
      name: "TShirt: React",
      price: "Rs:1,499",
      Image: "/src/assets/Images/React.webp",
    },
    {
      id: 11,
      name: "Jeans",
      price: "Rs:1,199",
      Image: "/src/assets/Images/Jeans.webp",
    },
    {
      id: 12,
      name: "SmartWatch",
      price: "Rs:77,999",
      Image: "/src/assets/Images/SmartWatch.jpeg",
    },
  ];

  const [isSignIn, SetiSignIn] = useState(false); //default to false

  return (
    <div>
      {/* Carousel Section */}
      <h1 className="heading">{heading}</h1>
      <section className="home pb-5 mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ShalwarKameez1}
              alt="Shalwar Kameez 1"
            />
            <Carousel.Caption>
              <h3>Slide 1</h3>
              <p>This is the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ShalwarKameez2}
              alt="Shalwar Kameez 2"
            />
            <Carousel.Caption>
              <h3>Slide 2</h3>
              <p>This is the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ShalwarKameez5}
              alt="Shalwar Kameez 5"
            />
            <Carousel.Caption>
              <h3>Slide 3</h3>
              <p>This is the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Product Grid Section */}
      <section className="products">
        <Container>
          <Row>
            {products.map((product) => (
              <Col xs={12} md={4} key={product.id} className="mb-4">
                <Card>
                  {/* Replace placeholder with product images */}
                  <Card.Img
                    className="crd"
                    variant="top"
                    src={product.Image}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: {product.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        if (!isSignIn) {
                          alert(
                            "Please sign in first to add products to cart."
                          );
                        } else {
                          // Add product to cart logic here
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Payment Method Section */}
      <aside className="Paymentmethod d-flex">
        <h1 className="pm">Payment Method</h1>
        <img
          className="payment-method-image"
          src={JazzCash_easypaisa}
          alt="JazzCash Easypaisa"
        />
        <img className="payment-method-image" src={VisaMc} alt="VisaMc" />
      </aside>
    </div>
  );
}

export default Home;
