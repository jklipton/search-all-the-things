import React, { Component } from 'react';
import { gifs } from '../../../services/gifs';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
    <section id="dog-images" className="intro">
        <p className="wide"></p>
        <p className="wide"><h2>Hey, you like dogs?  We got dogs!</h2> Choose your favorite breed from the dropdown menu!</p>
        {gifs.map(gif => <p className="gif" style={{ backgroundImage: `url(${gif})` }}></p>)}
    </section> 
    );
  }
}
