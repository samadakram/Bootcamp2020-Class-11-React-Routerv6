import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductItem} />
                    <Route path="*" component={()=><h2>404 Not Found</h2>} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouteConfig;