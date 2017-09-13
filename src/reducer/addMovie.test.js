import {
	EDIT_NEW_MOVIE_TITLE,
	EDIT_NEW_MOVIE_DIRECTOR,
	EDIT_NEW_MOVIE_YEAR,
	EDIT_NEW_MOVIE_RATING
} from "../actionTypes";
import reducer, { selectors } from "./addMovie";

describe("addMovie reducer", () => {
	it("updates the title", () => {
		const state = reducer(undefined, {
			type: EDIT_NEW_MOVIE_TITLE,
			payload: {
				title: "Title"
			}
		});
		expect(selectors.getNewMovieTitle(state)).toEqual("Title");
	});

	it("updates the director", () => {
		const state = reducer(undefined, {
			type: EDIT_NEW_MOVIE_DIRECTOR,
			payload: {
				director: "Director"
			}
		});
		expect(selectors.getNewMovieDirector(state)).toEqual("Director");
	});

	it("updates the year", () => {
		const state = reducer(undefined, {
			type: EDIT_NEW_MOVIE_YEAR,
			payload: {
				year: 1992
			}
		});
		expect(selectors.getNewMovieYear(state)).toEqual(1992);
	});

	it("updates the rating", () => {
		const state = reducer(undefined, {
			type: EDIT_NEW_MOVIE_RATING,
			payload: {
				rating: 3
			}
		});
		expect(selectors.getNewMovieRating(state)).toEqual(3);
	});
});
