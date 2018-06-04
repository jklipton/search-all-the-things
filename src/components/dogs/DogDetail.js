import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDog } from '../../../services/dogApi';
import { Link } from 'react-router-dom';

export default class DogDetail extends Component {

  static propTypes = {
    dogID: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    dog: null
  };

  componentDidMount() {
    getDog(this.props.dogID)
      .then(({ petfinder }) => this.setState({ dog: petfinder.pet }));
  }

  handleBack = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.history.goBack();
  };

  parsePhoto = (media) => {
    if(!media.photos) return;

    return media.photos.photo.find((photo) => {
      return photo['@size'] === 'x';
    });
  };

  render() {
    const { dog } = this.state;
    let photo = null;
    let breeds = null;
    if(dog){ 
      photo = this.parsePhoto(dog.media);
      const isArray = dog.breeds.breed[0];
      breeds = isArray ? (
        dog.breeds.breed.map(breed => `${breed.$t} |`)
      ) : (
        dog.breeds.breed.$t
      );
    }

    if(dog === null) return null;

    return (
      <article>
        <div className="container">
          {/* <a href="" onClick={this.handleBack}>Back</a> */}
          <img src={photo.$t}/>
          <h2>{dog.name.$t}</h2>
          <p>Age : {dog.age.$t} | Size: {dog.size.$t} | Sex: {dog.sex.$t}</p>
          <p>
            Breeds : {breeds}
          </p>
          <p> Location: {dog.contact.state.$t}, {dog.contact.zip.$t} </p>
          <p>
            {dog.description.$t}
          </p>
        </div>
      </article>
    );
  }
}