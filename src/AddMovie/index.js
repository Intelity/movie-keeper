import { connect } from "react-redux";
import { selectors } from "./reducer/";
import {
	editNewMovieDirector,
	editNewMovieYear,
	editNewMovieRating
} from "./actionCreators";
import AddMovie from "./AddMovie";

const mapStateToProps = (state, ownProps) => {
	const movie = {
		title: selectors.getNewMovieDirector(state),
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
	onEditDirector: director => dispatch(editNewMovieDirector(director)),
	onEditYear: year => dispatch(editNewMovieYear(year)),
	onEditRating: rating => dispatch(editNewMovieRating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
