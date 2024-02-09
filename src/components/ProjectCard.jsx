import React from 'react'
import Card from 'react-bootstrap/Card';


import first from '../assets/1.jpeg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import SERVER_URL from '../services/serverUrl';


function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className='shadow mb-5 btn' style={{ width: '28rem' }} onClick={handleShow} >
      <Card.Img variant="top" src={`${SERVER_URL}/uploads/${project?.projectImage}`} />
      <Card.Body>
        <Card.Title>{project?.title}</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='align-items-center'>
            <Col sm={12} md={6}>
              <img className='img-fluid' src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-success">{project?.title}</h2>
              <p>Project Overview: <span className='fw-bolder'>{project?.overview}</span></p>
              <p>Language Used: <span className='fw-bolder text-danger'>{project?.languages}</span></p>
            </Col>
          </Row>
          <div className="mt-1">
            <a href={project?.github} target='_blank' className='ms-5' style={{cursor:'pointer'}} ><i style={{height:'34px', color:'black'}} className="fa-brands fa-github fa-2x"></i></a>
            <a href={project?.website} target='_blank' className='ms-5' style={{cursor:'pointer'}}><i style={{height:'34px', color:'black'}} className="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard