import React, { useEffect, useState } from 'react'
import landingpage from '../assets/image.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ProjectCard from '../components/ProjectCard'
import { getHomeProjectsAPI } from '../services/allAPI';


function Home() {
  const [allProjects, setAllProjects] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false)
  const navigate = useNavigate()

  const getHomeProjects = async()=>{
    try {
      const result = await getHomeProjectsAPI()
      if(result.status === 200){
        setAllProjects(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(allProjects);
  useEffect(() => {
    getHomeProjects()
    if(sessionStorage.getItem('token')){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }
  }, []);
  const handleNavigate = ()=>{
    if(loginStatus===true){
      navigate('/projects')
    }else{
      toast.warning("Please login to get full access to our projects")
    }
    
  }

  return (
    <div>
      <div style={{height:'100vh', backgroundColor:'#fcc76a'}} className="w-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'75px'}} className='fw-bolder text-light'>
                <i style={{height:'80px'}} class='fa-solid fa-hand-holding-hand me-2 mb-3' ></i>Project Fair</h1>
              <p style={{textAlign:'justify'}}>One stop destination for all software development projects where user can add and manage their projects as well as access all projects available in our website...  What are you waiting for?!!!</p>
              {loginStatus?<Link className='btn btn-warning mt-3' to={'/dashboard'}>Manage your projects <i className='fa-solid fa-arrow-right'></i></Link>:
              <Link className='btn btn-warning mt-3' to={'/login'}>Explore<i className='fa-solid fa-arrow-right'></i></Link>}
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <img style={{width:'800px'}} className='img-fluid' src={landingpage} alt="landing" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-center mb-5">Explore Our Projects</h1>
        <marquee behavior="" direction="">
          <div className="d-flex">
            { allProjects.length>0&& allProjects.map((project, index)=>(
              <div key={index} className="project me-5">
              <ProjectCard project={project}/>
            </div>
            ))
              
            }
          </div>
        </marquee>
        <div className="text-center">
          <button onClick={handleNavigate} className='btn btn-link'>View More Projects</button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Home