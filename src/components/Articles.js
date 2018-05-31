import React, { Component } from 'react';
import './Articles.css';

export default class Articles extends Component {


  render() {
    const { images, perPage } = this.props;
    
    function loadImages(array) {
      for (let i=0; i < perPage; i++){
        imageHTML(array[i])
      };
    };

    const articles = images.slice(0, perPage).map((image) => {
            return <p><img src={image} /></p>
    });

    return <section id="dog-images">{articles}</section>;
  }
}