import React, { Component } from 'react';
import Paging  from './Paging';
import Articles from './Articles';
import Search from './Search';
import { searchByBreed, searchBySubBreed } from '../../services/dogApi';
import './App.css';

export default class App extends Component {

  state = {
    breed: null,
    subBreed: null,
    loading: false,
    perPage: 20,
    page: 1,
    images: [],
    results: null,
  };

  handleSearch = (breed, subBreed) => {
    this.setState({ breed: breed, subBreed: subBreed }, this.search);
  };

  search = () => {
    const { breed, subBreed } = this.state;
    this.setState({ loading: true });

    console.log('search by:', breed, subBreed);

    if(this.state.subBreed) searchBySubBreed(breed, subBreed).then(({ message }) => {this.setState({ images: message }, this.setCount); });
    else searchByBreed(breed).then(({ message }) => {this.setState({ images: message }, this.setCount);});
  };

  setCount = () => {
    this.setState({ results: this.state.images.length,
      loading: false  });
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.search);
  };


  render() {

    const { images, perPage, page, results, lastImage, loading } = this.state;

    return (
      <main>
        <div id="header-holder">
          <header>
            <h1>REACT2DOGS</h1>
            <Search onSearch={this.handleSearch}/>
            <Paging results={results}
              perPage={perPage}
              page={page}
              onPage={this.handlePage}/>
          </header>
        </div>

        <Articles images={images}
          perPage= {perPage}
          page= {page}
          loading= {loading}/>

      </main>
    );
  }
}