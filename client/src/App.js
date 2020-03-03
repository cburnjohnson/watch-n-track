import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import AuthState from './context/auth/AuthState';
import MovieState from './context/movie/MovieState';
import TvShowState from './context/tvshow/TvShowState';
import AnimeState from './context/anime/AnimeState';

function App() {
    return (
        <AuthState>
            <MovieState>
                <TvShowState>
                    <AnimeState>
                        <Router>
                            <Navbar />
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route
                                    exact
                                    path='/register'
                                    component={Register}
                                />
                                <Route exact path='/login' component={Login} />
                            </Switch>
                        </Router>
                    </AnimeState>
                </TvShowState>
            </MovieState>
        </AuthState>
    );
}

export default App;
