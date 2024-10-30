import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"


function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row navbar_parent">

          <div className="col-md-2">
            <Link className='d-flex align-items-center' to="/">
              <img src={require("./../port image/icons8-home-96.png")} alt="" />
              <p className='mt-3 ms-2'>Home</p>
            </Link>

            <Link className='d-flex align-items-center' to="/about">
              <img src={require("./../port image/icons8-gallery-96.png")} alt="" />
              <p className='mt-3 ms-2'>About</p>
            </Link>

            <Link className='d-flex align-items-center' to="/projects">
              <img src={require("./../port image/icons8-visual-studio-96.png")} alt="" />
              <p className='mt-3 ms-2'>Projects</p>
            </Link>

            <Link className='d-flex align-items-center' to="/skills">
              <img src={require("./../port image/icons8-pictures-folder-96.png")} alt="" />
              <p className='mt-3 ms-2'>Skills</p>
            </Link>


            <Link className='d-flex align-items-center' to="/services">
              <img src={require("./../port image/icons8-downloads-96.png")} alt="" />
              <p className='mt-3 ms-2'>Services</p>
            </Link>

            <Link className='d-flex align-items-center' to="/contact">
              <img src={require("./../port image/icons8-desktop-folder-96.png")} alt="" />
              <p className='mt-3 ms-2'>Contact</p>
            </Link>

            <Link className='d-flex align-items-center' to="/github">
              <img src={require("./../port image/icons8-clouds-96.png")} alt="" />
              <p className='mt-3 ms-2'>Github</p>
            </Link>

            <Link className='d-flex align-items-center' to="/resumes">
              <img src={require("./../port image/icons8-documents-folder-96.png")} alt="" />
              <p className='mt-3 ms-2'>Resume</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar