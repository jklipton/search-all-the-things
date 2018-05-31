import React, { Component } from 'react';
import { loadAll } from '../../services/dogApi';

export default class Search extends Component {

    state = {
        breeds: [],
        search: '',
        loaded: false,
    };

    handleLoad = () => {
        if (!this.state.loaded) {
            loadAll().then(({ message }) => {
                this.setState({ breeds: Object.keys(message),
                                loaded: true
                            });
                        });
        }
    };

    handleBreedSearch = ({ target }) => {
        this.setState(
            { search: target.value }, 
            () => {
                event.preventDefault();
                this.props.onSearch(this.state.search);
            });
      };

    render() {
        const { breeds } = this.state;
        this.handleLoad();
      
      return (
        <div id="breed-select">
            <select onChange={event => this.handleBreedSearch(event)}>
                <option selected disabled>Search by breed</option>
                {breeds.map(breed => <option key={breed}>{breed}</option>)}
            </select>
        </div>
      );
    }
  }