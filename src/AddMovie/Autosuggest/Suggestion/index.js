import { connect } from "react-redux";
import {
	editNewMovieTitle,
	editNewMovieDirector,
	editNewMovieYear,
	editNewMovieRating
} from "../../actionCreators";
import Suggestion from "./Suggestion";

const mapDispatchToProps = dispatch => ({
	onEditTitle: title => dispatch(editNewMovieTitle(title)),
	onEditDirector: director => dispatch(editNewMovieDirector(director)),
	onEditYear: year => dispatch(editNewMovieYear(year)),
	onEditRating: rating => dispatch(editNewMovieRating(rating))
});

export default connect(null, mapDispatchToProps)(Suggestion);
