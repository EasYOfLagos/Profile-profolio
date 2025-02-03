import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import "./home.css"

function Home() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row banner_grandparent">
          <div className="col-md-2">
            <Navbar />
          </div>


          <div className="col-md-10 banner mt-3">
            <Link className='d-flex align-items-center' to="/about">
              <img src={require("./../port image/icons8-pictures-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>About Me</p><br />
            </Link>

            <Link className='d-flex align-items-center' to="/projects">
              <img src={require("./../port image/icons8-code-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Projects</p>
            </Link>

            <Link className='d-flex align-items-center' to="/services">
              <img src={require("./../port image/icons8-downloads-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Services</p>
            </Link>

            <Link className='d-flex align-items-center' to="/github">
              <img src={require("./../port image/icons8-cloud-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Github</p>
            </Link>

            <Link className='d-flex align-items-center' to="/contact">
              <img src={require("./../port image/icons8-desktop-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Contact</p>
            </Link>

            <Link className='d-flex align-items-center' to="/blog">
              <img src={require("./../port image/icons8-music-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Blog</p>
            </Link>

            <Link className='d-flex align-items-center' to="/skills">
              <img src={require("./../port image/icons8-movies-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Skills</p>
            </Link>

            <Link className='d-flex align-items-center' to="/resumes">
              <img src={require("./../port image/icons8-documents-folder-96.png")} alt="" />
              <p className='fw-bold ms-2 mt-3'>Resumes</p>
            </Link>

            <Link className='d-flex align-items-center' >
              <img src={require("./../port image/portfolio-Drive-big-disk.png")} alt="" />
              <p className='fw-bold ms-2 mt-2'>Local Disk(C:)</p>
            </Link>

            <Link className='d-flex align-items-center' >
              <img src={require("./../port image/portfolio-Drive-win.png")} alt="" />
              <p className='fw-bold ms-2 mt-2'>DVD RW Drive(E:)</p>
            </Link>

            <Link className='d-flex align-items-center' >
              <img src={require("./../port image/portfolio-Drive-network.png")} alt="" />
              <p className='fw-bold ms-2 mt-2'>Google Drive(G:)</p>
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home