import React from 'react';
import {List} from 'immutable';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Episodes from './Episodes';
import Slider from './Slider';
import About from './About';

import * as actionCreators from '../action_creators';

export const App = react.createClass({

  render: function() {
    return <div>
      <Header />
      <Grid className="grid">
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Slider />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Episodes />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <About />
          </Col>
        </Row>
      </Grid>
    </div>
  }

});

function mapStateToProps(state) {
  return {
    index: state.get('index'),
    direction: state.get('direction'),
    recentFive: state.get('recentFive').toJSON(),
    allEpisodes: state.get('allEpisodes').toJSON(),
    episodes: state.get('episodes').toJSON()
  };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);