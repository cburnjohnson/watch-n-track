import React from 'react';

const TvShow = ({ tvShow }) => {
    const { name } = tvShow;

    return <div>{name}</div>;
};

export default TvShow;
