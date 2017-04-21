import React, { PropTypes, Component } from 'react';
import { preventAndCall } from '../../Tools';

import Flexbox from 'flexbox-react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Rating from 'react-rating';

export default
class MovieAddOverlay extends Component {
  render() {
    const { onSubmitMovie, onClose } = this.props;

    let currentModel = {
      title: 'No title',
      director: '',
      year: 0,
      rating: 0
    };

    const updateAttr = field => ({ currentTarget: { value } }) => currentModel[field] = value;

    return <Flexbox className="overlay">
      <Flexbox className="add-movie-container">
        <Form onSubmit={preventAndCall(onSubmitMovie, currentModel)} className="add-movie-form">
          <legend>Add Movie</legend>

          <Input ref="title" label="Title" floatingLabel={true} onChange={updateAttr('title')}/>
          <Input ref="director" label="Director" floatingLabel={true} onChange={updateAttr('director')}/>
          <Input ref="year" label="Year of Release" floatingLabel={true} onChange={updateAttr('year')}/>

          <div className="mui-textfield" style={{marginBottom: 0}}>
            <div style={{marginBottom: 15}}>Rating</div>
            <Rating onClick={rating => currentModel.rating = rating } />
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
