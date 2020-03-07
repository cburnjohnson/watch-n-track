import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Alert from './components/layout/Alerts';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import MovieState from './context/movie/MovieState';
import TvShowState from './context/tvshow/TvShowState';
import AnimeState from './context/anime/AnimeState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    return (
        <AuthState>
            <MovieState>
                <TvShowState>
                    <AnimeState>
                        <AlertState>
                            <Router>
                                <Navbar />
                                <Alerts />
                                <Switch>
                                    <PrivateRoute
                                        exact
                                        path='/'
                                        component={Home}
                                    />
                                    <Route
                                        exact
                                        path='/register'
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path='/login'
                                        component={Login}
                                    />
                                </Switch>
                            </Router>
                        </AlertState>
                    </AnimeState>
                </TvShowState>
            </MovieState>
        </AuthState>
    );
}

export default App;
