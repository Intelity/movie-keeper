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

export default globalizeSelectors;
