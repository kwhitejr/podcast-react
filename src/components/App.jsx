import React from 'react';
import {List} from 'immutable';
import {connect} from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import Header from './Header';
import Episodes from './Episodes';
import RightColumn from './RightColumn';
import Slider from './Slider';
import About from './About';
import Kevin from './Kevin';

import * as actionCreators from '../action_creators';

export const App = React.createClass({

  componentDidMount: function () {
    this.loadEpisodes();
  },

  componentDidUpdate: function () {
    this.smoothScroll();
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

  smoothScroll: function () {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  },

  render: function() {
    return <div>
      <Header {...this.props} />
      <Grid className="grid">
        <Row className="show-grid slider-row">
          <Col xs={6} xsOffset={3}>
            <Slider {...this.props} />
          </Col>
        </Row>

        <Row id="episode-row" className="show-grid">
          <Col sm={12} md={5} mdOffset={1}>
            <Episodes {...this.props} />
          </Col>
          <Col xsHidden smHidden md={5}>
            <RightColumn />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={5} mdOffset={1}>
            <About {...this.props} />
          </Col>
          <Col md={5}>
            <Kevin {...this.props} />
          </Col>
        </Row>
        <a href="#" className="back-to-top" style={{display: "inline"}}>
          <i className="fa fa-arrow-circle-up"></i>
        </a>
      </Grid>
    </div>
  }

});

function mapStateToProps(state) {
  return {
    sortedEpisodes: state.get('sortedEpisodes'),
    selectedEpisode: state.get('selectedEpisode'),
    kevins: state.get('kevins'),
    currentKevin: state.get('currentKevin')
  };
}


export const AppContainer = connect(mapStateToProps, actionCreators)(App);