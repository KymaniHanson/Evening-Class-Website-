import React from 'react';

import './CourseCards.css';

import POBCard from './Card.jsx';
import courseContent from './courseData.jsx';

function CourseCards(){

 return(
     <section className="courseCardsSecion">

         <span id="topCourses">Our Courses</span>

        <div id="cardLayout">
            {
                courseContent.map( (item) => (
                    <POBCard 
                    id="courseCard"
                    key={item.id}
                    tagNum={ item.id } 
                    coverImagePath= { item.imagePath } 
                    coverTitle= { item.coverTitle } 
                    price = { item.price }
                    currency = { item.currency }
                    features = {item.features}
                    examLogoPath = { item.examLogoPath}
                    recomendedStatus = { item.recommendedStatus }
                    />
                )
                )
            }
        </div>
     </section>
 );
}

export default CourseCards;