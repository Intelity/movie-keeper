export const EDIT_NEW_MOVIE_TITLE = "EDIT_NEW_MOVIE_TITLE";
export const EDIT_NEW_MOVIE_DIRECTOR = "EDIT_NEW_MOVIE_DIRECTOR";
export const EDIT_NEW_MOVIE_YEAR = "EDIT_NEW_MOVIE_YEAR";
export const EDIT_NEW_MOVIE_RATING = "EDIT_NEW_MOVIE_RATING";

export const editNewMovieTitle = title => console.log(title) || ({
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
