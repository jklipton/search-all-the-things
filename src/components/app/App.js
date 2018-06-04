import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Dogs from '../dogs/Dogs';
import DogDetail from '../dogs/DogDetail';

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
              <Route path="/search" render={({ location }) => {
                return <Dogs dogs={dogs} error={error} loading={loading} location={location}/>;
              }}/>
              <Route path="/dogs/:id" render={({ match, history }) => {
                return <DogDetail dogID={match.params.id} history={history}/>;
              }}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}