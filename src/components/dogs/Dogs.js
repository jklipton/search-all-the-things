import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

export default class Dogs extends Component {
  
  static propTypes = {
    images: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
  };

  render() {
    const { images, error, loading } = this.props;

    return (
      <section id="content">
        {error && <div>{error}</div>}
        {(!error && images) && <Dog images={images} loading={loading} error={error}/>}
        {/* <ul>
          {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
        </ul> */}
      </section>
    );
  }
}