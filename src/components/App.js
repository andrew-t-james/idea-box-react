import React, { Component } from 'react';
import Header from './Header';
import IdeaForm from './IdeaFrom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideasList: []
    };
    this.addIdea = this.addIdea.bind(this);
  }

  addIdea(idea) {
    const { ideas } = this.state;

    this.setState({
      ideasList: [...ideas, idea]
    });
  }

  render() {
    return (
      <main>
        <article className="top-half">
          <section className="form-section">
            <Header />
            <IdeaForm
              addIdea={this.addIdea}
            />
          </section>
        </article>
      </main>
    );
  }
}

export default App;