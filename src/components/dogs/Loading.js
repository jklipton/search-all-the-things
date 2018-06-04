import React, { Component } from 'react';
import { gifs } from '../../../services/gifs';

export default class Loading extends Component {

  render() {

    return (
      <div id="dog-images" className="loading"> 
        <p>Loading... One second!</p>
        <p className="gif" style={{ backgroundImage: `url(${this.shuffle(gifs)[0]})` }}></p>
      </div>
    );
  }
}