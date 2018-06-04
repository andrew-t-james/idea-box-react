import React, { Component } from 'react';
import Header from './Header';
import IdeaForm from './IdeaFrom';
import IdeaCardList from './IdeaCardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideasList: []
    };
    this.addIdea = this.addIdea.bind(this);
  }

  addIdea(newIdea) {
    const { ideasList } = this.state;

    this.setState({
      ideasList: [...ideasList, newIdea]
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
            <IdeaCardList />
          </section>
        </article>
      </main>
    );
  }
}

export default App;