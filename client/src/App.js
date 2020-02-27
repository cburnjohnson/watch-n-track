import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

import MovieState from './context/movie/MovieState';
import TvShowState from './context/tvshow/TvShowState';
import AnimeState from './context/anime/AnimeState';

function App() {
    return (
        <MovieState>
            <TvShowState>
                <AnimeState>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </Router>
                </AnimeState>
            </TvShowState>
        </MovieState>
    );
}

export default App;
