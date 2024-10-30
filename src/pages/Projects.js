import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import "./project.css"

function Projects() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10">
            <h5 className='mt-4 fw-bold'>Projects</h5>
            <div className='projects'>
              <div>
                <Link className='' to='/allproject'><img src={require("./../port image/icons8-file-explorer-96 (1).png")} alt="" />
                  <span className='fw-bold' >personal projects</span>
                </Link>
              </div>
              <div>
                <Link><img src={require("./../port image/icons8-file-explorer-new-96.png")} alt="" />
                  <span className='fw-bold'>work projects</span>
                </Link>
              </div>
              <div><Link><img src={require("./../port image/icons8-folder-96.png")} alt="" />
                <span className='fw-bold'>incoming projects</span>
              </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects