// let's go!
import React from 'react';

import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}>
                <Route path="/view/:postId" component={Single}></Route>
            </IndexRoute>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));

