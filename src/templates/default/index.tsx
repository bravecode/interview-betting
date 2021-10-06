import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'views/home';
import Race from 'views/race';
import { Navigation } from './components/Navigation';

const TemplateDefault: React.FC = () => {
    return (
        <div className="h-screen w-full flex gap-2.5 py-5">

            <Navigation />

            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/race/:ID" component={Race} />
                </Switch>
            </div>

        </div>
    );
}

export default TemplateDefault;