import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Dogs from '../dogs/Dogs';

export default class App extends Component {

  state = {
  };

  passSearch= (images, error) => {
    this.setState({ images: images, error: error });
  };

  render() {

    const { images, error } = this.state;

    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" render={() => {
                return <Dogs images={images} error={error}/>;
              }}/>
              {/* <Route path="/search/:id" render={({ match, history }) => {
                return <MovieDetail imdbID={match.params.id} history={history}/>;
              }}/> */}
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}