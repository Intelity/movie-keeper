import { combineReducers } from "redux";
import { createReducer } from "redux-create-reducer";
import {
	EDIT_NEW_MOVIE_TITLE,
	EDIT_NEW_MOVIE_DIRECTOR,
	EDIT_NEW_MOVIE_YEAR,
	EDIT_NEW_MOVIE_RATING
} from "../action-creators";

const title = createReducer('TITLE', {
	[EDIT_NEW_MOVIE_TITLE]: (_, { payload: { title } }) => title
});
const director = createReducer('diretor', {
	[EDIT_NEW_MOVIE_DIRECTOR]: (_, { payload: { director } }) => director
});
const year = createReducer(1742, {
	[EDIT_NEW_MOVIE_YEAR]: (_, { payload: { year } }) => year || null
});
const rating = createReducer(2, {
	[EDIT_NEW_MOVIE_RATING]: (_, { payload: { rating } }) => rating
});

export default combineReducers({
	title,
	director,
	year,
	rating
});

export const selectors = {
	getNewMovieTitle: ({ title }) => title,
	getNewMovieDirector: ({ director }) => director,
	getNewMovieYear: ({ year }) => year,
	getNewMovieRating: ({ rating }) => rating
};
