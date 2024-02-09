import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/upload.png'





function Edit({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-success d-flex align-items-center fw-bolder'>
        <i style={{height:'34px'}} className='fa-solid fa-edit fa-2x me-2'></i>
        </button>
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
            <div className='col-lg-4 d-flex justify-content-center align-items-center'>
              <label htmlFor="">
                <input type="file" style={{display:'none'}} name="" id="" />
                <img height={'200px'} width={'200px'} className='' src={uploadImg} alt="" />
              </label>
            </div>
            <div className='col-lg-8'>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Title' type="text" name="" id="" />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Language Used' type="text" name="" id="" />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Github Link' type="text" name="" id="" />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Website Link' type="text" name="" id="" />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' placeholder='Project Overview' type="text" name="" id="" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit