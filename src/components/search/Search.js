import React, { Component } from 'react';
import { loadBreeds, searchByBreed } from '../../../services/dogApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import './Search.css';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    dogs: [],
    breedList: [],
    formLoaded: false,
    error: null,
    breed: '',
    zip: null,
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location);
  }

  UNSAFE_componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const breed = getSearch(this.props.location);
    if(breed === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { breed, location } = queryString.parse(query);
    this.setState({ breed, location });
    if(!breed || !location) return;

    this.props.onSearch([], null, true);

    searchByBreed(breed, location)
      .then(({ petfinder }) => {
        const results = petfinder.pets.pet;
        this.setState({ dogs: results });
      })
      .catch(error => {
        this.setState({ error });
      })
      .then(() => {
        this.props.onSearch(this.state.dogs, this.state.error, false);
      });
  }

  handleFirstLoad = () => {
    if(!this.state.formLoaded) {
      loadBreeds().then(({ petfinder }) => {
        const results = petfinder.breeds.breed.map( (item) => {
          return item.$t;
        });
        this.setState({ breedList: results,
          formLoaded: true
        });
      });
    }
  };

  handleBreed = ({ target }) => {
    this.setState({ breed: target.value });
  };

  handleZip = ({ target }) => {
    this.setState({ zip: target.value });
  };

  handleSearch = () => {
    event.preventDefault();
    this.setState({ error: null });

    const searchString = {
      breed: this.state.breed,
      location: this.state.zip
    };
    
    this.props.history.push({
      search: breed ? queryString.stringify(searchString) : ''
    });
  };
  
  render() {

    const { breedList, zip } = this.state;
    this.handleFirstLoad();

    return (
      <form onSubmit={this.handleSearch}>
        <label for="zipcode"> Enter your zipcode:
          <input id="loc" type="text" pattern="[0-9]{5}" value={zip} onChange={event => this.handleZip(event)} required />
        </label>
        <div className="styled-select">
          <select id="breed" onChange={event => this.handleBreed(event)} required>
            <option selected disabled>Search by breed</option>
            {breedList.map(breed => <option key={breed}>{breed}</option>)}
          </select>
          </div>
          <button>Search</button>
      </form>
    );
  }
}