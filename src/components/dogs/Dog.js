import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Dog extends Component {
  
  static propTypes = {
    imdbID: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  };

  render() {
    const { imdbID, Poster, Title, Year } = this.props;

    return (
      <li>
        <Link to={`/movies/${imdbID}`}>
          <img alt={Title} src={Poster}/>
          <h3>{Title}</h3>
          <p>Released {Year}</p>
        </Link>
      </li>
    );
  }
}