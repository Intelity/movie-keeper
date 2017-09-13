import { combineReducers } from "redux";

import globalizeSelectors from "./utils/globalizeSelectors";
import addMovie, { selectors as fromAddMovie } from "./addMovie";
import suggestions, { selectors as fromSuggestions } from "./suggestions";

export default combineReducers({
	addMovie,
	suggestions
});

export const selectors = {
	...globalizeSelectors("addMovie", fromAddMovie),
	...globalizeSelectors("suggestions", fromSuggestions)
};
