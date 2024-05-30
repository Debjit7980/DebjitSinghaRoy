import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from './../assets/Images/testImg1.jfif';
import { FaStar } from "react-icons/fa";

function Testimonials() {
    return (
        <>
            <style>
                {`
                    .testimonial-cont{
                        position: absolute;
                        top:6203px;
                        width: 100%;
                        margin:auto;
                      }
                      .testimonial-section{
                        width:90%;
                        margin:auto;
                        display: flex;
                      
                      }
                      .testimonial-desc{
                        width:50%;
                      }
                      .testimonial-image-cont{
                        width:50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                      }
                `}
            </style>
            <div className='testimonial-cont'>
                <div className='testimonial-section'>
                    <div className='testimonial-desc'>
                        <div style={{ position: "relative" }}>
                            <span style={{ marginLeft: "6rem", fontFamily: "Nunito Sans", fontSize: "20px", fontWeight: "400", lineHeight: "27.28px", letterSpacing: "6px", color: "#525596" }}>TESTIMONIAL</span>
                            <div style={{ position: "absolute", borderTop: "1px solid #525596", top: "50%", left: "1%", width: "80px", height: "20px" }}></div>
                        </div>
                        <div style={{ paddingTop: "2rem", display: "flex", flexDirection: "column", fontFamily: "poppins" }}>
                            <span style={{ fontSize: "60px", color: "#2F327D", fontWeight: "700" }}>What They Say?</span>
                            <p style={{ fontSize: "22px", color: "#696984", fontWeight: "400" }}>Skilline has got more than 100k positive ratings from our users around the world. </p>
                            <p style={{ fontSize: "22px", color: "#696984", fontWeight: "400", letterSpacing: "2%" }}>Some of the students and teachers were greatly helped by the Skilline.</p>
                            <p style={{ fontSize: "22px", color: "#696984", fontWeight: "400", letterSpacing: "2%" }}>Are you too? Please give your assessment</p>
                            <div style={{ border: "1px solid #FF7A59", borderRadius: "80px", width: "343px", height: "70px", display: "flex", justifyContent: "space-between", alignItems: "center",cursor:"pointer" }}>
                                <span style={{ fontSize: "20px", letterSpacing: "2%", marginLeft: "20px", color: "#FF7A59", fontWeight: "400" }}>Write your assessment</span>
                                <span style={{ width: "70px", height: "70px", borderRadius: "50%", border: "1px solid #FF7A59", display: "flex", justifyContent: "center", alignItems: "center" }}><IoIosArrowRoundForward style={{ fontSize: "25px", color: "#FF7A59" }} /></span>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-image-cont'>
                        <div style={{ width: "500px", height: "600px" }}>
                            <img src={img1} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px 0 0 0" }} />
                        </div>
                        <div style={{ backgroundColor: "white", display: "flex", flexDirection: "column", position: "absolute", bottom: "-16%", right: "5px", width: "450px", height: "220px", borderLeft: "6px solid #FF7A59", borderRadius: "20px 0 0 20px", boxShadow: "2px 4px 60px 0px #292C7C1A", paddingBottom: "14px" }}>
                            <div style={{ width: "380px", marginTop: "25px", borderLeft: "1px solid #BDBDD1", marginLeft: "2rem" }}>
                                <p style={{ fontSize: "18px", fontWeight: "400", letterSpacing: "2%", color: "#5F5F7E", lineHeight: "25.6px", paddingLeft: "20px" }}>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."</p>
                            </div>
                            <div style={{ display: "flex", gap: "12rem", alignItems: "center", color: "#5F5F7E", marginTop: "1rem" }}>
                                <span style={{ fontSize: "20px", fontWeight: "600", marginLeft: "2.5rem" }}>Gloria Rose</span>
                                <div style={{ display: "flex", color: "#2F327D", fontSize: "15.98px" }}>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                </div>

                            </div>
                            <span style={{ marginLeft: "auto", marginRight: "14px", color: "#80819A" }}>12 reviews at Yelp</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonials
