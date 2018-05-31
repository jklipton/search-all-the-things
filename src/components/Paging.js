import React, { Component } from 'react';

export default class Paging extends Component {

    handlePage(increment) {
        const { page, onPage } = this.props;
        onPage({ page: page + increment });
      }

    render() {

        const { page, perPage, results } = this.props;

        if (results === null) return (
            <section class="paging" id="welcome">
            Hello!  You like dogs?  We got dogs?  Choose your favorite breed from the dropdown menu below.
            </section>
        )

        if (results === 0) return (
            <section class="paging">
            0 results found =(, try another breed!
            </section>
        )

        const totalPages = Math.ceil(results / perPage);
    
        return (
            <section class="paging">
                <span> Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
            </section>
        );
      }
    }