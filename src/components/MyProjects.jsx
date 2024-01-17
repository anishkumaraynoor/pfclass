import React from 'react'
import ProjectCard from './ProjectCard'
import Add from './Add'
import Edit from './Edit'




function MyProjects() {
  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
        <h2>My Projects</h2>
        <Add></Add>
      </div>
      <div className='mt-4'>
        <div className='border rounded d-flex justify-content-bewtween align-items-center mb-3 p-2'>
          <h5>Title</h5>
          <div className='icons d-flex align-items-center '>
            <Edit></Edit>
            <a className='btn btn-link ms-2' target='_blank' href=""><i className='fa-brands fa-github'></i></a>
            <button ><i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects