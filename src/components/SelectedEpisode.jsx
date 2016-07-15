import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';

import { SoundCloud } from 'react-soundcloud-widget';
import Header from './Header';

import * as actionCreators from '../action_creators';

export const SelectedEpisode = React.createClass({

  render() {

    const { selectedEpisode } = this.props;
    const widgetSource = "https://w.soundcloud.com/player/?url=" + selectedEpisode.soundcloud;

    return <div>
      <Header />
      <div className="selectedEpisode">
        <Grid>
          <Row className="show-grid">
            <Col md={5}>
              <Image src={selectedEpisode.img} responsive/>
            </Col>
            <Col md={7}>
              <iframe id="sc-widget" src={widgetSource} width="100%" scrolling="no" frameborder="no"></iframe>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <p>{selectedEpisode.description}</p>
              <h4><a href="/">Back to the Main Page</a></h4>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  }

});

function mapStateToProps(state) {
  return {
    selectedEpisode: state.get('selectedEpisode').toJSON()
  };
}

export const SelectedEpisodeContainer = connect(mapStateToProps, actionCreators)(SelectedEpisode);