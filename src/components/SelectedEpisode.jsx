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
              <div>
                <TwitterButton />
                <FacebookButton />
              </div>
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

const TwitterButton = React.createClass({
  render() {
    return <div>
      <a className="custom-share-button twitter js-social-share" href="https://twitter.com/intent/tweet/
           ?text=Check%20out%20this%20podcast!
           &url=https%3A%2F%2Fsoundcloud.com%2Fthegrindwithkevin%2F011-postmortem-team-eve-61816
           &via=thegrindwithkev"
         target="_blank">
        <span className="custom-share-button-icon"><svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-twitter"><path className="svg-icon-path" d="M10.8,3.5c0,0.1,0,0.2,0,0.3c0,3.3-2.5,7-7,7c-1.4,0-2.7-0.3-3.8-1c0.2,0,0.4,0,0.6,0c1.1,0,2.2-0.5,3.1-1.2 c-1.1,0-2-0.7-2.3-1.7c0.2,0,0.3,0,0.5,0s0.4,0,0.7-0.1c-1.1-0.2-2-1.2-2-2.4l0,0c0.3,0.2,0.7,0.3,1.1,0.3C1,4.3,0.6,3.5,0.6,2.7 c0-0.5,0.1-0.8,0.3-1.2c1.2,1.6,3,2.5,5,2.6c0-0.2-0.1-0.4-0.1-0.6c0-1.3,1.1-2.4,2.5-2.4c0.7,0,1.4,0.3,1.8,0.8 c0.6-0.1,1.1-0.3,1.6-0.6c-0.2,0.6-0.6,1.1-1.1,1.4c0.5-0.1,1-0.2,1.4-0.4C11.7,2.8,11.2,3.2,10.8,3.5z"/></svg></span>
        <span className="custom-share-button-label">Share on Twitter</span>
      </a>
    </div>
  }
});

const FacebookButton = React.createClass({
  render() {
    return <div>
      <a className="custom-share-button facebook js-social-share" href="https://www.facebook.com/sharer/sharer.php
          ?u=https%3A%2F%2Fsoundcloud.com%2Fthegrindwithkevin%2F011-postmortem-team-eve-61816"
          target="_blank">
        <span className="custom-share-button-icon"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-facebook"><path className="svg-icon-path" d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg></span>
        <span className="custom-share-button-label">Share on Facebook</span>
      </a>
    </div>
  }
});