import React from 'react';
import {render} from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import './../styles/app.scss';


import Header from './header.jsx';
import UpdateForm from './update-form.jsx';


const Update = React.createClass({
  getInitialState() {
    return {

    };
  },

  componentDidMount () {
  },

  render () {
    return (
      <div>
        <Header />
        <GridInstance

        />
      </div>
    );
  }
});

const GridInstance = React.createClass({

  render() {
    return (
      <Grid
        className="grid"
      >
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <UpdateForm

            />
          </Col>
        </Row>&nbsp;

    );
  }

});

render(<Update/>, document.getElementById('update'));

