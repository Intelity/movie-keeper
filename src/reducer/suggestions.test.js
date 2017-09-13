import {
	REQUEST_SUGGESTIONS,
	RECEIVE_SUGGESTIONS
} from "../Autosuggest/actionTypes";
import reducer, { selectors } from "./suggestions";

describe("suggestions reducer", () => {
	it("updates the fetching state", () => {
		const title = "Title";
		const state = reducer(undefined, {
			type: REQUEST_SUGGESTIONS,
			payload: {
				title
			}
		});
		expect(selectors.isFetchingSuggestions(state, title)).toEqual(true);
		expect(selectors.getSuggestions(state, title)).toEqual(null);
		expect(selectors.hasFetchedSuggestions(state, title)).toEqual(false);
	});

	it("updates the suggestions", () => {
		const title = "Title";
		const movies = [{ foo: "bar" }];
		const state = reducer(undefined, {
			type: RECEIVE_SUGGESTIONS,
			payload: {
				title,
				movies
			}
		});
		expect(selectors.isFetchingSuggestions(state, title)).toEqual(false);
		expect(selectors.getSuggestions(state, title)).toEqual(movies);
		expect(selectors.hasFetchedSuggestions(state, title)).toEqual(true);
	});
});
