import React, { Component } from 'react';

import './App.css';

import AppLayout from './AppLayout';
import MovieList from './components/movieList';
import MovieAddOverlay from './components/movieAdd';
import * as MovieStorage from './storages/movie';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: MovieStorage.all(),
      showAddMovie: false
    };
  }

  toggleAddMovieOverlay() {
    this.setState({
      showAddMovie: !this.state.showAddMovie,
    });
  }

  addNewMovie(movie) {
    const movieModel = MovieStorage.add(movie);

    this.setState({
      movies: [...this.state.movies, movieModel],
      showAddMovie: false
    });
  }

  render() {
    return <AppLayout title="Movie Keeper" onAddMovie={() => this.toggleAddMovieOverlay()}>
      <MovieList movies={this.state.movies} title="My Collection" />
      { this.state.showAddMovie
        ? <MovieAddOverlay
            onSubmitMovie={movie => this.addNewMovie(movie)}
            onClose={() => this.toggleAddMovieOverlay()} />
        : null }
    </AppLayout>;
  }
}

export default App;
