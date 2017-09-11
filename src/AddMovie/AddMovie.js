import React, { Component } from "react";
import PropTypes from "prop-types";
import Flexbox from "flexbox-react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Rating from "react-rating";

class AddMovie extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string,
    director: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number
  };

  onEditTitle = e => {
    const title = e.target.value;
    this.props.onEditTitle(title || null);
  };

  onEditDirector = e => {
    const director = e.target.value;
    this.props.onEditDirector(director || null);
  };

  onEditYear = e => {
    const year = +e.target.value;
    if (year >= 0) {
      this.props.onEditYear(year);
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { title, director, year, rating, onEditRating, onCancel } = this.props;
    const { onEditTitle, onEditDirector, onEditYear, onSubmit } = this;
    return (
      <Form
        onSubmit={onSubmit}
        className="add-movie-form"
      >
        <legend>Add Movie</legend>
        <Input
          ref="title"
          label="Title"
          floatingLabel={true}
          value={title || ""}
          onChange={this.onEditTitle}
        />
        <Input
          ref="director"
          label="Director"
          floatingLabel={true}
          value={director || ""}
          onChange={onEditDirector}
        />
        <Input
          ref="year"
          label="Year of Release"
          floatingLabel={true}
          value={year || ""}
          onChange={onEditYear}
        />
        <div className="mui-textfield" style={{ marginBottom: 0 }}>
          <div style={{ marginBottom: 15 }}>Rating</div>
          <Rating initialRate={rating || 0} onClick={onEditRating} />
        </div>
        <div style={{ textAlign: "right" }}>
          <Button type="button" variant="flat" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="flat" color="primary">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default AddMovie;
