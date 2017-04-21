import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { preventAndCall } from './Tools';

const AppLayout = ({ onAddMovie, children, title }) =>
  <Flexbox flexDirection="column" minHeight="100vh" className="App">

    <Flexbox className="App-header">
      <Flexbox className="App-brand headings">
        <div className="logo-container">
          <i className="material-icons logo-icon">movie</i>
          <span>{title}</span>
        </div>
      </Flexbox>
      <a href="#add" className="add-movie" onClick={preventAndCall(onAddMovie)}>
        <i className="material-icons">add</i>
      </a>
    </Flexbox>

    {children}
  </Flexbox>;

AppLayout.propTypes = {
  onAddMovie: PropTypes.func.isRequired
};

export default AppLayout;
