import Results from './results';
import Form from './form';
import React, { Component } from 'react';
class Filter extends Component {
  render(){
    return (
      <div>
        <Results/>
        <Form/>
      </div>
    );
  }
}
export default Filter;
