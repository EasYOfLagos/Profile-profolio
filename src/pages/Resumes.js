import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import resume from "./..//IBIYEMI ISIAKA CV.pdf"
import "./resumes.css"

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
            <img src={require("./../port image/cvimage1.png")} alt="" className='img-fluid'/>
            <img src={require("./../port image/cvimge2.png")} alt="" className='img-fluid'/>
            <div className='mt-3 cv'>
              <a href={resume} download='resume' className='btn me-5 '>Download Cv</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumes