import React, { Component } from 'react';
import { Layout } from './components/layout/Layout';
import { MoviesContainer } from './containers/movies/Movies.container';


class App extends Component {
  render() {
    return (
      <Layout>
        <MoviesContainer/>
      </Layout>
    );
  }
}

export default App;
