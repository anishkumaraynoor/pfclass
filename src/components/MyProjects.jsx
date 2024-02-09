import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Add from './Add'
import Edit from './Edit'
import { getUserProjectsAPI } from '../services/allAPI'



function MyProjects() {
  const [userProjects, setUserProjects] = useState([])
  const getUserProjects = async()=>{
    try {
      const token = sessionStorage.getItem('token')
      if(token){
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result = await getUserProjectsAPI(reqHeader)
        if(result.status === 200){
          setUserProjects(result.data)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userProjects);
  useEffect(()=>{
    getUserProjects()
  },[userProjects])


  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
        <h2>My Projects</h2>
        <Add></Add>
      </div>
      <div className='mt-4'>
        {userProjects?.length>0? userProjects.map((project, index)=>(
          <div key={index} className='border rounded d-flex justify-content-bewtween align-items-center mb-3 p-2'>
          <h5>{project?.title}</h5>
          <div className='icons d-flex align-items-center '>
            <Edit project={project}></Edit>
            <a href={project?.github} className='btn btn-link ms-2' target='_blank' ><i className='fa-brands fa-github'></i></a>
            <button ><i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i></button>
          </div>
        </div>
        )): <div>Nothing to display!!!</div>
        }
      </div>
    </div>
  )
}

export default MyProjects