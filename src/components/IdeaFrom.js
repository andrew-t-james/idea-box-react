import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IdeaFrom extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };

    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handelChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addIdea(this.state);

    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <form
        className="idea-box-form"
        onSubmit={this.handleSubmit}
      >
        <input
          className="idea-box-form-title"
          type="text"
          name="title"
          placeholder="Title"
          required={true}
          aria-label="Please enter a Title for your Idea"
          onChange={this.handelChange}
          value={title}
        />
        <textarea
          className="idea-box-form-body"
          name="body"
          placeholder="Body"
          required={true}
          aria-label="Please enter an Idea"
          onChange={this.handelChange}
          value={body}
        >
        </textarea>
        <button
          className="submit-button"
          type="submit"
        >
        save
        </button>
      </form>
    );
  }
}

IdeaFrom.propTypes = {
  addIdea: PropTypes.func
};

export default IdeaFrom;