import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Rating from 'react-rating';
import { getMovie } from '../../api/movieApi';
import { AutocompleteComponent } from '../autocomplete/Autocomplete.component';
import './AddMovie.component.css';


class AddMovieComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.getMoviesByApi('007');
  }

  handleAddAttr(type, obj) {
    const update = {};
    update[type] = obj.currentTarget.value;
    this.setState({
      movie: Object.assign({}, this.state.movie, update)
    });
  }

  handleSetRating(rating) {
    this.handleAddAttr('rating', {
      currentTarget: {
        value: rating,
      },
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.handleClose(this.state.movie);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNewMovie(this.state.movie);
  }

  calcRating(rawRating) {
    return parseInt(rawRating * 5 / 10);
  }

  getMoviesByApi(title) {
    getMovie(title).then(response => {
      if (!response) {
        this.setState({
          movie: {}
        });
        return;
      }

      try {
        const movieRaw = JSON.parse(response);
        const movie = {
          title: movieRaw.Title,
          director: movieRaw.Director,
          year: movieRaw.Year,
          rating: this.calcRating(movieRaw.imdbRating),
        };
        this.setState({
          movie
        });
      } catch (error) {
        throw error;
      }
    });
  }

  renderAutocomplete() {
    return (
      <div className="autocomplete">
        {this.state.moviesFromResponse}
      </div>
    );
  }

  render() {
    return (
      <Flexbox className="overlay" style={{display: 'flex'}}>
        <Flexbox className="add-movie-container">
          <Form className="add-movie-form"
                onSubmit={this.handleSubmit}>
            <legend>
              Add Movie
            </legend>
            {this.renderAutocomplete()}
            <Input ref="title"
                   label="Title"
                   floatingLabel={true}
                   value={this.state.movie.title}
                   onChange={this.handleAddAttr.bind(this, 'title')}/>
            <Input ref="director"
                   label="Director"
                   floatingLabel={true}
                   value={this.state.movie.director}
                   onChange={this.handleAddAttr.bind(this, 'director')}/>
            <Input ref="year"
                   label="Year of Release"
                   floatingLabel={true}
                   value={this.state.movie.year}
                   onChange={this.handleAddAttr.bind(this, 'year')}/>
            <div className="mui-textfield" style={{marginBottom: 0}}>
              <div style={{marginBottom: 15}}>
                Rating
              </div>
              <Rating initialRate={this.state.movie.rating || 0}
                      onClick={this.handleSetRating.bind(this)}/>
            </div>
            <div style={{textAlign: 'right'}}>
              <Button variant="flat" onClick={this.handleCancel}>
                Cancel
              </Button>
              <Button variant="flat" color="primary">
                Submit
              </Button>
            </div>
          </Form>
        </Flexbox>
      </Flexbox>
    );
  }
}

AddMovieComponent.propTypes = {
  handleClose: React.PropTypes.func,
  handleAddNewMovie: React.PropTypes.func
};

export {
  AddMovieComponent
};
