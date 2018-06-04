import React, { Component } from 'react';
import Header from './Header';
import IdeaForm from './IdeaFrom';

class App extends Component {
  render() {
    return (
      <main>
        <article className="top-half">
          <section className="form-section">
            <Header />
            <IdeaForm />
          </section>
        </article>
      </main>
    );
  }
}

export default App;