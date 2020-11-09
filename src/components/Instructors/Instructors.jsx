import React from 'react';

import './Instructors.css';

import useHover from '../Hooks';



function Instructors(){

const [hoverRef, isHovered] = useHover();  

    var nameStyle;

    if(isHovered){
       nameStyle = {
            backgroundColor : '#92268e'
        } 
        console.log('Hivered');
    }

return(
<section className="instructorsContainer">
    <div className="instructorsHeaderContainer">
        <span className="instructorsHeader">Mentors & Instructors</span>
        <div className="separator"></div>
    </div>

    <div className="profileContainer">
        <div ref={hoverRef} className="profileInstuctor">
            <img className="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Alexandria_Ocasio-Cortez_Official_Portrait.jpg" alt=""/>
            <span style={nameStyle} className="instructorName">Alexandria</span>
        </div>      
    </div>
</section>
);
}

export default Instructors;