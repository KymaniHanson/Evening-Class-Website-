import React from 'react';

import './POBCard.css';

function POBCard(){
return(
    <div className="pobCardContainer">
        <img src={process.env.PUBLIC_URL + "assets/POB_Cover.svg"} alt="" className="courseCover"/>
        <span className="coverTitle">Principles <br/> of <br/> Business</span>
        <div className="tagNum">2</div>
        <div className="priceTag">
            <p className="price">$7,000</p>
            <p className="price-currency">jmd</p>
        </div>
        <div className="courseFeatures">
            <div className="feature">
                <img src={process.env.PUBLIC_URL + "assets/book_icon.svg"} alt="" className="featureIcon"/>
                <span className="featureLabel">Onine & face-to-face</span>
            </div> 
            <div className="feature">
                <img src={process.env.PUBLIC_URL + "assets/time_icon.svg"} alt="" className="featureIcon"/>
                <span className="featureLabel">Free extra class</span>
            </div> 
            <div className="feature">
                <img src={process.env.PUBLIC_URL + "assets/certificate_icon.svg"} alt="" className="featureIcon"/>
                <span className="featureLabel">High pass rate</span>
            </div> 
        </div>
        <div className="bottomVectorLeft">
            {/* <span className="recomendedText">100% Recommended</span> */}
            {/* <img src={process.env.PUBLIC_URL + "assets/CXC_Vector.svg"} alt="" className="cxcLogo"/> */}
        </div>
        <div className="bottomVectorRight">
            <span className="recomendedText">100% Recommended</span>
            <img src={process.env.PUBLIC_URL + "assets/CXC_Vector.svg"} alt="" className="cxcLogo"/>
        </div>
    </div>
);
}

export default POBCard;