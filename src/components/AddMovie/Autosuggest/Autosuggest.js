import React from "react";
import PropTypes from "prop-types";
import ReactAutosuggest from "react-autosuggest";

import Suggestion from "./Suggestion";
import "./Autosuggest.css";

const noop = () => {};

const renderSuggestion = ({ title, director, year, rating }) => (
	<Suggestion {...{ title, director, year, rating }} />
);

const Autosuggest = ({
	title,
	suggestions,
	onEditTitle,
	onEditAllMovieFields,
	onSuggestionsFetch,
	...rest
}) => {
	const onChange = (evt, { newValue }) => onEditTitle(newValue);
	const getSuggestionValue = movie => movie.title;
	const onSuggestionSelected = (evt, { suggestion }) =>
		onEditAllMovieFields(suggestion);
	const shouldRenderSuggestions = value => value.trim().length > 2;
	return (
		<ReactAutosuggest
			suggestions={suggestions || []}
			onSuggestionsFetchRequested={({ value }) =>
				onSuggestionsFetch(value)}
			onSuggestionsClearRequested={noop}
			onSuggestionSelected={onSuggestionSelected}
			getSuggestionValue={getSuggestionValue}
			renderSuggestion={renderSuggestion}
			inputProps={{
				value: title || "",
				onChange
			}}
			shouldRenderSuggestions={shouldRenderSuggestions}
			focusInputOnSuggestionClick={false}
			{...rest}
		/>
	);
};

Autosuggest.propTypes = {
	title: PropTypes.string,
	suggestions: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			director: PropTypes.string,
			year: PropTypes.number,
			rating: PropTypes.number
		})
	),
	onEditTitle: PropTypes.func.isRequired,
	onEditAllMovieFields: PropTypes.func.isRequired,
	onSuggestionsFetch: PropTypes.func.isRequired
};

export default Autosuggest;
