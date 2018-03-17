import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;

    const className = `form-group ${touched && error && 'has-danger'}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <field.tag
          className="form-control"
          type="text"
          {...field.input}
        />
        {/* Show error is touched and there is an error */}
        {touched && error && <span className="text-help">{error}</span>}
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
          tag="input"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
          tag="input"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
          tag="textarea"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from values
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Please enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Please write some content!';
  }

  // If errors is empty, form is fine to submit
  // If any properties are assigned, redux forms assumes failed validation
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);
