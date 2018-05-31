import React, { Component } from 'react';
import { loadAll } from '../../services/dogApi';

let data = loadAll();
const { message };

export default class Breeds extends Component {

    state = {
        breeds,
    };

    render() {
        const { breeds } = this.state;
      
      return (
        <div id="breed-select">
        {breeds}
        </div>
      );
    }
  }