import React, { useContext } from 'react';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import AnimeItem from './AnimeItem';

import AnimeContext from '../../context/anime/animeContext';

const Anime = () => {
    const animeContext = useContext(AnimeContext);

    const { anime } = animeContext;

    return (
        <Collapsible trigger={`Anime (${anime.length})`}>
            <div className='shows-grid-container'>
                <span>Name</span>
                <span>Season</span>
                <span>Episode</span>
                <span></span>

                {anime.map(animeItem => (
                    <AnimeItem anime={animeItem} key={uuidv4()} />
                ))}
            </div>
        </Collapsible>
    );
};

export default Anime;
