import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import "./about.css"

function About() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h1 className=''>About Me</h1>
              <hr />
              <p>Hi my name is Ibiyemi Isiaka Olalekan, a passionate frontend & backend developer in Lagos Nigeria with a Higher National Diploma in Business Administration and management study. I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean human code matters to me.</p>

              <p>I believe in defining myself not by my past work, but by the work I aspire to accomplish. I value continuous learning, self-challenge, and meaningful pursuits. Fueled by high energy and boundless enthusiasm, I am easily inspired and always eager to follow my passions. My diverse interests, hobbies, and areas of study fuel my passion for creativity and innovation. I am a fast learner, capable of acquiring new skills and managing multiple projects with ease. I strive to develop expertise in several areas throughout my life and career.</p>



              <div className="skills">
                <h1>Skills</h1>
                <hr />
                
                <p>Check my skills page for language i can write and what i can do</p>

              </div>



            </div>
          </div>

          <div className="col-md-4 mt-3 myself">
            <img src={require("./../port image/EasY.jpg")} alt="" className='img-fluid'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About