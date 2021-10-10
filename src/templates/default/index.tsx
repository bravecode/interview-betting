import { IStore } from '@store';
import { getRacesRequest } from '@store/ducks/races/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Navigation } from './components/Navigation';

// Views
import Home from 'views/home';
import Race from 'views/race';
import { SpinnerIcon } from '@assets/icons/spinner.icon';

const TemplateDefault: React.FC = () => {
    const { pending } = useSelector((store: IStore) => store.races);
    const dispatch = useDispatch();

    useEffect(() => {
        // Note: Normally I would not call it in the default component but since this app is all about races...
        dispatch(getRacesRequest());
    }, [dispatch]);

    if (pending) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <div className="h-12 w-12 animate-spin text-indigo-500">
                    <SpinnerIcon />
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex gap-2.5">

            <Helmet>
                <title>Interview Application</title>
            </Helmet>

            <Navigation />

            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/races/:ID" component={Race} />
                </Switch>
            </div>

        </div>
    );
}

export default TemplateDefault;