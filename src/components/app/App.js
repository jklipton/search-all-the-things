import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Dogs from '../dogs/Dogs';

export default class App extends Component {

  state = {
    dogs: [],
    error: null,
    loading: false,
  };

  passFromHeader = (dogs, error, loading) => {
    this.setState({ dogs: dogs, error: error, loading: loading });
  };

  render() {

    const { dogs, error, loading } = this.state;

    return (
      <Router>
        <div>
          <Header passToApp={this.passFromHeader}/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" render={() => {
                return <Dogs dogs={dogs} error={error} loading={loading}/>;
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