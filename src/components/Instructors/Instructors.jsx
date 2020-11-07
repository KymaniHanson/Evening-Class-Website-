import React from 'react';

import './Instructors.css';

function Instructors(){
return(
<section className="instructorsContainer">
    <div className="instructorsHeaderContainer">
        <span className="instructorsHeader">Mentors & Instructors</span>
        <div className="separator"></div>
    </div>

    <div className="profileContainer">
    <div className="profileInstuctor"></div>
    <img className="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Alexandria_Ocasio-Cortez_Official_Portrait.jpg" alt=""/>
    <span className="instructorName">Alexandria</span>
    </div>
</section>
);
}

export default Instructors;