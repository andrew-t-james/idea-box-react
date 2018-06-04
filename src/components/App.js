import React, { Component } from 'react';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <main>
        <article className="top-half">
          <section className="form-section">
            <Header />
          </section>
        </article>
      </main>
    );
  }
}

export default App;