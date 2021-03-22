import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Features from './pages/Features';


const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>               
                <Route path="/features"  component={Features}></Route>               
        	</Switch>
        </BrowserRouter>
    )
}

export default Routes;