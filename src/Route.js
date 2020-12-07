import React from 'react';
import { BrowerRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Home from './Components/Home';
import About from './Components/About';

const RouteConfig = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouteConfig;