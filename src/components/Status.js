import React, { Component } from 'react';

export default class Status extends Component {


    render() {

        const { perPage } = this.props;
    
        return (
            <section id="status">
                  I am a header, search here.
                  breed and subbreed drop down
                  YOUR CURRENT SEARCH IS VISIBLE HERE, COUNT
                  VIEW PAGE NUMBER CLICK TO NEXT PAGE, DISABLE
            </section>
        );
      }
    }