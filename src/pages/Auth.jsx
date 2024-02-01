import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthImage from '../assets/download.jpeg'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import Spinner from 'react-bootstrap/Spinner';



function Auth({insideRegister}) {
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate()
  const [userInputData, setUserInputData] = useState({
    username:"", email:"", password:""
  })
  const handleRegister = async(e)=>{
    e.preventDefault()
    const {username, email, password} = userInputData
    if(!username || !email || !password){
      toast.info("Please fill the form completely")
    }else{
      try {
        const result = await registerAPI(userInputData)
        if(result.status===200){
          toast.success(`Welcome ${result.data.username}... Please login`)
          setUserInputData({username:"", email:"", password:""})
          setTimeout(()=>{
            navigate('/login')
          },2000)
        }else{
          toast.error(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = userInputData
    if(!email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      try {
        const result = await loginAPI({email, password})
        console.log(result);
        if(result.status===200){
          sessionStorage.setItem("username", result.data.existingUser.username)
          sessionStorage.setItem("token", result.data.token)
          setLoginStatus(true)
          setTimeout(()=>{
            setUserInputData({email:"", password:""})
            navigate('/')
            setLoginStatus(false)
          },2000)
        }else{
          toast.error(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


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
        <Form.Control type="text" placeholder="Enter Name" value={userInputData.username} 
        onChange={e=>setUserInputData({...userInputData, username:e.target.value})} />
      </Form.Group>
                }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" value={userInputData.email}
        onChange={e=>setUserInputData({...userInputData, email:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="password" placeholder="Enter password" value={userInputData.password}
        onChange={e=>setUserInputData({...userInputData, password:e.target.value})} />
      </Form.Group> 
      {
        insideRegister?
        <div>
          <button onClick={handleRegister} className='btn btn-warning mb-2'>Register</button>
          <p>Already have Account? Click here to <Link to={'/login'} className='text-warning'>Login</Link></p>
        </div>:
        <div>
        <button onClick={handleLogin} className='btn btn-warning mb-2'>Login{loginStatus&&<Spinner animation="border" variant="light" />}</button>
        <p>New User? Click here to <Link to={'/register'} className='text-warning'>Register</Link></p>
      </div>
      }     
    </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
    </div>
  )
}

export default Auth