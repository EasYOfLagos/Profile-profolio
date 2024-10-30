import React from 'react'
import "./contact.css"
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10">
            <h5 className='social text-white fw-bold m-3'>Social Media</h5>
            <div className="contact">
              <div className="facebook ">
                <Link to="https://facebook.com"><FaFacebookF size={30} />
                  <span className='fw-bold ms-3'>Facebook</span>
                </Link>
              </div>

              <div className="whatsapp">
                <Link to="https://wa.me/08081546695"><FaWhatsapp size={30} />
                  <span className='fw-bold ms-3'>Whatsapp</span>
                </Link>
              </div>

              <div className="envelope">
                <Link to="mailto:isiakaibiyemi83@gmail.com"><FaEnvelope size={30} />
                  <span className='fw-bold ms-3'>Gmail</span>
                </Link>
              </div>

              <div className="phone">
                <Link to="tel:08081546695"><FaPhoneAlt size={30} />
                  <span className='fw-bold ms-3'>Phone</span>
                </Link>
              </div>

              <div className="linkedln">
                <Link to="https://www.linkedin.com/in/isiaka-ibiyemi-206244170"><FaLinkedinIn size={30} />
                  <span className='fw-bold ms-3'>Linkedln</span>
                </Link>
              </div>


              <div className="twitter">
                <Link to="https://www.twitter.com/@easyquality"><FaTwitter size={30} />
                  <span className='fw-bold ms-3'>Twitter</span>
                </Link>
              </div>

              <div className="instagram">
                <Link to=""><FaInstagram size={30} />
                  <span className='fw-bold ms-3'>Instagram</span>
                </Link>
              </div>

              <div className="youtube">
                <Link to=""><FaYoutube size={30} />
                  <span className='fw-bold ms-3'>YouTube</span>
                </Link>
              </div>

              <div className="github">
                <Link to="https://github.com/EasYOfLagos"><FaGithub size={30} />
                  <span className='fw-bold ms-3'>Github</span>
                </Link>
              </div>



            </div>


            <div className="form text-white mt-5" >
              <form action="">
                <div className="frm-inp mt-5">

                  <div className="inp-ctrl">
                    <label for="">Full name</label>
                    <input type="text" />
                  </div>

                  <div className="inp-ctrl">
                    <label for="">Email</label>
                    <input type="email" />
                  </div>

                  <div className="inp-ctrl">
                    <label for="">Type your message:</label>
                    <textarea name="" id=""></textarea>
                  </div>
                </div>
                <div>
                  
                  <Link to="mailto:isiakaibiyemi83@gmail.com" className='btn '>Send Message</Link>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact