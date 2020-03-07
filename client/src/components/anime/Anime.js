import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import AnimeItem from './AnimeItem';
import AnimeForm from './AnimeForm';

import AnimeContext from '../../context/anime/animeContext';

const Anime = ({ quantity }) => {
    const animeContext = useContext(AnimeContext);

    const { anime, filtered } = animeContext;

    return (
        <Collapsible trigger={`Anime (${quantity})`}>
            <AnimeForm />
            <div className='shows-grid-container'>
                <h2 className='watched-list-title'>Name</h2>
                <h2 className='watched-list-title'>Season</h2>
                <h2 className='watched-list-title'>Episode</h2>
                <span className='watched-list-title'></span>

                {anime !== null && anime.length === 0 ? (
                    <h3>Please add a Anime</h3>
                ) : filtered !== null ? (
                    filtered.map(animeItem => (
                        <AnimeItem anime={animeItem} key={uuidv4()} />
                    ))
                ) : (
                    anime.map(animeItem => (
                        <AnimeItem anime={animeItem} key={uuidv4()} />
                    ))
                )}
            </div>
        </Collapsible>
    );
};

Anime.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default Anime;
