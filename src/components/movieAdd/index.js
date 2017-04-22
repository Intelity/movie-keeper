import React, { PropTypes, Component } from 'react';
import { preventAndCall } from '../../Tools';

import Flexbox from 'flexbox-react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Rating from 'react-rating';
import MovieSelect from 'movie-keeper-movie-select';

import './movie-select-theme.css';

export default
class MovieAddOverlay extends Component {

  constructor (...args)
  {
    super(...args);

    this.state = {
      title: '',
      director: '',
      year: '',
      rating: 0
    };
  }

  handleMovieSelect(movie)
  {
    this.setState({
      director: movie.Director,
      year: movie.Released,
      rating: Math.floor((parseFloat(movie.imdbRating) / 10) * 5),
      title: movie.Title
    });
  }

  render() {
    const { onSubmitMovie, onClose } = this.props;

    const updateState = field => ({ currentTarget: { value } }) => this.setState({ [field]: value });

    return <Flexbox className="overlay">
      <Flexbox className="add-movie-container">
        <Form onSubmit={preventAndCall(onSubmitMovie, this.state)} className="add-movie-form">
          <legend>Add Movie</legend>

          <MovieSelect
            value={this.state.title}
            onMovieSelected={ this.handleMovieSelect.bind(this) }
            placeholder="Type movie title" />
          <Input ref="director" value={this.state.director}
                 label="Director" floatingLabel={true} onChange={updateState('director')}/>
          <Input ref="year" value={this.state.year}
                 label="Year of Release" floatingLabel={true} onChange={updateState('year')}/>

          <div className="mui-textfield" style={{marginBottom: 0}}>
            <div style={{marginBottom: 15}}>Rating</div>
            <Rating onClick={rating => this.setState({ rating }) } initialRate={this.state.rating} />
          </div>

          <div style={{textAlign: 'right'}}>
            <Button variant="flat" onClick={preventAndCall(onClose)}>Cancel</Button>
            <Button variant="flat" color="primary">Submit</Button>
          </div>
        </Form>
      </Flexbox>
    </Flexbox>;
  }
}

MovieAddOverlay.protoTypes = {
  onSubmitMovie: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};
