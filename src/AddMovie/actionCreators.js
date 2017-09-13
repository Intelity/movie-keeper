import {
	EDIT_NEW_MOVIE_TITLE,
	EDIT_NEW_MOVIE_DIRECTOR,
	EDIT_NEW_MOVIE_YEAR,
	EDIT_NEW_MOVIE_RATING
} from "./actionTypes";

export const editNewMovieTitle = title => ({
	type: EDIT_NEW_MOVIE_TITLE,
	payload: {
		title
	}
});

export const editNewMovieDirector = director => ({
	type: EDIT_NEW_MOVIE_DIRECTOR,
	payload: {
		director
	}
});

export const editNewMovieYear = year => ({
	type: EDIT_NEW_MOVIE_YEAR,
	payload: {
		year
	}
});

export const editNewMovieRating = rating => ({
	type: EDIT_NEW_MOVIE_RATING,
	payload: {
		rating
	}
});
