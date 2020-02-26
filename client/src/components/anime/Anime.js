import React, { useContext } from 'react';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';

import AnimeContext from '../../context/anime/animeContext';

const Anime = () => {
    const animeContext = useContext(AnimeContext);

    const { anime } = animeContext;

    return (
        <Collapsible trigger={`Anime (${anime.length})`}>
            <div className=''>anime</div>
        </Collapsible>
    );
};

export default Anime;
