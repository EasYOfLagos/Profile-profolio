import React from 'react'
import { IoClose } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { PiGreaterThan } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCut } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { TbSquareToggle } from "react-icons/tb";
import { BiSortAlt2 } from "react-icons/bi";
import { CgViewComfortable } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "./background.css"


function Background() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const handleGoForward = () => {
        navigate(1)
    }

    const handleReload = () => {
        navigate(0)
    }
    return (
        <div>
            <div className='grandparent'>
                <div className="parent">
                    <div className='home d-flex'>
                        <div className='home_logo d-flex justify-content-between align-items-center mx-3'>
                            <img src={require("./../port image/icons8-home-96.png")} alt="" />
                            <h6 className='mt-2 fw-bold'>Home</h6>
                        </div>

                        <div className='close_icon'>
                            <IoClose />
                        </div>

                    </div>

                    <div className='home_plus'>
                        <TiPlus />
                    </div>
                </div>

                <div className='grandparent_icons'>
                    <div className="icons">
                        <div>
                            <FaArrowLeft onClick={handleGoBack} className='mx-3' />
                        </div>

                        <div>
                            <FaArrowRight onClick={handleGoForward}/>
                        </div>

                        <div>
                            <FaArrowUp />
                        </div>

                        <div>
                            <IoMdRefresh onClick={handleReload} />
                        </div>
                    </div>

                    <div className="home_banner">
                        <div>
                            <img src={require("./../port image/icons8-home-96.png")} alt="" className='img-fluid ms-3' />
                        </div>

                        <div>
                            < PiGreaterThan className='greater_than m-3' size={8} />
                        </div>

                        <div>
                            <p className='mt-3'>Home</p>
                        </div>

                        <div>
                            < PiGreaterThan className='greater_than m-3' size={8} />
                        </div>
                    </div>

                    <div className="search">
                        <input type="text" placeholder='Search Home' />
                    </div>
                </div>
            </div>

            <div className="all_icons">
                <div className='refresh'>
                    <div className='d-flex align-items-center'>
                        <CiCirclePlus className='' />
                        <p className='mt-3 ms-1'>New</p>
                        < PiGreaterThan className='greater_than m-3' size={8} />
                    </div>
                </div>

                <div className="divider"></div>

                <div className='d-flex'>
                    <div>
                        <IoIosCut className='m-3' />
                    </div>

                    <div>
                        <FaRegCopy className='m-3 ' />
                    </div>

                    <div>
                        <FaRegShareSquare className='m-3' />
                    </div>

                    <div>
                        <TbSquareToggle className='m-3' />
                    </div>

                    <div>
                        <MdOutlineDeleteOutline className='m-3 ' />
                    </div>
                </div>

                <div className="divider m-1"></div>

                <div className='filter_sect'>
                    <div className='d-flex align-items-center'>
                        <BiSortAlt2 className='' />
                        <p className='mt-3'>sort</p>
                    </div>

                </div>
            </div>

            <hr />
        </div>
    )
}

export default Background