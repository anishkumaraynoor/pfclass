import React from 'react'
import Card from 'react-bootstrap/Card';


import first from '../assets/1.jpeg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className='shadow mb-5 btn' style={{ width: '28rem' }} onClick={handleShow} >
      <Card.Img variant="top" src={first} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='align-items-center'>
            <Col sm={12} md={6}>
              <img className='img-fluid' src={first} alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-success">Title</h2>
              <p>Project Overview: <span className='fw-bolder'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint id perspiciatis aut? Id sed temporibus commodi aspernatur, laboriosam impedit magnam dolorem delectus minus dolorum modi. Dolores assumenda nihil sapiente quidem.</span></p>
              <p>Language Used: <span className='fw-bolder text-danger'>HTML, CSS, JS</span></p>
            </Col>
          </Row>
          <div className="mt-1">
            <a href="https://github.com/anishkumaraynoor/projectfair.git" target='_blank' className='ms-5' style={{cursor:'pointer'}} ><i style={{height:'34px', color:'black'}} className="fa-brands fa-github fa-2x"></i></a>
            <a href="https://videostack.vercel.app/" target='_blank' className='ms-5' style={{cursor:'pointer'}}><i style={{height:'34px', color:'black'}} className="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard