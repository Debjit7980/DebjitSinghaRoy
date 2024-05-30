import React from 'react'
import google from './../assets/Images/googleLogo.png';
import netflix from './../assets/Images/netflixLogo.png';
import airbnb from './../assets/Images/airbnbLogo.png';
import amazon from './../assets/Images/amazonLogo.png';
import facebook from './../assets/Images/facebookLogo.png';
import grab from './../assets/Images/grabLogo.png';
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

function Companies() {
    return (
        <>
            <style>
                {`
                    .companies{
                        position: absolute;
                        top:1218px;
                        width: 100%;
                        height:145.54px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap:2.5rem;
                      }
                      .companies>.heading{
                        font-size: 28px;
                        font-family: 'poppins';
                        font-weight: 500;
                        color:rgba(105, 105, 132, 1);
                      }
                      .companies>.logos{
                        display: flex; 
                        width: 88%;
                        justify-content: space-evenly;
                        align-items: center;
                      }
                      .companies>.logos>span>img{
                        filter:grayscale(120%) opacity(40%);
                      }
                      #google{
                        width: 168.3px;
                        height: 54.7px;
                      }
                      #netflix{
                        width: 151.34px;
                        height: 40.71px;
                        filter:grayscale(120%) opacity(30%);
                      }
                      #airbnb{
                        width: 161.32px;
                        height: 49.93px;
                      }
                      #amazon{
                        width: 153.64px;
                        height: 46.09px;
                        margin-top:20px;
                        filter:grayscale(120%) opacity(25%);
                      }
                      #facebook{
                        width:198px;
                        height: 38.41px;
                      }
                      #grab{
                        width: 130.43px;
                        height: 50.49px;
                      
                      }
                      
                      .company-article{
                        width:100%;
                        margin:auto;
                        position: absolute;
                        top:1400px;
                        padding-top:6rem;
                        display: flex;
                        flex-direction: column;
                      }
                      .company-article-heading{
                        width: 90%;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin:auto;
                      }
                      
                      .company-article-heading>#heading{
                        width:501px;
                        font-family: 'poppins';
                        font-size: 36px;
                        font-weight: 700;
                        color:rgba(47, 50, 125, 1);
                      }
                      .company-article-heading>#heading>span{
                        font-family: 'poppins';
                        font-size: 36px;
                        font-weight: 700;
                        color:rgba(255, 122, 89, 1);
                      }
                      .company-article-heading>span{
                        width:837px;
                        font-family: 'poppins';
                        font-size: 24px;
                        font-weight: 400;
                      }
                      .company-article-section{
                        width:95%;
                        display:flex;
                        margin:auto;
                        padding-top:10rem;
                        flex-direction: row;
                        gap:30px;
                      }
                      .company-article-section>.card{
                        width:450px;
                        height:430px;
                        display: flex;
                        position: relative;
                        flex-direction: column;
                        text-align: center;
                        border-radius:20px;
                        box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                      }
                      .card-logo{
                        position: absolute;
                        top:-10%;
                        left:40%;
                        width:100px;
                        height:100px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                      }
                      .doc{
                        background-color: rgba(91, 114, 238, 1);
                        box-shadow: 0px 10px 40px 0px rgba(54, 61, 136, 0.1);
                      
                      }
                      #doc{
                        font-size: 40px;
                        color:white;
                      }
                      .cal{
                        background-color: rgba(47, 50, 125, 1);
                        box-shadow: 0px 16px 40px 0px rgba(37, 44, 113, 0.1);
                      
                      }
                      #cal{
                        font-size: 40px;
                        color:white;
                      }
                      .customer{
                        background-color: rgba(41, 185, 231, 1);
                        box-shadow: 0px 10px 40px 0px rgba(54, 61, 136, 0.1);
                      
                      }
                      #customer{
                        font-size: 55px;
                        color:white;
                      }
                      .company-article-section>.card>.card-desc{
                        margin:8rem auto 0 auto ;
                        font-size: 30px;
                        width:343px;
                        font-family: 'poppins';
                        font-weight:500;
                        color:rgba(47, 50, 125, 1);
                      }
                      .company-article-section>.card>p{
                        margin:auto;
                        width:341px;
                        height:144px;
                        line-height: 36px;
                        font-size: 20px;
                        font-family: 'poppins';
                        font-weight:400;
                        color:rgba(105, 105, 132, 1);
                      }
                      .company-article-section>.card>#last-card-span{
                        width:290px;
                        font-size: 30px;
                        font-family: 'poppins';
                        font-weight:500;
                        color:rgba(47, 50, 125, 1);
                        margin: 9.5rem auto 0 auto;
                      }
                      .company-article-section>.card>#last-card-p{
                        margin-top: 3rem;
                        width: 319px;
                        
                      }
                `}
            </style>
            <div className='companies'>
                <span className='heading'>Trusted by 5,000+ Companies Worldwide</span>
                <div className='logos'>
                    <span><img src={google} id="google" /></span>
                    <span><img src={netflix} id="netflix" /></span>
                    <span><img src={airbnb} id="airbnb" /></span>
                    <span><img src={amazon} id="amazon" /></span>
                    <span><img src={facebook} id="facebook" /></span>
                    <span><img src={grab} id="grab" /></span>
                </div>
            </div>
            <div className='company-article'>
                <div className='company-article-heading'>
                    <p id="heading">All-In-One <span >Cloud Software.</span></p>
                    <span>Skilline is one powerful online software suite that
                        combines all the tools needed to run a successful school or office.
                    </span>
                </div>
                <div className='company-article-section'>
                    <div className='card'>
                        <span className='card-desc'>Online Billing, Invoicing, & Contracts</span>
                        <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                        <span className='card-logo doc'><IoDocumentTextSharp id="doc" /></span>
                    </div>
                    <div className='card'>
                        <span className='card-desc'>Easy Scheduling & Attendance Tracking</span>
                        <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                        <span className='card-logo cal'><FaRegCalendarAlt id="cal" /></span>
                    </div>
                    <div className='card'>
                        <span id='last-card-span'>Customer Tracking</span>
                        <p id="last-card-p">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
                        <span className='card-logo customer'><MdGroups id="customer" /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies
