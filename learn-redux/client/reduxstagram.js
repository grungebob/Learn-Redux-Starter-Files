// let's go!
// import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import React from 'react';


// import { render } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';

import { render } from 'react-dom';


// Import css

import css from './styles/style.styl';

// Impport Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


//import react router deps
// import { Router, Route, IndexRoute, browserHistory } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path = "/" component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

)
 
render(router, document.getElementById('root'));

 