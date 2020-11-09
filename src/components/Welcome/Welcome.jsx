import React from "react";

import './welcome.css';

function Welcome() {

    //const videoSource = "../../../public/assets/production ID_5198161.mp4";
    const videoSource1 = "https://static.videezy.com/system/resources/previews/000/004/649/original/Call_Out_Text_-_Ratings_Sliders.mp4";
  return (
   <section className="welcomeSection">
      <div className="welcomeContainer">
        <video autoPlay="autoplay" loop="loop" muted className="welcomeVideo">
            <source src= {videoSource1} type="video/mp4" />
        </video>
        <div className="welcomeOverlay">
            <div className="welcomeHeaderContainer">
                <h1 className="welcomeHeader">
                        Portland High Evening Institute offers a state of the art learning 
                        for everyone who seek to master Business Studies
                    </h1>

                        <h2 className="welcomeHeader2">
                            Let us help you accelerate your journey to academic success
                        </h2>
            </div>
            <div className="registerSeatContainer">
                <span className="regisTerSeatLabel">Register for your spot today</span>
                <button className="reserveSeatButton">Reserve Seat</button>
            </div>
        </div>
      </div>
   </section>
  );
}

export default Welcome;
