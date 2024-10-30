import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'

function Blog() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10">
            <h5 className='f-bold text-white mt-3'>Hey! Coming Someday 😁</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog