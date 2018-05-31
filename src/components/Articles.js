import React, { Component } from 'react';
import './Articles.css';
import pom from'../images/pom.gif';
import pugs from'../images/pugs.gif';
import corgis from'../images/corgis.gif';
import ewok from'../images/ewok.gif';
import hotdogs from'../images/hotdogs.gif';
import puppies from'../images/puppies.gif';
import inu from'../images/inu.gif';
import mops from'../images/mops.gif';

export default class Articles extends Component {

  state = {
    gifs: [ pom, pugs, corgis, ewok, hotdogs, puppies, inu, mops ]
  };

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const { images, perPage, page, loading } = this.props;
    const { gifs } = this.state;

    const lastImage = perPage * (page - 1);

    const articles = images.slice(lastImage, (lastImage + perPage)).map((image) => {
            return <p><img src={image} /></p>
    });

    if (loading) return (
      <section id="dog-images" className="loading"> 
      <p>Loading... One second!</p>
      <p className="gif" style={{ backgroundImage: `url(${this.shuffle(gifs)[0]})` }}></p>
    </section>
    )

    if (images.length === 0) return (
      <section id="dog-images" className="intro">
        <p className="wide"></p>
        <p className="wide"><h2>Hey, you like dogs?  We got dogs!</h2> Choose your favorite breed from the dropdown menu!</p>
        {gifs.map(gif => <p className="gif" style={{ backgroundImage: `url(${gif})` }}></p>)}
      </section>
    )

    return <section id="dog-images" className="show">{articles}</section>;
  }
}