import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import './App.css';
import AddMovie from 'movie-finder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      showAddMovie: false
    };
  }

  componentWillMount() {
    const movieColl = JSON.parse(window.localStorage.getItem('movie-collection') || '{ "movies": [] }');
    this.setState({
      movies: movieColl.movies,
    });
  }

  showAddMovie() {
    this.setState({
      showAddMovie: true,
    });
  }

  hideAddMovie() {
      this.setState({
          showAddMovie: false
      });
  }

  submitNewMovie(movie) {
    const updateMovie = {};
    updateMovie[Object.keys(this.state.movies).length + 1] = movie;
    const movies = Object.assign({}, this.state.movies, updateMovie);
    this.setState({
      movies: movies,
      showAddMovie: false,
    });
    window.localStorage.setItem('movie-collection', JSON.stringify({
      movies: movies
    }));
  }

  render() {
    let movies = [(
      <div key='loading'>
        <em>No movies in collection, please add.</em>
      </div>
    )];
    if (Object.keys(this.state.movies).length > 0) {
      movies = [];
      Object.keys(this.state.movies).forEach((movieId) => {
        const movie = this.state.movies[movieId];
        movies.push(
          <Flexbox key={`movie-${movieId}`} className="movie" flexDirection="column">
            <div className="movie-rating">{movie.rating}</div>
            <Flexbox className="movie-poster"></Flexbox>
            <Flexbox className="movie-title" flexDirection="row">
              {movie.title}
            </Flexbox>
            <Flexbox>
              Year: {movie.year}
            </Flexbox>
            <Flexbox className="movie-info" flexDirection="row">
              <em>Directed by: {movie.director}</em>
            </Flexbox>
          </Flexbox>
        );
      })
    }

    return (
      <Flexbox flexDirection="column" minHeight="100vh" className="App">
        <Flexbox className="App-header">
          <Flexbox className="App-brand headings">
            <div className="logo-container">
              <i className="material-icons logo-icon">movie</i>
              <span>Movie Keeper</span>
            </div>
          </Flexbox>
          <a href="#add"
            className="add-movie"
            onClick={(e) => {
              e.preventDefault();
              this.showAddMovie();
            }}
          >
            <i className="material-icons">add</i>
          </a>
        </Flexbox>
        <Flexbox flexGrow={1} flexDirection="row">
          <Flexbox className="App-menu" flexDirection="column">
            <Flexbox className="menu-item selected headings">
              <span>My Collection</span>
              <i className="material-icons menu-icon">chevron_right</i>
            </Flexbox>
          </Flexbox>
          <Flexbox flexGrow={1} className="App-content" flexDirection="column">
            <Flexbox>
              <h2 className="headings">My Collection</h2>
            </Flexbox>
            <Flexbox className="App-content-movies" flexDirection="row" flexWrap="wrap">
              {movies}
            </Flexbox>
          </Flexbox>
        </Flexbox>

        <Flexbox className="overlay" style={{display: (this.state.showAddMovie === true ? 'flex' : 'none')}}>
          <Flexbox className="add-movie-container">
              { this.state.showAddMovie &&
                  <AddMovie
                      onCancel={() => this.hideAddMovie()}
                      onConfirm={(movie) => this.submitNewMovie(movie)}
                  /> }
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default App;
