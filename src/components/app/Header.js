import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Search from '../search/Search';
import PropTypes from 'prop-types';
import styles from './Header.css';

export default class Header extends Component {

  static propTypes = {
    passToApp: PropTypes.func.isRequired,
  };

  passFromSearch = (dogs, error, loading) => {
    this.props.passToApp(dogs, error, loading);
  };

  render() {
    return (
      <header>
        <div id="header-container">
          <h1>REACT2DOGS</h1>
          <nav className={styles.nav}>
            <Link to="/">Home</Link> | <Link to="/search">Search</Link>
            <Route path="/search" render={({ location, history }) => {
              return <Search onSearch={this.passFromSearch} history={history} location={location}/>;
            }}/>
          </nav>
        </div>
      </header>
    );
  }
}

{/* <header>
<h1></h1>
<Search onSearch={this.handleSearch}/>
<Paging results={results}
        perPage={perPage}
        page={page}
        onPage={this.handlePage}/>
</header> */}