import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import profilePicture from '../assets/profile.png'

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='border rounded p-2'>
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button onClick={()=>setOpen(!open)} className='btn btn-outline-warning'><i className='fa-solid fa-caret-down'></i></button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <label htmlFor="">
            <input type="file" style={{display:'none'}} name="" id="" />
            <img width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={profilePicture} alt="upload profile picture" />
          </label>
          <form action="">
            <div className='mb-2'>
            <input type="text" className='rounded p-1 w-75' placeholder='Enter your Github Link here' name="" id="" />
            </div>
            <div className='mb-2'>
            <input type="text" className='rounded p-1 w-75' placeholder='Enter your Linkin Link here' name="" id="" />
            </div>
            <div className='mb-3 d-grid w-75 mx-auto'>
              Update
            </div>
          </form>


        </div>
      </Collapse>
    </div>
  )
}

export default Profile