import React from 'react';
import {List} from 'immutable';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Episodes from './Episodes';
import Slider from './Slider';
import About from './About';

import * as actionCreators from '../action_creators';

export const App = React.createClass({

  render: function() {
    return <div>
      <Header {...this.props} />
      <Grid className="grid">
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Slider {...this.props} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Episodes {...this.props} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <About {...this.props} />
          </Col>
        </Row>
      </Grid>
    </div>
  }

});

function mapStateToProps(state) {
  return {
    sortedEpisodes: state.get('sortedEpisodes').toJSON(),
  };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);