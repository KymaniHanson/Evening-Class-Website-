import React from 'react';

import {Welcome, Freebies, ClassDetails, Instructors, CourseCards} from '../components';

function Home() {
    return (
        <div>
            <Welcome/>
            <Freebies/>
            <ClassDetails/>
            <Instructors/>
            <CourseCards/>
        </div>
    )
}

export default Home;