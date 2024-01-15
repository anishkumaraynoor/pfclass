import React from 'react'
import { Link } from 'react-router-dom'
import AuthImage from '../assets/download.jpeg'
import Form from 'react-bootstrap/Form';




function Auth({insideRegister}) {
  return (
    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center' >
      <div className='container w-75'>
        <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-solid fa-arrow-left'></i> Back to Home</Link>
        <div style={{backgroundColor:'#fefef2'}} className="card shadow p-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src={AuthImage} alt="Authentication" />
            </div>
            <div className="col-lg-6">
            
              <h1 className="fw-bolder text-warning">
              <i style={{height:'45px'}} class='fa-solid fa-hand-holding-hand me-2 mb-3' ></i>Project Fair
              </h1>
              <h5 className='fw-bolder text-warning mt-2'>Sign {insideRegister?'Up':'In'} to your account</h5>

              <Form>
                {
                  insideRegister&&
                  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
                }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group> 
      {
        insideRegister?
        <div>
          <button className='btn btn-warning mb-2'>Register</button>
          <p>Already have Account? Click here to <Link to={'/login'} className='text-warning'>Login</Link></p>
        </div>:
        <div>
        <button className='btn btn-warning mb-2'>Login</button>
        <p>New User? Click here to <Link to={'/register'} className='text-warning'>Register</Link></p>
      </div>
      }     
    </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth