import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4} className="footer-col">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={12} md={4} className="footer-col">
            <h5>Quick Links</h5>
            <ul>
               <a href="https://www.facebook.com/DigiMaker11/" className='icons'><FaFacebook /></a>
              <a href="" className='icons'><FaSquareXTwitter /> </a>
              <a href="" className='icons'><FaYoutube /> </a>
            </ul>
          </Col>
          <Col xs={12} md={4} className="footer-col">
            <h5>Contact Us</h5>
            <p>
              <span>Email:</span> <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
              <span>Phone:</span> 123-456-7890
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="copyright">
            &copy; 2023 Jandga Mall. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

