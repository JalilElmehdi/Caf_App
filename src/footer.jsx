import React from 'react';

export default function Footer() {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3 style={{ color: "black" }}>Caf <a href="#home">
                        <img src={require("./line (3).png")} width="50px" height="30px" alt="images"
                            style={{ marginLeft: "0px", padding: "0px" }} />
                        <img src={require(`./images/CAF-logo-2009.png`)} width="60px" alt="CAF logo" />
                    </a></h3>
                    <p>Feel Free To Follow Us On Our Social Media Handlers All
                        The Links Are Given Below.
                    </p>
                    <div className="share">
                        <a href="https://github.com/JalilElmehdi"><i className='bx bxl-facebook'></i></a>
                        <a href="https://github.com/JalilElmehdi"><i className='bx bxl-instagram'></i></a>
                        <a href="https://github.com/JalilElmehdi"><i className='bx bxl-twitter'></i></a>
                        <a href="https://github.com/JalilElmehdi"><i className='bx bxl-youtube'></i></a>
                    </div>
                </div>
                <div className="box">
                    <h3>More Information</h3>
                    <a href="https://github.com/JalilElmehdi" className="links"><i className='bx bxs-phone'></i>+20 21191919</a>
                    <a href="https://github.com/JalilElmehdi" className="links"><i className='bx bxs-envelope'></i>cafonline@caf.com</a>
                    <a href="https://github.com/JalilElmehdi" className="links"><i className='bx bxs-location-plus'></i>Egypte, Cairo</a>
                </div>
                <div className="box">
                    <h3> Links</h3>
                    <a href="https://github.com/JalilElmehdi" className="links"><i className='bx bxs-home'></i>Home</a>
                    <a href="https://github.com/JalilElmehdi" className="links"><i className='bx bxs-quote-alt-left'></i>About</a>
                    <a href="https://github.com/JalilElmehdi" className="links"><i className='bx bxs-calendar-exclamation'></i>Match</a>
                    {/* <a href="#" className="links"><i className='bx bxs-group'></i>Groups</a> */}
                </div>
                <div className="box">
                    <h3>Globale Sponsor</h3>
                    {/* <p>Subscribe For Latest Updates</p> */}
                    <img src={require("./images/mastercard-6-logo-png-transparent.png")} width="55px"
                        className="img" alt="mastercard" />
                    <img src={require("./images/totals.png")} width="55px"
                        className="img" alt="totalsE" />
                    <img src={require("./images/logo-Puma.jpg")} width="55px"
                        className="img" alt="puma image" />
                    <img src={require("./images/rexonas.jpg")} width="55px"
                        className="img" alt="rexona image" />
                </div>
            </div>
            <div className="credit">
                Created By <span>Jalil El Mehdi</span> | All Rights Reserved
            </div>
        </section>
    );
}
