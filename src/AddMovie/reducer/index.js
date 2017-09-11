import { combineReducers } from "redux";
import ui, { selectors as fromUI } from "./ui";

export default combineReducers({
	ui
});

const globalizeSelector = (field, selector) => (state, ...args) =>
	selector(state[field], ...args);

const globalizeSelectors = (field, selectors) =>
	Object.keys(selectors).reduce((globalized, selectorName) => {
		globalized[selectorName] = globalizeSelector(
			field,
			selectors[selectorName]
		);
		return globalized;
	}, {});

export const selectors = {
	...globalizeSelectors("ui", fromUI)
};
