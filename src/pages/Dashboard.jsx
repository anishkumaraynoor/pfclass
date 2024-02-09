import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'


function Dashboard() {
  const [loginStatus, setLoginStatus] = useState(false)

  
    

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }
  }, []);

  return (
    <>
    <Header insideDashboard></Header>
      <div style={{marginTop:'150px'}}>
        <h1>Welcome {loginStatus?<span className='text-warning'>{sessionStorage.username}</span>:<span className='text-warning'>User</span>}</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <MyProjects></MyProjects>
          </div>
          <div className='col-lg-4'>
            <Profile></Profile>
          </div>
        </div>
      </div>

    </>
    
  )
}

export default Dashboard