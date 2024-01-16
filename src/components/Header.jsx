import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({insideDashboard}) {
  return (
    <div>
      <Navbar style={{width:"100%", backgroundColor:'yellow', zIndex:1}}>
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>
            <i class="fa-solid fa-hand-holding-hand me-2"></i>
            {' '}
            Project Fair
            </Link>
            
          </Navbar.Brand>
          {
            insideDashboard&&
            <div className='ms-auto'>
              <button style={{textDecoration:'none'}} className='btn btn-link text-warning fw-bolder'>
                <i className="fa-solid fa-gear me-2"></i>
                Log Out
              </button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header