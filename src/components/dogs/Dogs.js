import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import Loading from './Loading';
import styles from './Dogs.css';

export default class Dogs extends Component {
  
  static propTypes = {
    dogs: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
    location: PropTypes.object.isRequired,
  };

  render() {
    const { dogs, error, loading } = this.props;

    return (
      <section id="content" className={styles.dogs}>
        {error && <div>{error}</div>}
        {(!error && loading) && <Loading />}
        {(!error && dogs) && dogs.map(dog => <Dog key={dog.id.$t} data={dog}/>)}
        {(!error && !dogs && !loading) && <p>No doggos found :(</p>}
      </section>
    );
  }
}