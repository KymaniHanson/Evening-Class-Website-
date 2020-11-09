import React from 'react';
// import {useState} from 'react';

import useHover from '../Hooks';

import './Card.css';

function POBCard({tagNum, coverImagePath, coverTitle, price, currency, features, recomendedStatus, examLogoPath}){

    const [hoverRef, isHovered] = useHover();

    var containerStyle;
    var coverImageStyle; 
    var learnMoreStyle;
    var priceTagStyle;
    var coverImageTitle;
    var classInstructorStyle;
    const tempProfileImg = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Alexandria_Ocasio-Cortez_Official_Portrait.jpg"


    if(isHovered){
        containerStyle = {
            transform: 'scale(1.1)',
            boxShadow: '0px 0px 15px 0px #60696B'
        }

        coverImageStyle = {
            transform: 'scale(0.65) translate(0, -120px)',
            borderRadius: '19px',
            boxShadow: '0px 0px 15px 0px #60696B'
        }

        coverImageTitle = {
            transform: 'scale(0.65) translate(0, -120px)',
            borderRadius: '19px',
        }

        learnMoreStyle = {
            display: 'block'
        }

        priceTagStyle = {
            boxShadow: '-2px 0px 15px 0px #60696B'
        }

        classInstructorStyle = {
            display: 'block',
            opacity: '1'
        }

        console.log("Hovered")
    }

return(
    <div ref={hoverRef} style={containerStyle} className="pobCardContainer">
       <img src={ coverImagePath } alt="" style={coverImageStyle} className="courseCover"/>
        <span style={coverImageTitle} className="coverTitle">{ coverTitle }</span>
        <div className="tagNum">{ tagNum }</div>
        <div style={priceTagStyle} className="priceTag">
        <p className="price">{ price }</p>
            <p className="price-currency">{ currency }</p>
        </div>
        <div className="classInstructor">
            <img src={tempProfileImg} alt='' style={classInstructorStyle} className="professorPhoto"/>
            <span style={classInstructorStyle} className="classInstructorName">Rafike Miller</span>
        </div>
        <button style={learnMoreStyle} className="leanMoreButton">Learn More</button>
        <div className="courseFeatures">
                {
                    features.map(item => (
                        <div key={item.id} className="feature">
                            <img  src={item.iconPath} alt="" className="featureIcon"/>
                            <span className="featureLabel">{ item.label }</span>
                        </div>
                    ))
                } 
        </div>
        <div className="bottomVectorLeft">
            {/* <span className="recomendedText">100% Recommended</span> */}
            {/* <img src={process.env.PUBLIC_URL + "assets/CXC_Vector.svg"} alt="" className="cxcLogo"/> */}
        </div>
        <div className="bottomVectorRight">
            <span className="recomendedText"> { recomendedStatus + " Recommended"} </span>
            <img src={ examLogoPath } alt="" className="cxcLogo"/>
        </div> 
    </div>
);
}

export default POBCard;