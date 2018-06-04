import React, { Component } from 'react';
import './Paging.css';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    onPage: PropTypes.func.isRequired,
    perPage: PropTypes.number,
    results: PropTypes.any,
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {

    const { page, perPage, results } = this.props;

    if(results === null) return <section className="paging"> </section>;
        

    if(results === 0) return (
      <section className="paging">
            0 results found =(, try another breed!
      </section>
    );

    const totalPages = Math.ceil(results / perPage);
    
    return (
      <section className="paging">
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
        <span> Page {page} of {totalPages}</span>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
      </section>
    );
  }
}