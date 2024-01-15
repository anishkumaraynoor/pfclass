import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-dark'>
      <Container>
        <Row className='py-3'>
          <Col lg={3} md={6} >
            
          <b className='fs-4 text-white ms-2'><i class="fa-solid fa-hand-holding-hand me-2"></i>Project-Fair</b>
            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque tempora quas esse quae qui, hic ipsum consectetur enim cum dignissimos quia fugiat est. Doloremque aut eius quos quia assumenda.</p>

          </Col>
          <Col lg={3} md={6} >
            <h5 class="text-secondary">Links</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <Link to={'/'}><a class="text-danger">Home</a></Link>
              </li>
              <li>
                <Link to={'/login'}><a class="text-danger">Login</a></Link>
              </li>
              <li>
                <Link to={'/register'}><a class="text-danger">Register</a></Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} >
            <h5 class="text-secondary">Guides</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <h6 class="text-white">React</h6>
              </li>
              <li>
                <h6 class="text-white">React Bootstrap</h6>
              </li>
              <li>
                <h6 class="text-white">Routing</h6>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} >
            <h5 class="text-secondary">Contact Us</h5>
            <div className='d-grid'>
              <input type="email" placeholder="enter email" id="" />
              <button style={{ lineHeight: '8px' }} className='btn btn-danger'>Send</button>
            </div>
            <section class="text-center mb-5">
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer