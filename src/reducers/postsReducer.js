import {NULL_POST} from '../actions/index';

const INITIAL_STATE = {all: null, post: null};

export default function(state = INITIAL_STATE, action){
	switch (action.type) {
		case NULL_POST:
			return {...state, post: null}
		case 'FETCH_POSTS_FULFILLED':
			return {...state, all: action.payload};
		case 'FETCH_POST_FULFILLED':
			return {...state, post: action.payload};
		case "STATUS":
			return {...state, status: action.payload}
		default:
			return state;
	}
}
