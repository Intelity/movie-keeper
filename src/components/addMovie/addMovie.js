import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Rating from 'react-rating';
import axios from 'axios';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddMovie: false,
      addMovie: {},
      options: [],
    };
  }

  submitNewMovie(e) {
    e.preventDefault();
    const updateMovie = {};
    updateMovie[Object.keys(this.props.movies).length + 1] = this.state.addMovie;
    const movies = Object.assign({}, this.props.movies, updateMovie);
    this.setState({
      addMovie: {},
      showAddMovie: false,
    });
    this.props.update(movies);
    window.localStorage.setItem('movie-collection', JSON.stringify({
      movies: movies
    }));
  }

  addAttr(type, obj) {
    const update = {};
    update[type] = obj.currentTarget.value;
    this.setState({
      addMovie: Object.assign({}, this.state.addMovie, update)
    });

    if (type === "title" && update[type].length > 2) {
      this.autoComplete(update);
    }
  }

  autoComplete(update) {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'd4b2e5e0e5a46c592a05101bdc4d70fe',
        page: 1,
        query: update.title,
      }
    })
    .then((response) => {
      this.setState({
        options: response.data.results
      });

      const movie = (response.data.results.length > 0) ? response.data.results[0] : false;

      if (movie) {
        update.year      = (movie.release_date) ? movie.release_date.split("-")[0] : "";
        update.director  = (movie.director) ? movie.director : "No director in DB";
        update.rating    = (movie.vote_average) ? movie.vote_average * 5 / 10 : 0;
        update.poster    = (movie.poster_path) ? 'http://image.tmdb.org/t/p/w185/' + movie.poster_path : 0;

        this.setState({
          addMovie: Object.assign({}, this.state.addMovie, update)
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  addMovie() {
    this.setState({
      showAddMovie: true,
      options: [],
    });
  }

  setRating(rating) {
    this.addAttr('rating', {
      currentTarget: {
        value: rating,
      },
    });
  }

  render() {
    let options = [];
    if (this.state.options.length > 0) {
      this.state.options.forEach((option, id) => {
        options.push(
          <option key={id} value={option.title}></option>
        );
      })
    }

    return (
      <Flexbox className="overlay" style={{display: (this.state.showAddMovie === true ? 'flex' : 'none')}}>
        <Flexbox className="add-movie-container">
          <Form
            onSubmit={this.submitNewMovie.bind(this)}
            className="add-movie-form"
            >
            <legend>Add Movie</legend>
            <Input ref="title" label="Title" floatingLabel={true}
                   onChange={this.addAttr.bind(this, 'title')}
                   list="titles"
                   value={this.state.addMovie.title || ""}/>
            <datalist id="titles">
              {options}
            </datalist>
            <Input ref="director" label="Director" floatingLabel={true}
                   onChange={this.addAttr.bind(this, 'director')}
                   value={this.state.addMovie.director || ""}/>
            <Input ref="year" label="Year of Release" floatingLabel={true}
                   onChange={this.addAttr.bind(this, 'year')}
                   value={this.state.addMovie.year || ""}/>

            <div className="mui-textfield" style={{marginBottom: 0}}>
              <div style={{marginBottom: 15}}>Rating</div>
              <Rating
                initialRate={this.state.addMovie.rating || 0}
                onClick={this.setRating.bind(this)}
                value={this.state.addMovie.rating || 0}
                />
            </div>
            <div style={{textAlign: 'right'}}>
              <Button
                variant="flat"
                onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                          showAddMovie: false,
                      });
                  }}
                >
                Cancel
              </Button>
              <Button variant="flat" color="primary">Submit</Button>
            </div>
          </Form>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default AddMovie;
