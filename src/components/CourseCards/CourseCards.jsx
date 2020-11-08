import React from 'react';

import './CourseCards.css';

import POBCard from './Card.jsx';
import courseContent from './courseData.jsx';

function CourseCards(){

 return(
     <div className="courseCardsSecion">
        {
            courseContent.map( (item) => (
                <POBCard 
                key={item.id}
                id={ item.id } 
                coverImagePath= { item.imagePath } 
                coverTitle= { item.coverTitle } 
                price = { item.price }
                currency = { item.currency }
                features = {item.features}
                className="courseCard"
                examLogoPath = { item.examLogoPath}
                recomendedStatus = { item.recommendedStatus }
                />
            )
            )
        }
     </div>
 );
}

export default CourseCards;