import { IStore } from '@store';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RaceForm } from './components/RaceForm';
import { RaceHeader } from './components/RaceHeader';

const Race: React.FC = () => {
    const { ID } = useParams<any>();
    const { races } = useSelector((store: IStore) => store.races);

    const data = races.find((race) => race.ID === parseInt(ID));

    if (!data) {
        return <Redirect to="/" />
    }

    return (
        <div>

            <Helmet>
                <title>Interview Application | Race Details</title>
            </Helmet>
            
            <RaceHeader active={data.active} title={data.title} />

            <RaceForm participants={data.participants} />

        </div>
    );
}

export default Race;
