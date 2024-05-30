import React from 'react';
import headerImg from './../assets/Images/header-img.png';
import profileImg from './../assets/Images/profileImg.jpg';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";

function Header() {
  return (
    <>
      <style>
        {`
          .header-bg{
            width:100%;
            height:100vh;
            position: relative;
          }
          
          .header-bg::before {
            content:"";
            position:absolute;
            z-index:-1;
            top:0;
            left:0;
            right:0;
            bottom:0;
            height: 1118px;
            background-color:rgba(255, 235, 231, 1);
            border-bottom-left-radius: 50% 100px;
            border-bottom-right-radius: 50% 100px;
          }
          .header-bg h1{
            margin:0;
          }
          
          /*============== Navbar ================*/

          .navbar{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding:4rem 4rem 0 5rem;
          }
          .logo{
            position: relative;
          }
          .logo span{
            font-size: 28px;
            font-family: 'poppins';
            color:rgba(17, 60, 73, 1);
            z-index: 1;
            font-weight: 700;
            letter-spacing: 2px;
            position: relative;
          }
          .polygon{
            width: 60px;
            height: 60px;
            background-color: rgba(101, 218, 255, 1);
            transform: rotate(45deg);
            position: absolute;
            top: -8px; 
            left: 10px; 
            border-radius: 8px;
            transform: translateX(-50%) rotate(45deg);
            z-index: 0;
          }
          
          /*=========== Nav Links ============*/
          
          .links{
            display: flex;
            justify-content: center;
            align-items: center;
            gap:2.5rem;
          }
          .links span{
            font-family: 'poppins';
            font-size: 20px;
          }
          .nav-btn{
            display: flex;
            border-radius: 80px;
            width: 140px;
            height: 45px;
            justify-content: center;
            align-items: center;
          }
          .login{
            background-color: white;
          }
          .sign{
            background-color: rgba(47, 50, 125, 1);
            color:white;
          }
          
          /* =============== Header Section ====================*/
          
          .header-section{
            width:95%;
            height:971px ;
            display: flex;
            margin:0 auto;
            justify-content: space-between; 
            position:relative;
          }
          .section-one{
            width:40%;
            padding-top:10rem;
            display: flex;
            flex-direction: column;
            gap:5px;
          
          }
          .section-one>#heading{
            font-family: 'poppins';
            width:680px;
            height:162px;
            font-size: 50px;
            font-weight: 700;
            padding:0;
            color:rgba(47, 50, 125, 1);
          }
          .section-one>#sub-heading{
            font-size: 22px; 
            font-family: 'poppins';
            margin-top:-25px;
            width: 523px;
            height: 76px;
          
          }
          .section-one>#heading>span{
            color:orange;
            font-size: 50px;
          }
          
          
          .inline-btns{
            font-size: 22px;
            width:580px;
            font-family: 'poppins';
            display: flex;
            justify-content: space-between;
          }
          .inline-btns>#join-btn{
            background-color: rgba(255, 122, 89, 1);
            font-size: 22px;
            font-family: 'poppins';
            width:200px;
            height:70px;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 80px;
            cursor: pointer;
          }
          .play-btn{
            width:70px;
            height:70px;
            background-color: rgba(255,255,255,1);
            border-radius:50%;
            position: relative;
            cursor: pointer;
            box-shadow: 2px 20px 60px 0px rgba(61, 155, 185, 0.1);
            
          }
          .play-btn>div{
            position: absolute;
            width:30.33px;
            height:30px;
            left:35%;
            top:30%;
            background-color: rgba(101, 218, 255, 1);
            clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
            transform: rotate(90deg);
          }
          
          /*=============== Header Image=================*/
          
          .header-pic {
            position: relative;
            padding-top:7.4rem;
            width:911px;
            height: 890px;
          }
          .header-image{
            width: 653px;
            height: 870px;
            margin-left:auto;
          }
          
          .header-pic>.header-image>img {
            padding-top:20px;
            width:100%;
            height:100%;
            margin-left:18px;
            object-fit:cover;
            border-bottom-right-radius: 100% 93px;
            filter: drop-shadow(0px -50px 30px rgba(29, 28, 24, 0.16));
          }
          
          .grp-1{
            position: absolute;
            background-color: rgb(255, 255, 255,0.9);
            width:280px;
            height:82px;
            top:34%;
            left:4%;
            border-radius: 20px;
          }
          .grp-1>.content{
            display: flex;
            width: 75%;
            margin:1rem 1rem;
            align-items: center;
            justify-content: space-between;
          }
          .cal-logo{
            font-size: 32px;
            background-color: rgb(81, 199, 235);
            color:white;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
          }
          .content>.cont{
            display: flex;
            flex-direction: column;
          }
          .cont>.cont-heading{
            font-family: 'Nunito Sans';
            font-size: 22px;
            font-weight: 700;
            color:rgba(89, 89, 89, 1);
          }
          .cont>.cont-subheading{
            font-family: 'Nunito Sans';
            font-size: 20px;
            color:rgba(84, 85, 103, 1);
          }
          
          .grp-2{
            position: absolute;
            background-color: rgb(255, 255, 255,0.9);
            width:310px;
            height:80px;
            top:52%;
            right:-2%;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .grp-2>.content{
            display: flex;
            width: 90%;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
          }
          .mail-logo{
            font-size: 30px;
            background-color: rgba(248, 140, 61, 1);
            color:white;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
          }
          
          .grp-2>span{
            position: absolute;
            right:6%;
            top:12%;
            font-size: 20px;
            color:rgba(78, 227, 129, 1);
          }
          
          .grp-3{
            position: absolute;
            top:68%;
            left:-4%;
            display: flex;
            flex-direction: column;
            gap:12px;
            width:370px;
            height:167px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 20px;
          }
          .photo{
            position: relative;
          }
          .photo>img{
            width: 56px;
            height: 56px;
            border-radius:50%;
          }
          .photo>.dot{
            height: 15px;
            width:15px;
            background-color: rgba(46, 187, 94, 1);
            position: absolute;
            bottom:15%;
            right:0;
            border-radius: 50%;
          }
          .grp-3>.content{
            display: flex;
            justify-content: center;
            align-items: center;
            margin:auto;
            margin-top:8%;
            gap:30px;
          }
          .grp-3>.content>.cont{
            gap:6px;
          }
          .join{
            width: 160px;
            height:40px;
            background-color: rgba(216, 88, 126, 1);
            color:white;
            border-radius: 32px;
            font-size: 18px;
            margin-bottom:5%;
            margin-left:32%;
            display:flex;
            justify-content: center;
            align-items: center;
          }
          
          .bar-chart{
            width:60px;
            height: 60px;
            position: absolute;
            right:4%;
            top:25%;
            background-color: rgba(242, 84, 113, 1);
            border-radius: 10px;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          .bar-chart>span{
            background-color: white;
            color:rgba(242, 84, 113, 1);
            font-size: 40px;
            border-radius: 10px;
            display: flex;
            width:70%;
            height: 70%;
            justify-content: center;
            align-items: center;  
          }
        `}
      </style>
      <div className="header-bg">
        <div className='navbar'>
          <div className='logo'>
            <span>LearnHub</span><div className='polygon'></div>
          </div>
          <div className='links'>
            <span>Home</span>
            <span>Careers</span>
            <span>Blog</span>
            <span>About Us</span>
            <span className='nav-btn login'>Login</span>
            <span className='nav-btn sign'>Sign Up</span>
          </div>
        </div>
        <div className='header-section'>
          <div className='section-one'>
            <p id="heading"><span>Studying</span> Online is now much easier</p>
            <p id="sub-heading">Skilline is an interesting platform that will teach you in more an interactive way</p>
            <div className='inline-btns'>
              <div id='join-btn'>Join for free</div>
              <div className='play-btn'><div></div></div>
              <p>Watch how it works</p>
            </div>
          </div>
          <div className='header-pic'>
            <div className='header-image'>
              <img src={headerImg} />
            </div>
            <div className="grp-1">
              <div className="content">
                <span className='cal-logo'><FaRegCalendarAlt /></span>
                <div className='cont'>
                  <span className='cont-heading'>250k</span>
                  <span className='cont-subheading'>Assisted Student</span>
                </div>
              </div>
            </div>
            <div className="grp-2">
              <div className="content">
                <span className='mail-logo'><IoMdMail /></span>
                <div className='cont'>
                  <span className='cont-heading'>Congratulation</span>
                  <span className='cont-subheading'>Your admission completed</span>
                </div>
              </div>
              <span><RiCheckboxCircleFill /></span>
            </div>

            <div className="grp-3">
              <div className="content">
                <div className='photo'>
                  <img src={profileImg}/>
                  <div className='dot'></div>
                </div>
                <div className='cont'>
                  <span className='cont-heading'>User Experience Class</span>
                  <span className='cont-subheading'>Today at 12.00 PM</span>
                </div>
                
              </div>
              <div className='join'><span>Join Now</span></div>
            </div>
            <div className='bar-chart'><span><MdOutlineBarChart /></span></div>
          </div>

        </div>
      </div>
      
    </>

  )
}

export default Header
