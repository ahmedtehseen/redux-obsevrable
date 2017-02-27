import {fetchPostsFulfilled, fetchPostFulfilled, status} from '../actions/index';
import { ajax } from 'rxjs/observable/dom/ajax';


const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const API_KEY = '?key=ahmedpisces7@gmail.com';

export const fetchPostsEpic = action$ =>
  action$.ofType('FETCH_POSTS')
    .mergeMap(action =>
      ajax.getJSON(`${ROOT_URL}/posts${API_KEY}`)
        .map(response => fetchPostsFulfilled(response))
    );


export const fetchPostEpic = action$ =>
	action$.ofType('FETCH_POST')
		.mergeMap(action => 
			ajax.getJSON(`${ROOT_URL}/posts/${action.payload}${API_KEY}`)
				.map(response => fetchPostFulfilled(response))
		);


export const createPostEpic = action$ => 
	action$.ofType('CREATE_POST')
		.mergeMap(action => 
			ajax.post(`${ROOT_URL}/posts${API_KEY}`, action.payload)
				.map(res => status(res.status))
		);


export const deletePostEpic = action$ => 
	action$.ofType('DELETE_POST')
		.mergeMap(action =>
			ajax.delete(`${ROOT_URL}/posts/${action.payload}${API_KEY}`)
				.map(res => status(res.status))
		);