import { combineReducers } from "redux";
import globalizeSelectors from "../utils/globalizeSelectors";
import newMovie, { selectors as fromNewMovie } from "./newMovie";
import suggestions, { selectors as fromSuggestions } from "./suggestions";

export default combineReducers({
	newMovie,
	suggestions
});

export const selectors = {
	...globalizeSelectors("newMovie", fromNewMovie),
	...globalizeSelectors("suggestions", fromSuggestions)
};
