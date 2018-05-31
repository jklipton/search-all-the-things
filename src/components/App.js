import React, { Component } from 'react';
import Article from './Article';
import { loadAll, search } from '../../services/dogApi';

let frogs;
loadAll().then(({ message }) => {
      console.log('message', message);
      frogs = message;
    });
console.log('data', frogs);

export default class App extends Component {

  state = {
    breeds: []
  };

  render() {

    const { breeds } = this.state;
    return (
      <main>
        <header>
              I am a header, search here.
              I have a bar and a breed drop down list.
              YOUR CURRENT SEARCH IS VISIBLE HERE, COUNT
              VIEW PAGE NUMBER CLICK TO NEXT PAGE, DISABLE
        </header>

        <article>
              I am the article.  SEARCH SOMEThinG!
              I HAVE A LOADING INDICATOR
        </article>
      </main>
    );
  }
}