// import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const NULL_POST = 'NULL_POST';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
// const API_KEY = '?key=ahmedpisces7@gmail.com';

export function fetchPosts(){
	return {
		type: FETCH_POSTS,
	};
}

export function fetchPostsFulfilled(response){
	return{
		type: 'FETCH_POSTS_FULFILLED',
		payload: response,
	};
}

export function createPost(props){
	// const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
	return {
		type: CREATE_POST,
		payload: props
	}
}

export function fetchPost(id){
	return {
		type: FETCH_POST,
		payload: id
	}
}

export function fetchPostFulfilled(response){
	return{
		type: 'FETCH_POST_FULFILLED',
		payload: response
	}		
}

export function deletePost(id){
	return {
		type: DELETE_POST,
		payload: id
	}
}

export function nullPost(){
	return {
		type: NULL_POST
	}
}

export function status(response){
	return{
		type: 'STATUS',
		payload: response
	}
}