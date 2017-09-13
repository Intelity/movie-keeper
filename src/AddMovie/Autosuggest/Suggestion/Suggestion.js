import React from "react";
import PropTypes from "prop-types";

const SetValueButton = ({ value, onSetValue, className }) => {
	const onClick = e => {
		e.stopPropagation();
		onSetValue(value);
	};
	return (
		<span onClick={onClick} className={`suggestion-set ${className}`}>
			{value}
		</span>
	);
};

const Suggestion = ({
	title,
	director,
	year,
	rating,
	onEditDirector,
	onEditYear,
	onEditRating
}) => {
	return (
		<span>
			<span className={`suggestion-set-all`}>{title}</span>
			{director ? (
				<SetValueButton
					value={director}
					onSetValue={onEditDirector}
					className={`suggestion-set-director`}
				/>
			) : null}
			{year ? (
				<SetValueButton
					value={year}
					onSetValue={onEditYear}
					className={`suggestion-set-year`}
				/>
			) : null}
			{rating ? (
				<SetValueButton
					value={rating}
					onSetValue={onEditRating}
					className={`suggestion-set-rating`}
				/>
			) : null}
		</span>
	);
};

Suggestion.propTypes = {
	title: PropTypes.string.isRequired,
	director: PropTypes.string,
	year: PropTypes.number,
	rating: PropTypes.number,
	onEditDirector: PropTypes.func.isRequired,
	onEditYear: PropTypes.func.isRequired,
	onEditRating: PropTypes.func.isRequired
};

export default Suggestion;
