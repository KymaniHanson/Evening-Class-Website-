import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Navbar} from './components';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';

class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/about' component={About}/>
                        <Route path='/courses' component={Courses}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;