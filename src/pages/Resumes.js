import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import resume from "./..//IBIYEMI-CVUPDATE2025.pdf"
import "./resumes.css"
import {HiDownload} from "react-icons/hi"

function Resumes() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="cvbreak col-md-10 mt-3">
            <img src={require("./../port image/myimage11.png")} alt="" className='img-fluid'/>
            <img src={require("./../port image/myimage1.png")} alt="" className='img-fluid'/>
            <div className='posit mt-2 mx-2 cv'>
              <a href={resume} download='resume' className='btn me-5 '>Download Cv <HiDownload/> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumes