import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import TvShow from './TvShow';
import TvShowForm from './TvShowForm';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShows = ({ quantity }) => {
    const tvShowContext = useContext(TvShowContext);

    const { tvShows, filtered } = tvShowContext;

    return (
        <Collapsible trigger={`TV Shows (${quantity})`}>
            <TvShowForm />
            <div className="shows-grid-container">
                <span>Name</span>
                <span>Season</span>
                <span>Episode</span>
                <span></span>

                {filtered !== null
                    ? filtered.map(filteredTvShow => (
                          <TvShow tvShow={filteredTvShow} key={uuidv4()} />
                      ))
                    : tvShows.map(tvShow => (
                          <TvShow tvShow={tvShow} key={uuidv4()} />
                      ))}
            </div>
        </Collapsible>
    );
};

TvShows.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default TvShows;
