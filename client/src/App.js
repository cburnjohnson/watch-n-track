import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';

import MovieState from './context/movie/MovieState';

function App() {
    return (
        <MovieState>
            <Router>
                <>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </>
            </Router>
        </MovieState>
    );
}

export default App;
