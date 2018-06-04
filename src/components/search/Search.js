import React, { Component } from 'react';
import SearchForm from '../search/SearchForm';
import { searchByBreed, searchBySubBreed } from '../../../services/dogApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    passSearch: PropTypes.func.isRequired
  };

  state = {
    images: [],
    error: null,
    breed: '',
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  UNSAFE_componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: breed } = queryString.parse(query);
    this.setState({ breed });
    if(!breed) return;

    searchByBreed(breed)
      .then(({ message }) => {
        this.setState({ images: message });
      })
      .catch(error => {
        this.setState({ error });
      })
      .then(() => {
        this.props.passSearch(this.state.images, this.state.error);
      });
  }

  handleSearch = (breed) => {
    this.setState({ error: null });
    // const searchString = {
    //   breed: breed,
    //   subBreed: subBreed
    // };
    
    this.props.history.push({
      search: breed ? queryString.stringify({ search: breed }) : ''
    });
  };
  
  render() {
    const { breed } = this.state;

    return (
      <div id="search">
        <SearchForm breed={breed} onSearch={this.handleSearch}/>
      </div>
    );
  }
}