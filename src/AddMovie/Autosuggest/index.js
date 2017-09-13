import { connect } from "react-redux";
import { selectors } from "../reducer/";
import {
	editNewMovieTitle,
	editNewMovieDirector,
	editNewMovieYear,
	editNewMovieRating
} from "../actionCreators";
import { fetchSuggestions } from "./actionCreators";
import Autosuggest from "./Autosuggest";

const mapStateToProps = state => {
	const title = selectors.getNewMovieTitle(state),
		suggestions = selectors.getSuggestions(state, title);
	return {
		title,
		suggestions
	};
};

const mapDispatchToProps = dispatch => ({
	onSuggestionsFetch: title => dispatch(fetchSuggestions(title)),
	onEditAllMovieFields: ({ title, director, year, rating }) => {
		dispatch(editNewMovieTitle(title));
		dispatch(editNewMovieDirector(director));
		dispatch(editNewMovieYear(year));
		dispatch(editNewMovieRating(rating));
	},
	onEditTitle: title => dispatch(editNewMovieTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Autosuggest);
