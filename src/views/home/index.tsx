import React from 'react';
import { Helmet } from 'react-helmet';
import { Races } from './components/Races';

const Home: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Interview Application | Home</title>
            </Helmet>

            <Races />
        </div>
    );
}

export default Home;