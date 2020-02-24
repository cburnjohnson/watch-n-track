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
            <div className='tvshows-grid-container'>
                <span>Name</span>
                <span>Season</span>
                <span>Episode</span>
                <span></span>

                {tvShows.map(tvShow => (
                    <TvShow tvShow={tvShow} key={uuidv4()} />
                ))}
            </div>
        </Collapsible>
    );
};

export default TvShows;
