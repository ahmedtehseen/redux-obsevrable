import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import 'rxjs';

import rootReducer from './reducers/index';
import {rootEpic} from './epic/index';
import App from './components/App';
import Posts from './components/Posts';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware)
);

ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory} >
				<Route path='/' component={App}>
					<IndexRoute component={Posts} />
					<Route path='posts/new' component={PostNew} />
					<Route path='posts/:id' component={PostShow} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
);