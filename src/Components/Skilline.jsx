import React from 'react'
import img1 from './../assets/Images/skillimg1.png';
import img2 from './../assets/Images/skillimg2.png';
import img3 from './../assets/Images/skillimg3.jpg';


function Skilline() {
  return (
    <>
        <style>
            {`
                .skilline-container{
                   position:absolute;
                   top:2400px;
                   width:100%;    
                   display:flex;
                   flex-direction:column;
                }
                .skilline-heading{
                    width:100%;
                    margin:auto;
                    display:flex;
                    flex-direction:column;
                    justify-content:centre;
                    align-items:center;
                }
                .skilline-heading>#heading{
                    width:371px;
                    font-size:44px;
                    font-family:'poppins';
                    font-weight:600;
                    color:rgba(47, 50, 125, 1)
                }
                .skilline-heading>#heading>span{
                    color:rgba(255, 122, 89, 1);
                }
                .skilline-heading>span{
                    width:1101px;
                    line-height:43.2px;
                    font-size:24px;
                    font-family:'poppins';
                    font-weight:400;
                    color: rgba(105, 105, 132, 1);
                    text-align:center;
                }
                .skilline-images{
                    width:90%;
                    margin:auto;
                    padding-top:6rem;
                    display:flex;
                    justify-content:space-between;
                    
                }
                .skilline-images>.image-1{
                    width:580px;
                    height:400px;
                    border-radius:20px;
                    position:relative;
                }
                .image-1>img{
                    width:100%;
                    height:100%;
                    border-radius:20px;
                }
                .image-1>.faded{
                    position:absolute;
                    top:0;
                    left:0;
                    width:580px;
                    height:400px;
                    border-radius:20px;
                    background: rgba(23, 27, 65, 0.45);

                }
                .image-1>.desc{
                    position:absolute;
                    top:35%;
                    left:26%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    font-family:'poppins';
                    color:white;
                }
                .image-1>.desc>.desc-1{
                    font-size:32px;
                    font-weight:600;
                }
                .image-1>.desc>.desc-2{
                    width:283px;
                    height:80px;
                    margin-top:1rem;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:22px;
                    font-weight:500;
                    border:1px solid white;
                    border-radius:80px;
                    cursor:pointer;
                }
                .image-1>.desc>.desc-2:hover{
                    background: rgba(35, 189, 238, 0.9);
                    border:1px solid rgba(35, 189, 238, 0.9);
                    transition:ease-in 0.3s;
                }
                .skilline-article{
                    width:100%;
                    height:512px;
                    margin:auto;
                    display:flex;
                    padding-top:7rem;
                    justify-content:space-evenly;
                    font-family:'poppins';
                }
                .skilline-article-desc{
                    display:flex;
                    flex-direction:column;
                    width:50%;
                    position:relative;
                }
                .elipse-2{
                    position:absolute;
                    width:30px;
                    height:30px;
                    border-radius:50%;
                    background: rgba(220, 226, 238, 1);
                    top:55%;
                    right:0px;
                }
                .skilline-article-desc>.heading{
                    font-size:36px;
                    font-weight:500;
                    line-height:57.6px;
                    color:rgba(47, 50, 125, 1);
                    position:relative;
                }
                .elipse{
                    position:absolute;
                    width:73px;
                    height:73px;
                    border-radius:50%;
                    background: rgba(220, 226, 238, 1);
                    top:-12px;
                    left:-30px;
                    z-index:-1;
                }
                .skilline-article-desc>.heading>span{
                    color: rgba(255, 122, 89, 1);
                }
                .skilline-article-desc>span{
                    font-size:24px;
                    color:rgba(105, 105, 132, 1);
                    line-height:43.2px;
                    font-weight:400;
                }
                .skilline-article-desc>a{
                    font-size:22px;
                    color:rgba(105, 105, 132, 1);
                    line-height:39.6px;
                    font-weight:400;
                    margin-top:2.2rem;
                }
                .skilline-article-image{
                    width:42%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .skilline-article-image>.image-cont{
                    width:550px;
                    height:371px;
                    position:relative;
                }
                .skilline-article-image>.image-cont>img{
                    width:100%;
                    height:100%;
                    z-index:1;
                    
                }
                .image-cont>img{
                    position:relative;
                }
                .image-cont::after{
                    content:' ';
                    position: absolute;
                    height:231px;
                    width:231px;
                    background: rgba(47, 50, 125, 1);
                    border-radius:20px;
                    right:-20px;
                    bottom:-20px;
                }
                .image-cont::before{
                    content:' ';
                    position: absolute;
                    height:130px;
                    width:130px;
                    background: rgba(35, 189, 238, 1);
                    border-radius:20px;
                    left:-20px;
                    top:-20px;
                   
                }
               
            `}
        </style>
        <div className='skilline-container'>
            <div className='skilline-heading'>
                <p id="heading">What is <span>Skilline ?</span></p>
                <span>Skilline is a platform that allows educators to create online classes 
                    whereby they can store the course materials online; manage assignments, quizzes and exams; 
                    monitor due dates; grade results and provide students with feedback all in one place.
                </span>
            </div>
            <div className="skilline-images">
                <div className='image-1'>
                    <img src={img1} />
                    <div className='faded'></div>
                    <div className='desc'>
                        <span className='desc-1'>FOR INSTRUCTORS</span>
                        <span className='desc-2'>Start a class today</span>
                    </div>
                </div>
                <div className='image-1'>
                    <img src={img2} />
                    <div className='faded'></div>
                    <div className='desc'>
                        <span className='desc-1'>FOR STUDENTS</span>
                        <span className='desc-2'>Enter access code</span>
                    </div>
                </div>
            </div>
            <div className='skilline-article'>
                <div className='skilline-article-desc'>
                    <p className='heading'>Everything you can do in a physical classroom, <span>you can do with Skilline</span><div className='elipse'></div></p>
                    <span>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</span>
                    <a href="#">Learn More</a>
                    <div className='elipse-2'></div>
                </div>
                <div className='skilline-article-image'>
                    <div className='image-cont'>
                        <img src={img3}/>                                                                              
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Skilline
