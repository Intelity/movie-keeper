import { createReducer } from "redux-create-reducer";

import {
	REQUEST_SUGGESTIONS,
	RECEIVE_SUGGESTIONS
} from "../actionTypes/autosuggest";

const initialState = {};

const emptyStateForTitle = {
	isFetching: false,
	items: null
};

const requestSuggestions = (state, { payload: { title } }) => ({
	...state,
	[title]: {
		...emptyStateForTitle,
		isFetching: true
	}
});

const receiveSuggestions = (state, { payload: { title, movies } }) => ({
	...state,
	[title]: {
		isFetching: false,
		items: movies
	}
});

export default createReducer(initialState, {
	[REQUEST_SUGGESTIONS]: requestSuggestions,
	[RECEIVE_SUGGESTIONS]: receiveSuggestions
});

const getStateByTitle = (state, title) => state[title] || emptyStateForTitle;
const isFetchingSuggestions = (state, title) =>
	getStateByTitle(state, title).isFetching;
const getSuggestions = (state, title) => getStateByTitle(state, title).items;
const hasFetchedSuggestions = (state, title) =>
	getSuggestions(state, title) !== null;

export const selectors = {
	isFetchingSuggestions,
	getSuggestions,
	hasFetchedSuggestions
};
