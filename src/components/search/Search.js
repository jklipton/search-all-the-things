import React, { Component } from 'react';
import Dogs from '../dogs/Dogs';
import SearchForm from '../search/SearchForm';
import { searchByBreed, searchBySubBreed } from '../../../services/dogApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    images: [],
    error: null,
    breed: '',
    subBreed: '',
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  static getDerivedStateFromProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: searchTerm } = queryString.parse(query);
    this.setState({ searchTerm });
    if(!searchTerm) return;

    search(searchTerm)
      .then(({ Search }) => {
        this.setState({ movies: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handleSearch = (breed, subBreed) => {
    this.setState({ error: null });
    
    this.props.history.push({
      search: searchTerm ? queryString.stringify({ search: searchTerm }) : ''
    });
  };
  
  render() {
    const { breed, subBreed } = this.state;

    return (
      <div id="search">
        <SearchForm breed={breed} subBreed={subBreed} onSearch={this.handleSearch}/>
      </div>
    );
  }
}