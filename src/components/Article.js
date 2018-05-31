import React, { Component } from 'react';

export default class Article extends Component {

  render() {
    const { image } = this.props.article;
    
    return (
      <li>
        <img src={image}/>
      </li>
    );
  }
}