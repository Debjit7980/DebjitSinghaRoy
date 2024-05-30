import React from 'react'
import img1 from './../assets/Images/featuresImg1.jpg';
import img2 from './../assets/Images/featuresImg2.png';
import img3 from './../assets/Images/featuresImg3.png';
import img4 from './../assets/Images/featuresImg4.png';
import img5 from './../assets/Images/featuresImg5.png';
import img6 from './../assets/Images/featuresImg6.png';
import img7 from './../assets/Images/featuresImg7.png';
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoHandLeftOutline } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { SiOpenlayers } from "react-icons/si";
import { BsFillSendFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


/* CSS styling for this component has been done in index.css for simplicity*/

function Features() {

    const dotArray = Array.from({ length: 63 });

    return (

        <>
            <div className='features-container'>
                <div className='features-heading'>
                    <p className='heading'>Our <span>Features</span></p>
                    <span>This very extraordinary feature, can make learning activities more efficient</span>
                </div>
                <div className='features-article'>
                    <div className='features-images'>
                        <div className='feature-images-box'>
                            <div className='feature-images-rect'>
                                <span id="red"></span>
                                <span id="orange"></span>
                                <span id="green"></span>
                            </div>
                            <div className='image-1'>
                                <img src={img1} />
                                <div className='image-desc'>
                                    <span className='icon'><MdOutlineSignalCellularAlt /></span>
                                    <span className='position'>Instructor</span>
                                    <span className='name'>Eveny Howard</span>
                                </div>
                            </div>
                            <div className='image-2'>
                                <img src={img2} />
                                <div className='image-desc'>
                                    <span className='icon'><MdOutlineSignalCellularAlt /></span>
                                    <span className='name'>Tamara Clarke</span>
                                </div>
                            </div>
                            <div className='image-3'>
                                <img src={img3} />
                                <div className='image-desc'>
                                    <span className='icon'><MdOutlineSignalCellularAlt /></span>
                                    <span className='name'>Humbert Holland</span>
                                </div>
                            </div>
                            <div className='image-4'>
                                <img src={img4} />
                                <div className='image-desc'>
                                    <span className='icon'><MdOutlineSignalCellularAlt /></span>
                                    <span className='name'>Adam Levin</span>
                                </div>
                            </div>
                            <div className='image-5'>
                                <img src={img5} />
                                <div className='image-desc'>
                                    <span className='icon'><MdOutlineSignalCellularAlt /></span>
                                    <span className='name'>Patricia Mendoza</span>
                                </div>
                            </div>
                            <div className='feature-btn'>
                                <span className='feature-btn-pre'>Present</span>
                                <span className='feature-btn-call'> <span><IoIosCall /></span>Call</span>
                            </div>
                            <span className='hand-icon'><span className='hand-icon-inside'><IoHandLeftOutline className='hand' /></span></span>
                        </div>
                        <div className='ellipse-1'></div>
                        <div className='ellipse-2'></div>
                        <div className='ellipse-3'></div>
                        <div className='ellipse-4'></div>
                    </div>
                    <div className='features-desc'>
                        <div className='features-heading'>
                            <p className='heading'>A <span>user interface</span> designed for the classroom</p>
                            <div className='features'>
                                <div className='features-one'>
                                    <span className='desc-icons-box'><PiSquaresFourFill className='desc-icons' /></span>
                                    <p>Teachers don’t get lost in the grid view
                                        and have a dedicated Podium space.
                                    </p>
                                </div>
                                <div className='features-one'>
                                    <span className='desc-icons-box'><SiOpenlayers className='desc-icons' /></span>
                                    <p>Teachers don’t get lost in the grid view
                                        and have a dedicated Podium space.
                                    </p>
                                </div>
                                <div className='features-one'>
                                    <span className='desc-icons-box'><MdGroups className='desc-icons' /></span>
                                    <p>Teachers don’t get lost in the grid view
                                        and have a dedicated Podium space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='features-section'>
                    <div>
                        <span className='heading'><span>Tools</span> For Teachers And Learners</span>
                        <p className='subheading'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.
                        </p>
                    </div>
                    <div className='features-section-image-cont'>
                        <div className='features-section-image'>
                            <img src={img6} />
                            <div style={{ position: "absolute", top: "18%", left: "35%", zIndex: "-1", backgroundColor: "#FF6A6A", width: "236px", height: "236px", borderRadius: "50%" }}></div>
                        </div>
                        <div className="dot-cont">
                            {dotArray.map((_, index) => (
                                <div key={index} className="dot"></div>
                            ))}
                        </div>
                        <div style={{ transform: "rotate(-12.14deg)", position: "absolute", top: "26%", left: "9%", width: "85.86px", height: "85.86", borderRadius: "20px", backgroundColor: "#FFFFFF", boxShadow: "0px 14px 44px 0px #565BDD1A", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0" }}>
                            <div style={{ width: "62.36px", height: "62.36px", borderRadius: "20%", backgroundColor: "white", boxShadow: "0px 16px 44px 0px #0D0F1C1A", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{ width: "17.17px", height: "8.59px", backgroundColor: "#545AE8", borderRadius: "4px" }}></span>
                                    <span style={{ width: "17.17px", height: "22.9px", backgroundColor: "#545AE8", borderRadius: "4px" }}></span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{ width: "17.17px", height: "22.9px", backgroundColor: "#2F327D", borderRadius: "4px" }}></span>
                                    <span style={{ width: "17.17px", height: "8.59px", backgroundColor: "#545AE8", borderRadius: "4px" }}></span>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "absolute", top: "35%", right: "5%", transform: "rotate(9.92deg)", width: "85.11px", height: "85.11px", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 14px 44px 0px #565BDD1A", backgroundColor: "white" }}>
                            <span style={{ width: "61.82px", height: "61.82px", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 16px 44px 0px #0D0F1C1A", backgroundColor: "white" }}><MdGroups style={{ width: "36.73px", height: "29.56px", color: "#545AE8" }} /></span>
                        </div>
                        <div className='features-section-ellipse'></div>
                        <div className='features-section-ellipse two'></div>
                        <div className='features-section-ellipse three'></div>
                    </div>
                </div>
                <div className="features-assessment-section">
                    <div className='assessment-image-box'>
                        <div className='assessment-image'>
                            <span style={{margin:"2rem 0 0 2rem",width:"174.37px",height:"47.9px",borderRadius:"72.82px",backgroundColor:"#CDD8FF",color:"#717FB0",fontSize:"20.03px",fontWeight:"400",lineHeight:"32.04px", display: "flex", justifyContent: "center", alignItems: "center"}}>Question 1</span>
                            <span style={{margin:"2rem 0 0 2rem",width:"387.06px",height:"103.47px",borderRadius:"72.82px",color:"#55578D",fontSize:"28.95px",fontWeight:"600",lineHeight:"49.52px", display: "flex", justifyContent: "center", alignItems: "center"}}>True or false? This play takes place in Italy</span>
                            <div className='image'>
                                <img src={img7} />
                            </div>
                            <span className='elipse-one'></span>
                            <span className='elipse-two'></span>
                            <span className='elipse-three'></span>
                            <span style={{position:"absolute",top:"-20px",right:"20px",width:"60.65px",height:"60.65px",backgroundColor:"#FFFFFF",boxShadow: "0px 3.64px 40.05px 0px #2F327D1A",borderRadius:"50%",display: "flex", justifyContent: "center", alignItems: "center"}}><IoCloseCircleOutline style={{color:"#EE3175",width:"43.11px",height:"43.11px",transform:"rotate(-10.96deg)"}} /></span>
                            <span style={{position:"absolute",top:"30px",right:"-25px",width:"60.65px",height:"60.65px",backgroundColor:"#FFFFFF",boxShadow: "0px 3.64px 40.05px 0px #2F327D1A",borderRadius:"50%",display: "flex", justifyContent: "center", alignItems: "center"}}><IoIosCheckmarkCircleOutline style={{color:"#2DD38E",width:"43.11px",height:"43.11px",transform:"rotate(13.9deg)"}}/></span>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center",position:"absolute",bottom:"-10px",right:"0px",width:"365.03px",height:"119.76px",borderRadius:"18.21px",boxShadow: "0px 18.21px 52.8px 0px #282B6F14",backgroundColor:"white"}}>
                            <span style={{width:"59.4px",height:"59.4px",backgroundColor:"#D8F9ED",borderRadius:"50%"}}><BsFillSendFill style={{width:"74.73px",height:"47.9px",transform:"rotate(26.79deg)",color:"#41BE90"}}/></span>
                            <span style={{width:"190.66px",height:"67.07px",fontSize:"20.03px",fontWeight:"600",lineHeight:"28.04px",fontFamily:"poppins",color:"#41BE90",position:"relative",zIndex:"1",letterSpacing:"1px"}}>Your answer was sent successfully<span className='elipse-four'></span></span>
                        </div>
                        
                    </div>
                    <div className='assessment-desc'>
                        <span className='heading'>Assessments, <span>Quizzes</span>, Tests</span>
                        <p>Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
