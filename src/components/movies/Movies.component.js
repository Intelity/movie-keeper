import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { AddMovieComponent } from '../addMovie/AddMovie.component';
import './Movies.component.css';


class MoviesComponent extends Component {

  constructor(props) {
    super(props);
    this.handleShowAddMovieComponent = this.handleShowAddMovieComponent.bind(this);
  }

  handleShowAddMovieComponent(e) {
    e.preventDefault();
    this.props.showAddMovieComponent();
  }

  renderAddMovieComponent() {
    if (!this.props.showAddMovie) {
      return null;
    }

    return (
      <AddMovieComponent handleAddNewMovie={this.props.addNewMovie}
                         handleClose={this.props.hideAddMovieComponent}/>
    );
  }

  renderHeader() {
    return (
      <Flexbox className="App-header">
        <Flexbox className="App-brand headings">
          <div className="logo-container">
            <i className="material-icons logo-icon">movie</i>
            <span>Movie Keeper</span>
          </div>
        </Flexbox>
        <a className="add-movie"
           href="#add"
           onClick={this.handleShowAddMovieComponent}>
          <i className="material-icons">add</i>
        </a>
      </Flexbox>
    );
  }

  renderMovies() {
    if (!Object.keys(this.props.movies).length) {
      return (
        <div key='loading'>
          <em>No movies in collection, please add.</em>
        </div>
      );
    }

    return Object.keys(this.props.movies).map(movieId => {
      const movie = this.props.movies[movieId];

      return (
        <Flexbox className="movie" key={`movie-${movieId}`} flexDirection="column">
          <div className="movie-rating">{movie.rating}</div>
          <Flexbox className="movie-poster"/>
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
    });
  }

  renderBody() {
    return (
      <Flexbox flexGrow={1} flexDirection="row">
        <Flexbox className="App-menu" flexDirection="column">
          <Flexbox className="menu-item selected headings">
            <span>My Collection</span>
            <i className="material-icons menu-icon">chevron_right</i>
          </Flexbox>
        </Flexbox>
        <Flexbox className="App-content" flexGrow={1} flexDirection="column">
          <Flexbox>
            <h2 className="headings">My Collection</h2>
          </Flexbox>
          <Flexbox className="App-content-movies" flexDirection="row" flexWrap="wrap">
            {this.renderMovies()}
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }

  render() {
    return (
      <Flexbox className="App" flexDirection="column" minHeight="100vh">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderAddMovieComponent()}
      </Flexbox>
    );
  }
}

AddMovieComponent.propTypes = {
  movies: React.PropTypes.object,
  showAddMovie: React.PropTypes.bool,
  addNewMovie: React.PropTypes.func,
  hideAddMovieComponent: React.PropTypes.func,
  showAddMovieComponent: React.PropTypes.func,
};

export {
  MoviesComponent
}
