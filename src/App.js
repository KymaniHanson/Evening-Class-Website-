import React from 'react';

import {Navbar, Welcome, Freebies, ClassDetails, Instructors, CourseCards} from './components';

class App extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Welcome/>
                <Freebies/>
                <ClassDetails/>
                <Instructors/>
                <CourseCards/>
            </div>
        )
    }
}

export default App;