import React, { useContext } from 'react';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import AnimeItem from './AnimeItem';
import AnimeForm from './AnimeForm';

import AnimeContext from '../../context/anime/animeContext';

const Anime = () => {
    const animeContext = useContext(AnimeContext);

    const { anime, filtered } = animeContext;

    return (
        <Collapsible trigger={`Anime (${anime.length})`}>
            <AnimeForm />
            <div className="shows-grid-container">
                <span>Name</span>
                <span>Season</span>
                <span>Episode</span>
                <span></span>

                {filtered !== null
                    ? filtered.map(animeItem => (
                          <AnimeItem anime={animeItem} key={uuidv4()} />
                      ))
                    : anime.map(animeItem => (
                          <AnimeItem anime={animeItem} key={uuidv4()} />
                      ))}
            </div>
        </Collapsible>
    );
};

export default Anime;
