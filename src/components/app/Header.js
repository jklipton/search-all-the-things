import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SearchForm from '../search/SearchForm';


export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="header-container">
          <h1>REACT2DOGS</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <Route path="/search" component={SearchForm}/>
            </ul>
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