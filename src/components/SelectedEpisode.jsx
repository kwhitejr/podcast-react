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
              <div className="box">
                <h2>Episode {selectedEpisode.episode}</h2>
                <h4>{selectedEpisode.name}</h4>
                <h4>{selectedEpisode.date}</h4>
              </div>
              <Image src={selectedEpisode.img} responsive/>
            </Col>
            <Col md={7}>
              <div className="box">
                <h4>Description</h4>
                <p>{selectedEpisode.description}</p>
              </div>
              <div className="box">
                <h4>Links</h4>
                <a href={selectedEpisode.url} target="_blank">{selectedEpisode.url}</a>
              </div>
              <iframe id="sc-widget" src={widgetSource} width="100%" scrolling="no" frameborder="no"></iframe>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3><a href="/">Back to the Main Page</a></h3>
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