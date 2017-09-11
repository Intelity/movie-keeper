import React from "react";
import { createProvider, connect } from "react-redux";
import AddMovie from "./AddMovie";
import { selectors } from "./reducer/";

import {
	editNewMovieTitle,
	editNewMovieDirector,
	editNewMovieYear,
	editNewMovieRating
} from "./action-creators/";

const mapStateToProps = (state, ownProps) => {
	const movie = {
		title: selectors.getNewMovieTitle(state),
		director: selectors.getNewMovieDirector(state),
		year: selectors.getNewMovieYear(state),
		rating: selectors.getNewMovieRating(state)
	};
	return {
		...movie,
		onSubmit: () => ownProps.onSubmit(movie)
	};
};

const mapDispatchToProps = dispatch => ({
	onEditTitle: title => dispatch(editNewMovieTitle(title)),
	onEditDirector: director => dispatch(editNewMovieDirector(director)),
	onEditYear: year => dispatch(editNewMovieYear(year)),
	onEditRating: rating => dispatch(editNewMovieRating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
