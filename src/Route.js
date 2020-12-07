import React from 'react';
import { BrowerRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';

const RouteConfig = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductItem} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouteConfig;