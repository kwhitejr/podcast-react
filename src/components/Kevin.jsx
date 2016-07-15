import React from 'react';
import { Image } from 'react-bootstrap';

export default React.createClass({

  render () {
    return (
      <div id="kevin">
        <Image src={this.props.currentKevin} title="Click for more Kevin!" onClick={this.props.setCurrentKevin} rounded responsive/>
      </div>
    )
  }
});