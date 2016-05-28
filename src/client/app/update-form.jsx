import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const UpdateForm = React.createClass({

  render () {
    return (
      <form>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Text</ControlLabel>
          <FormControl type="text" placeholder="Enter text" />
        </FormGroup>
      </form>
    )
  }

});

export default UpdateForm;