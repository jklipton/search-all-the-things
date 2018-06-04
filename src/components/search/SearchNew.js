import React, { Component } from 'react';
import { loadBreeds, loadSubBreeds, searchByBreed, searchBySubBreed } from '../../../services/dogApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import './Search.css';

const getSearch = location => location ? location.search : '';

export default class SearchNew extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    images: [],
    breedList: [],
    loaded: false,
    error: null,
    breed: ''
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.breed);
  }

  UNSAFE_componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const breed = getSearch(this.props.location.breed);
    if(breed === next) return;
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
        this.props.onSearch(this.state.images, this.state.error);
      });
  }

  handleFirstLoad = () => {
    if(!this.state.loaded) {
      loadBreeds().then(({ message }) => {
        this.setState({ breedList: Object.keys(message),
          loaded: true
        });
      });
    }
  };

  handleBreed = ({ target }) => {
    this.setState(
      { breed: target.value }, 
      () => {
        this.handleSearch();
        // this.handleSubLoad(this.state.breedBreed);
      });
  };

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

    const { breedList } = this.state;
    this.handleFirstLoad();

    return (
      <div id="breed-select">
        <div className="styled-select">
          <select id="breed" onChange={event => this.handleBreed(event)}>
            <option selected disabled>Search by breed</option>
            {breedList.map(breed => <option key={breed}>{breed}</option>)}
          </select>
        </div>
      </div>
    );
  }
}