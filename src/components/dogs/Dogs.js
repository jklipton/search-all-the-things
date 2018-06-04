import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import Loading from './Loading';

export default class Dogs extends Component {
  
  static propTypes = {
    dogs: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
  };

  render() {
    const { dogs, error, loading } = this.props;

    return (
      <section id="content">
        {error && <div>{error}</div>}
        {(!error && loading) && <Loading />}
        {(!error && dogs) && dogs.map(dog => <Dog data={dog}/>)}
      </section>
    );
  }
}