import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import { getAllProjectsAPI } from '../services/allAPI'



function Projects() {
  const [allProjects, setAllProjects] = useState([])
  const getAllProjects = async()=>{
    try {
      const token = sessionStorage.getItem('token')
      if(token){
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await getAllProjectsAPI(reqHeader)
        if(result.status===200){
          setAllProjects(result.data)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()
  },[])



  return (
    <div>
      <Header></Header>
      <div style={{marginTop:'150px'}} className='container-fluid'></div>
      <div className='d-flex justify-content-between'>
      <h1 className='ms-5'>All Projects</h1>
      <input style={{width:'300px'}} className='rounded p-2' type="text" placeholder='Search Products by its Language' />
      </div>
      
      <Row className='mt-5' >
        {
        allProjects?.length>0? allProjects.map((project, index)=>(
          <Col key={index} sm={12} md={6} lg={4}>
          <ProjectCard project={project}></ProjectCard>
          </Col>
        )):
          <div>Nothing to display!!!</div>
        }
      </Row>
      
    </div>
  )
}

export default Projects