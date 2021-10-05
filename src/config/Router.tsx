import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Views
import TemplateDefault from 'templates/default';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TemplateDefault} />
            </Switch>
        </BrowserRouter>
    );
}

export { Router }
