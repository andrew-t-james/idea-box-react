import React, { Component } from 'react';
import Header from './Header';
import IdeaForm from './IdeaFrom';
import IdeaCardList from './IdeaCardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideasList: [{title: 'hello', body: 'world'}]
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
    const { ideasList } = this.state;

    return (
      <main>
        <article className="top-half">
          <section className="form-section">
            <Header />
            <IdeaForm
              addIdea={this.addIdea}
            />
            <IdeaCardList
              ideaList={ideasList}
            />
          </section>
        </article>
      </main>
    );
  }
}

export default App;