import React, { Component } from 'react';

class IdeaFrom extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };

    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(event) {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({
      [name]: value
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <form
        className="idea-box-form"
        action=""
        method="">
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

export default IdeaFrom;