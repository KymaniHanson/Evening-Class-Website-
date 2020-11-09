import React from 'react';

import './Freebies.css';

function Freebies() {
return(
   <section className="freebiesSection">
       <div className="freebiesContainer">
        <div className="freebiesHeader">
            <span className="freeSpan">Free</span>
                <span className="extraSpan">Extra Classes</span>
        </div>
        <div className="detailsContainer">
                <div className="quoteHeaders">
                    <p className="quoteHeader1">“Earn A Chance To Get Free Lessons And Indepth 
                    Explanation Of Coursework and Assignments</p>
                    <p className="quoteHeader2">Learn from an exceptional teacher. He goes the extra mile for each student... 
                    No one is left behind!”</p>
                </div>
                <button id="getStartedButton">Get Started</button>
        </div>
       </div>
   </section>
)
}

export default Freebies;