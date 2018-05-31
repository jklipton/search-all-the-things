import React, { Component } from 'react';
import './Articles.css';

export default class Articles extends Component {

  state = {
    lastImage: 0,
  }

  render() {
    const { lastImage } = this.state;
    const { images, perPage } = this.props;

    const articles = images.slice(lastImage, perPage).map((image) => {
            return <p><img src={image} /></p>
    });

    return <section id="dog-images">{articles}</section>;
  }
}