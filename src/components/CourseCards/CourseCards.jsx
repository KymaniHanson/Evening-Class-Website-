import React from 'react';

import './CourseCards.css';
// import POACard from'./POA.jsx';
import POBCard from './POB.jsx';



function CourseCards(){
 return(
     <div className="courseCardsSecion">
         <POBCard className="courseCard"/>
         <POBCard className="courseCard"/>         
     </div>
 );
}

export default CourseCards;