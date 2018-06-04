import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Dog extends Component {
  
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { data } = this.props;
    const { id, name, media.photos.photo: photos } = data;
    const bigPhoto = photos

    return (
      <p>
        <Link to={`/dogs/${id}`}> 
          <img src={image} />
          <span className="dog-name">{name}</span>
        </Link>
      </p>
    );
  }
}