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

  componentDidMount: function () {
    this.loadEpisodes();
  },

  loadEpisodes: function () {
    $.ajax({
      url: 'http://localhost:3000/episodes',
      method: "GET",
      dataType: "json",
      success: (data) => {
        console.log(data);
        this.props.setSortedEpisodes(data);
      },
      failure: function (err) {
        console.log(err);
      }
    });
  },

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
    sortedEpisodes: state.get('sortedEpisodes'),
  };
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);