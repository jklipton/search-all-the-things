import React, { Component } from 'react';
import Articles from './Articles';
import Search from './Search';
import { loadAll, search } from '../../services/dogApi';

export default class App extends Component {

  state = {
    breed: null,
    loading: false,
    perPage: 20,
    images: [],
  };

  handleSearch = ( search ) => {
    this.setState({ breed: search }, this.searchBreed);
  };

  searchBreed = () => {
    const { breed } = this.state;
    this.setState({ loading: true });
    console.log( 'search by:', breed );

    search(breed).then(({ message }) => {this.setState({ images: message });});
  };

  render() {

    const { breeds, images, perPage } = this.state;

    return (
      <main>
        <header>
              I am a header, search here.
              breed and subbreed drop down
              YOUR CURRENT SEARCH IS VISIBLE HERE, COUNT
              VIEW PAGE NUMBER CLICK TO NEXT PAGE, DISABLE
        </header>

        <Search onSearch={this.handleSearch}/>

        <Articles images={images}
                  perPage= {perPage}/>

        <article>
              I am the article.  SEARCH SOMEThinG!
              I HAVE A LOADING INDICATOR
        </article>
      </main>
    );
  }
}