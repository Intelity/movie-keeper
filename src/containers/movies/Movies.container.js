import React, { Component } from 'react';
import { MoviesComponent } from '../../components/movies/Movies.component';


class MoviesContainer extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      movies: {},
      showAddMovie: false,
    };
    
    this.addNewMovie = this.addNewMovie.bind(this);
    this.hideAddMovieComponent = this.hideAddMovieComponent.bind(this);
    this.showAddMovieComponent = this.showAddMovieComponent.bind(this);
  }
  
  componentWillMount() {
    const movieColl = JSON.parse(window.localStorage.getItem('movie-collection') || '{ "movies": [] }');
    this.setState({
      movies: movieColl.movies,
    });
  }
  
  addNewMovie(newMovie) {
    const updateMovie = {};
    updateMovie[Object.keys(this.state.movies).length + 1] = newMovie;
    const movies = Object.assign({}, this.state.movies, updateMovie);
    
    this.setState({
      movies: movies,
      showAddMovie: false,
    });
    window.localStorage.setItem('movie-collection', JSON.stringify({
      movies: movies
    }));
  }
  
  hideAddMovieComponent() {
    this.setState({
      showAddMovie: false
    });
  }
  
  showAddMovieComponent() {
    this.setState({
      showAddMovie: true,
    });
  }
  
  render() {
    return (
      <MoviesComponent {...this.state}
        addNewMovie={this.addNewMovie}
        hideAddMovieComponent={this.hideAddMovieComponent}
        showAddMovieComponent={this.showAddMovieComponent}/>
    );
  }
}

export {
  MoviesContainer
}
