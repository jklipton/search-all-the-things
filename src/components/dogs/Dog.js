import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Dog extends Component {
  
  static propTypes = {
    data: PropTypes.object
  };

  parsePhoto = (media) => {
    if(!media.photos) return;

    return media.photos.photo.find((photo) => {
      return photo['@size'] === 'x';
    });
  };

  render() {
    const { data } = this.props;
    const { id, name, media } = data;
    const bigPhoto = this.parsePhoto(media);

    return (
      <p>
        <Link to={`/dogs/${id.$t}`}> 
          <img src={bigPhoto.$t} />
          <span className="dog-name">{name.$t}</span>
        </Link>
      </p>
    );
  }
}