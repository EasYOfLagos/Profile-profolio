import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
import "./allproject.css"

function Allproject() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10 ">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/images1.png")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Home Furniture Website</h6>
                      <Link className='' to='/https://vercel.app/'>Checkout for link here</Link>
                      
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/image2.png")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">Office Furniture website</h6>
                      <Link className='' to='/https://vercel.app/'>Checkout for link here</Link>
                     
                    </div>
                  </div>

                </div>

                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/myprojectimage.jpg")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">My Portfolio Project</h6>
                      <Link className='' to='/https://vercel.app/'>Checkout for link here</Link>
                      
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allproject