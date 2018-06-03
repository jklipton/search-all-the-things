import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadBreeds, loadSubBreeds } from '../../../services/dogApi';
import './Search.css';

export default class Search extends Component {

    static propTypes = {
      breed: PropTypes.string,
      onSearch: PropTypes.func.isRequired
    };

    state = {
      current: this.props.breed || '',
      loaded: false,
    };

    UNSAFE_componentWillReceiveProps({ breed }) {
      if(breed !== this.state.current) {
        this.setState({ current: breed });
      }
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
        { currentBreed: target.value, currentSubBreed: null }, 
        () => {
          this.callSearch();
          // this.handleSubLoad(this.state.currentBreed);
        });
    };

    // handleSubLoad = (breed) => {
    //   loadSubBreeds(breed).then(({ message }) => {
    //     this.setState({ subBreedList: message });
    //   });
    // };

    // handleSubBreedSearch = ({ target }) => {
    //   this.setState(
    //     { currentSubBreed: target.value }, 
    //     () => {
    //       this.callSearch();
    //     });
    // };

    callSearch() {
      const { current } = this.state;
      if(!current) return;
      this.props.onSearch(current);
    }

    render() {
      const { breedList } = this.state;
      this.handleFirstLoad();
      
      return (
        <div id="breed-select">
          <div className="styled-select">
          Search for Dogs : <select id="breed" onChange={event => this.handleBreed(event)}>
              <option selected disabled>Search by breed</option>
              {breedList.map(breed => <option key={breed}>{breed}</option>)}
            </select>
          </div>
        </div>
      );
    }
}

{/* <div className="styled-select">
<select id="subbreed" onChange={event => this.handleSubBreed(event)}>
  <option selected disabled>subbreed</option>
  <option value=''>all</option>
  {subBreedList.map(breed => <option key={breed}>{breed}</option>)}
</select>
</div> */}