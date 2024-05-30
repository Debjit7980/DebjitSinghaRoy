import React from 'react'

function Footer() {
    return (
        <>
            <style>
                {`
                .footer-cont{
                    position: absolute;
                    top:7920px;
                    width: 100%;
                    background-color: #252641;
                    padding:4rem 0 1rem 0;
                    font-family: "poppins";
                  }
                  .footer{
                    background-color: transparent;
                    border:2px solid #26C1F2;
                    z-index: -1;
                    width: 53px;
                    height: 53px;
                    left:0;
                    top:-10px;
                    border-radius:5px;
                  }
            `}
            </style>

            <div className='footer-cont'>
                <div style={{ width: "40%", margin: "auto", display: "flex", flexDirection: "column", gap: "55px", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", width: "340px", height: "60px" }}>
                        <div style={{ borderRight: "1px solid #626381", paddingRight: "20px" }}>
                            <span style={{ position: "relative", color: "white", fontSize: "22px", fontWeight: "700", letterSpacing: "4%", zIndex: "0" }}>LearnHub<div className='polygon footer'></div></span>

                        </div>
                        <div style={{ paddingLeft: "20px" }}>
                            <span style={{ color: "white", fontSize: "18px", fontWeight: "600", letterSpacing: "4%" }}>Virtual Class for Zoom</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                        <span style={{ fontSize: "18px", fontWeight: "500", color: "#B2B3CF" }}>Subscribe to get our Newsletter</span>
                        <div style={{ display: "flex", gap: "25px" }}>
                            <input type="email" placeholder='Your Email' style={{ paddingLeft: "20px", width: "250px", height: "40px", border: "1px solid #83839A", borderRadius: "80px", backgroundColor: "#252641" }} />
                            <span style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "60px", width: "140px", height: "46px", background: "linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)", color: "white", fontSize: "16px", fontWeight: "500" }}>Subscribe</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ color: "#B2B3CF", fontSize: "16px", fontWeight: "400", gap: "30px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <span style={{ borderRight: "1px solid #626381", paddingRight: "18px" }}>Careers</span>
                            <span style={{ borderRight: "1px solid #626381", paddingRight: "18px" }}>Privacy Policy</span>
                            <span >Terms & Conditions</span>
                        </div>
                        <span style={{ color: "#B2B3CF", display: "flex", marginLeft: "7rem" }}>&copy; 2021 Class Technologies Inc. </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
