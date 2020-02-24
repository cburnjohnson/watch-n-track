import React, { useContext } from 'react';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import TvShow from './TvShow';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShows = () => {
    const tvShowContext = useContext(TvShowContext);

    const { tvShows } = tvShowContext;

    return (
        <Collapsible trigger={`TV Shows (${tvShows.length})`}>
            <ul>
                {tvShows.map(tvShow => (
                    <TvShow tvShow={tvShow} key={uuidv4()} />
                ))}
            </ul>
        </Collapsible>
    );
};

export default TvShows;
