import React, { Component } from 'react';
import { gifs } from '../../../services/gifs';

export default class Loading extends Component {

  shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {

    return (
      <div id="dog-images" className="loading"> 
        <p>Loading... One second!</p>
        <p className="gif" style={{ backgroundImage: `url(${this.shuffle(gifs)[0]})` }}></p>
      </div>
    );
  }
}