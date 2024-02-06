import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/upload.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';


function Add() {
  const [projectData, setProjectData] = useState({
    title:"", languages:"", overview:"", github:"", website:"", projectImage:""
  })
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [preview, setPreview] = useState("")
  console.log(projectData);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectData({title:"", languages:"", overview:"", github:"", website:"", projectImage:""})
    setPreview(uploadImg)
  }
  const handleShow = () => setShow(true);

  const handleProjectUpload = async() =>{
    const {title, languages, overview, github, website, projectImage} = projectData
    if(!title || !overview || !languages || !github || !website || !projectImage){
      toast.info("please fill the form completely")
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        console.log("proceed to api call");
        try {
          const result = await addProjectAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status===200){
            toast.success(`New Project ${result.data.title} has added successfully`)
            console.log(result.data);
            handleClose()
          }else{
            toast.warning(result.response.data)
          }
        } catch (error) {
          
        }
        
      }
      
    }
  }

  useEffect(()=>{
    if(projectData.projectImage?.type=="image/png" || 
    projectData.projectImage?.type=="image/jpg" || projectData.projectImage?.type=="image/jpeg"){
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectData.projectImage))
    }else{
      setPreview(uploadImg)
      setProjectData({...projectData,projectImage:""})
      setImageFileStatus(false)
    }
  },[projectData.projectImage])
  

  return (
    <div>
      <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-warning d-flex align-items-center fw-bolder'>
        <i style={{height:'34px'}} className='fa-solid fa-plus fa-2x me-2'></i>
        Add Project</button>
        <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
              <label className=' w-100 d-flex justify-content-center align-items-center'>
                <input type="file" style={{display:'none'}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} name="" id="" />
                <img height={'200px'} width={'200px'} className='mt-5' src={preview?preview:uploadImg} alt="" />
              </label>
              {!imageFileStatus && <div className="text-danger">*Upload only the following file types (jpg, jpeg, png)*</div>}
            </div>
            <div className='col-lg-8'>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Title' type="text" name="" id="" value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Language Used' type="text" name="" id="" value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})}/>
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Github Link' type="text" name="" id="" value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})}/>
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Website Link' type="text" name="" id="" value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})}/>
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Overview' type="text" name="" id="" value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})}/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleProjectUpload} variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Add