import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Views
import Home from 'views/home';
import Race from 'views/race';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/race/:ID" component={Race} />
            </Switch>
        </BrowserRouter>
    );
}

export { Router }
