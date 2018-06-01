import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';

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

  handleSearch = ( breed, subBreed ) => {
    this.setState({ breed: breed, subBreed: subBreed }, this.search);
  };

  search = () => {
    const { breed, subBreed } = this.state;
    this.setState({ loading: true });

    console.log( 'search by:', breed, subBreed);

    if (this.state.subBreed) searchBySubBreed(breed, subBreed).then(({ message }) => {this.setState({ images: message }, this.setCount); });
    else searchByBreed(breed).then(({ message }) => {this.setState({ images: message }, this.setCount);});
  };

  setCount = () => {
    this.setState({ results: this.state.images.length,
                    loading: false});
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.search);
  };


  render() {

    const { images, perPage, page, results, lastImage, loading } = this.state;

    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}