import React, { Component } from 'react';
import { loadBreeds, loadSubBreeds } from '../../services/dogApi';
import './Search.css';

export default class Search extends Component {

    state = {
        breedList: [],
        subBreedList: [],
        breed: '',
        subBreed: '',
        loaded: false,
    };

    handleFirstLoad = () => {
        if (!this.state.loaded) {
            loadBreeds().then(({ message }) => {
                this.setState({ breedList: Object.keys(message),
                                loaded: true
                            });
                        });
        }
    };

    handleBreedSearch = ({ target }) => {
        this.setState(
            { breed: target.value, subBreed: null }, 
            () => {
                event.preventDefault();
                this.props.onSearch(this.state.breed, null);
                this.handleSubLoad(this.state.breed);
            });
    };

    handleSubLoad = (breed) => {
        loadSubBreeds(breed).then(({ message }) => {
            this.setState({ subBreedList: message });
        });
    };

    handleSubBreedSearch = ({ target }) => {
        this.setState(
            { subBreed: target.value }, 
            () => {
                event.preventDefault();
                this.props.onSearch(this.state.breed, this.state.subBreed);
            });
    };

    render() {
        const { breedList, subBreedList } = this.state;
        this.handleFirstLoad();
      
      return (
        <div id="breed-select">
            <div className="styled-select">
            <select id="breed" onChange={event => this.handleBreedSearch(event)}>
                <option selected disabled>Search by breed</option>
                {breedList.map(breed => <option key={breed}>{breed}</option>)}
            </select>
            </div>
            <div className="styled-select">
            <select id="subbreed" onChange={event => this.handleSubBreedSearch(event)}>
                <option selected disabled>subbreed</option>
                <option value=''>all</option>
                {subBreedList.map(breed => <option key={breed}>{breed}</option>)}
            </select>
            </div>
        </div>
      );
    }
  }