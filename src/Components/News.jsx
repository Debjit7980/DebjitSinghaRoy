import React from 'react'
import img1 from './../assets/Images/newsImg1.png';
import img2 from './../assets/Images/newsImg2.png';
import img3 from './../assets/Images/newsImg3.png';
import img4 from './../assets/Images/newsImg4.png';

function News() {

    return (
        <>
            <style>
                {`
                .news{
                    position: absolute;
                    top:7000px;
                    width: 100%;
                  }
                  .news-cont{
                    width:90%;
                    margin:auto;
                    display: flex;
                    flex-direction: column;
                  }
                  .news-article{
                    padding-top:2rem;
                    display: flex;
                    font-family: "poppins";
                    gap:22px;
                  }
                  .news-desc-cont{
                    display: flex;
                    gap:25px;
                  }
                  .news-desc-image{
                    width:280px;
                    height:140px;
                    border-radius: 20px;
                    opacity: 0.9;
                    position: relative;
                  }
                  .news-desc-image>span{
                    position: absolute;
                    bottom:5px;
                    right:10px;
                    font-size: 13px;
                    border-radius: 80px;
                    background-color: #FFA18A;
                    color:#252641;
                    padding:2px 5px;
                  }
                  
                  .news-desc-image>img{
                    width:100%;
                    height:100%;
                    border-radius: 20px;
                    object-fit: cover;
                  }
                  .news-desc{
                    display: flex;
                    flex-direction: column;
                    gap:12px;
                  }
                  .news-desc>.heading{
                    color:#252641;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 30.6px;
                  }
                  .news-desc>.subHeading{
                    color:#696984;
                    font-size: 16px;
                    line-height: 28px;
                    font-weight: 400;
                    letter-spacing: 2%;
                  }
            `}
            </style>
            <div className='news'>
                <div className='news-cont'>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Nunito Sans" }}>
                        <span style={{ width: "478px", height: "65px", fontSize: "36px", fontWeight: "700", color: "#2F327D" }}>Lastest News and Resources</span>
                        <p style={{ width: "706px", height: "43px", fontSize: "24px", color: "#696984" }}>See the developments that have occurred to Skillines in the world</p>
                    </div>
                    <div className='news-article'>
                        <div style={{ width: "640px", height: "690px", display: "flex", flexDirection: "column", gap: "22px" }}>
                            <div style={{ width: "580px", height: "320px", borderRadius: "20px" }}>
                                <img src={img1} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                            </div>
                            <span style={{ width: "130px", height: "40px", borderRadius: "20px", backgroundColor: "#FFA18A", fontSize: "20px", color: "#252641", fontWeight: "500", display: "flex", justifyContent: "center", alignItems: "center" }}>News</span>
                            <span style={{ width: "609px", height: "94px", fontSize: "26px", color: "#252641", fontWeight: "500" }}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</span>
                            <span style={{ width: "609px", height: "72px", fontSize: "20px", color: "#696984", fontWeight: "400", letterSpacing: "2%" }}> Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
                            <a href="#" style={{ fontSize: "20px", color: "#696984", fontWeight: "400" }}>Read More</a>
                        </div>
                        <div style={{ width: "797px", display: "flex", flexDirection: "column", gap: "3rem" }}>
                            <div className='news-desc-cont'>
                                <div className='news-desc-image'>
                                    <img src={img2} />
                                    <span>PRESS RELEASE</span>
                                </div>
                                <div className='news-desc'>
                                    <span className="heading">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</span>
                                    <span className="subHeading">Class Technologies Inc., the company that created Class,...</span>
                                </div>

                            </div>
                            <div className='news-desc-cont'>
                                <div className='news-desc-image'>
                                    <img src={img3} />
                                    <span>NEWS</span>
                                </div>
                                <div className='news-desc'>
                                    <span className="heading">Zoom’s earliest investors are betting millions on a better Zoom for schools</span>
                                    <span className="subHeading">Zoom was never created to be a consumer product. Nonetheless, the...</span>
                                </div>

                            </div>
                            <div className='news-desc-cont'>
                                <div className='news-desc-image'>
                                    <img src={img4} />
                                    <span>NEWS</span>
                                </div>

                                <div className='news-desc'>
                                    <span className="heading">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</span>
                                    <span className="subHeading">This year, investors have reaped big financial returns from betting on Zoom...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
