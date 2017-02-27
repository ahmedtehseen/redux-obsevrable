import { combineEpics } from 'redux-observable';
import {fetchPostsEpic, fetchPostEpic, createPostEpic, deletePostEpic} from './postsEpic';

export const rootEpic = combineEpics(
	fetchPostsEpic,
	fetchPostEpic,
	createPostEpic,
	deletePostEpic
);
