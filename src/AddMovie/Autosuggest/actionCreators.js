import debounce from "lodash.debounce";
import { selectors } from "../reducer";

import { REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS } from "./actionTypes";
import { imdbRatingToFiveStar } from "./utils";

const API_KEY = "BanMePlz";

const requestSuggestions = title => ({
	type: REQUEST_SUGGESTIONS,
	payload: {
		title
	}
});

const receiveSuggestions = (title, movies) => ({
	type: RECEIVE_SUGGESTIONS,
	payload: {
		title,
		movies
	}
});

const doFetchSuggestions = debounce((title, dispatch) => {
	dispatch(requestSuggestions(title));
	fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
		.then(response => response.json())
		.then(data => {
			if (data.Response === "True") {
				const { Title, Director, Year, imdbRating } = data;
				const movie = {
					title: Title,
					director: Director === "N/A" ? null : Director,
					year: parseInt(Year, 10) || null,
					rating: imdbRatingToFiveStar(imdbRating)
				};
				dispatch(receiveSuggestions(title, [movie]));
			} else {
				dispatch(receiveSuggestions(title, []));
			}
		});
}, 200);

export const fetchSuggestions = title => (dispatch, getState) => {
	const state = getState(),
		title = selectors.getNewMovieTitle(state);
	if (!selectors.hasFetchedSuggestions(state, title)) {
		doFetchSuggestions(title, dispatch);
	}
};
