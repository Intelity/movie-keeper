import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import AddMovie from './addMovie';

it('Component rendering', () => {
  const div     = document.createElement('div');
  ReactDOM.render(<AddMovie/>, div);
});

it('Component autocomplete rendering', () => {
  const state   = {
    options: [
      {title: "Movie 1"},
      {title: "Movie 2"},
    ]
  };
  const testHTML  = '<option value="Movie 1"></option><option value="Movie 2"></option>';
  const component = TestUtils.renderIntoDocument(
    <AddMovie/>
  );
  component.setState({
    options: state.options,
  });
  const options = TestUtils.findRenderedDOMComponentWithTag(
    component, 'datalist'
  );
  const datalistHTML = ReactDOM.findDOMNode(options).innerHTML;

  expect(datalistHTML).toEqual(testHTML);
});
