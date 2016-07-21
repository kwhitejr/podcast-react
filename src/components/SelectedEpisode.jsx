import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';

import { SoundCloud } from 'react-soundcloud-widget';
import Header from './Header';

import '../app.js';
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
                <ul className="share-menu">
                  <li className="share-menu-item"><RedditButton url={selectedEpisode["soundcloud-urlencoded"]}/></li>
                  <li className="share-menu-item"><PinterestButton url={selectedEpisode["soundcloud-urlencoded"]}/></li>
                  <li className="share-menu-item"><GooglePlusButton url={selectedEpisode["soundcloud-urlencoded"]}/></li>
                  <li className="share-menu-item"><FacebookButton url={selectedEpisode["soundcloud-urlencoded"]}/></li>
                  <li className="share-menu-item"><TwitterButton url={selectedEpisode["soundcloud-urlencoded"]}/></li>
                </ul>
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

  windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  },

  render() {
    const url = "https://twitter.com/intent/tweet/" +
           "?text=Check%20out%20this%20podcast!" +
           "&url=+" + this.props.url +
           "&via=thegrindwithkev";

    return <div>
      <a className="custom-share-button twitter"
         onClick={this.windowPopup.bind(this, url, 500, 300)}>
        <span className="custom-share-button-icon"><svg viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-twitter"><path className="svg-icon-path" d="M48,9.1c-1.4,2-3,3.7-4.9,5.1c0,0.3,0,0.7,0,1.3c0,2.6-0.4,5.3-1.2,7.9C41.2,26,40,28.6,38.4,31c-1.6,2.4-3.4,4.6-5.6,6.4 c-2.2,1.9-4.8,3.3-7.9,4.4c-3.1,1.1-6.3,1.7-9.8,1.7C9.6,43.5,4.6,42,0,39.1c0.7,0.1,1.5,0.1,2.4,0.1c4.6,0,8.6-1.4,12.2-4.2 c-2.1,0-4-0.7-5.7-2c-1.7-1.3-2.8-2.9-3.5-4.9c0.7,0.1,1.3,0.2,1.9,0.2c0.9,0,1.7-0.1,2.6-0.3c-2.3-0.5-4.2-1.6-5.6-3.4 c-1.5-1.8-2.2-3.9-2.2-6.3v-0.1c1.4,0.8,2.9,1.2,4.4,1.2C5.1,18.6,4,17.4,3.2,16C2.4,14.5,2,13,2,11.3c0-1.8,0.4-3.4,1.3-5 c2.5,3,5.4,5.4,9,7.3c3.5,1.8,7.3,2.8,11.3,3c-0.2-0.8-0.2-1.5-0.2-2.3c0-2.7,1-5,2.9-7s4.2-2.9,7-2.9c2.8,0,5.2,1,7.2,3.1 c2.2-0.4,4.3-1.2,6.2-2.4c-0.8,2.3-2.2,4.1-4.3,5.4C44.2,10.5,46.1,10,48,9.1z"/></svg></span>
        <span className="custom-share-button-label"></span>
      </a>
    </div>
  }
});

const FacebookButton = React.createClass({
    windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  },

  render() {
    const url = "https://www.facebook.com/sharer/sharer.php" +
            "?u=" + this.props.url;

    return <div>
      <a className="custom-share-button facebook"
         onClick={this.windowPopup.bind(this, url, 500, 300)}>
        <span className="custom-share-button-icon"><svg viewBox="48 0 48 48" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-facebook"><path className="svg-icon-path" d="M84.5,0.3V8h-4.5c-1.7,0-2.8,0.3-3.3,1c-0.6,0.7-0.9,1.7-0.9,3.1v5.5h8.5L83,26.1h-7.3V48h-8.8V26.1h-7.4v-8.5h7.4v-6.3 c0-3.6,1-6.3,3-8.3c2-2,4.7-3,8-3C80.7,0,82.9,0.1,84.5,0.3z"/></svg></span>
        <span className="custom-share-button-label"></span>
      </a>
    </div>
  }
});

const GooglePlusButton = React.createClass({
    windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  },

  render() {
    const url = "https://plus.google.com/share" +
            "?url=" + this.props.url;

    return <div>
      <a className="custom-share-button google"
         onClick={this.windowPopup.bind(this, url, 500, 300)}>
        <span className="custom-share-button-icon"><svg viewBox="96 0 48 48" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-google"><path className="svg-icon-path" d="M117.5,23c0,0.7,0.3,1.4,0.9,2c0.6,0.7,1.4,1.3,2.2,2c0.9,0.6,1.7,1.3,2.6,2.1c0.9,0.8,1.6,1.8,2.2,3 c0.6,1.2,0.9,2.6,0.9,4.1c0,1.7-0.5,3.4-1.4,5c-1.4,2.3-3.4,4.1-6.1,5.2c-2.7,1.1-5.5,1.7-8.6,1.7c-2.5,0-4.9-0.4-7.1-1.2 c-2.2-0.8-3.8-2.1-4.9-4c-0.7-1.2-1.1-2.4-1.1-3.8c0-1.6,0.4-3,1.3-4.3c0.9-1.3,2-2.4,3.4-3.3c2.5-1.6,6.4-2.5,11.7-2.9 c-0.6-0.8-1.1-1.5-1.4-2.1c-0.3-0.6-0.5-1.3-0.5-2.1c0-0.7,0.2-1.5,0.6-2.5c-0.9,0.1-1.5,0.1-2,0.1c-2.8,0-5.2-0.9-7.2-2.8 c-2-1.9-2.9-4.2-2.9-7.1c0-1.6,0.3-3.1,1-4.6c0.7-1.5,1.6-2.7,2.9-3.8c1.5-1.3,3.2-2.2,5.3-2.8c2-0.6,4.1-0.9,6.3-0.9h12.1l-4,2.5 H120c1.4,1.2,2.5,2.5,3.2,3.8c0.7,1.3,1.1,2.9,1.1,4.6c0,1.4-0.2,2.6-0.7,3.7s-1,2-1.7,2.7c-0.7,0.7-1.3,1.3-2,1.9 c-0.7,0.6-1.2,1.2-1.7,1.8C117.7,21.7,117.5,22.3,117.5,23z M113.3,45.4c1.1,0,2.2-0.1,3.2-0.4c1-0.2,2-0.6,2.9-1.1 s1.6-1.2,2.1-2.1c0.5-0.9,0.8-2,0.8-3.1c0-0.5-0.1-1-0.2-1.4c-0.1-0.5-0.3-0.9-0.4-1.2c-0.1-0.3-0.4-0.7-0.8-1.2 c-0.4-0.5-0.7-0.8-0.9-1c-0.2-0.2-0.6-0.6-1.1-1c-0.5-0.4-0.9-0.7-1.1-0.8c-0.2-0.1-0.6-0.4-1.2-0.9c-0.6-0.5-1-0.7-1.1-0.8 c-0.3,0-0.8-0.1-1.4-0.1c-1,0-2,0.1-3,0.2s-2,0.4-3.1,0.7c-1.1,0.3-2,0.8-2.8,1.3c-0.8,0.5-1.5,1.3-2,2.1c-0.5,0.9-0.8,1.9-0.8,3 c0,1.3,0.3,2.5,1,3.6c0.7,1,1.6,1.8,2.6,2.4c1.1,0.6,2.2,1,3.4,1.3C110.8,45.2,112.1,45.4,113.3,45.4z M113.3,20.2 c0.7,0,1.5-0.2,2.3-0.5c0.8-0.3,1.4-0.7,1.9-1.3c1-1.1,1.5-2.6,1.5-4.6c0-1.1-0.2-2.3-0.5-3.6c-0.3-1.3-0.8-2.5-1.4-3.7 c-0.6-1.2-1.4-2.2-2.4-3c-1-0.8-2.1-1.2-3.4-1.2c-0.8,0-1.6,0.2-2.4,0.6c-0.8,0.4-1.4,0.9-1.9,1.5c-0.9,1.1-1.4,2.7-1.4,4.6 c0,0.9,0.1,1.8,0.3,2.8c0.2,1,0.5,2,0.9,3c0.4,1,0.9,1.9,1.5,2.7c0.6,0.8,1.3,1.4,2.2,1.9C111.3,19.9,112.3,20.2,113.3,20.2z M136.7,20.1h6.1v3.1h-6.1v6.3h-3v-6.3h-6.1v-3.1h6.1v-6.3h3V20.1z"/></svg></span>
        <span className="custom-share-button-label"></span>
      </a>
    </div>
  }
});

const PinterestButton = React.createClass({
    windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  },

  render() {
    const url = "https://www.pinterest.com/pin/create/button/" +
     "?url=" + this.props.url +
     "&description=Check%20out%20this%20podcast!" +
     "&hashtags=coffee,development,comedy";

    return <div>
      <a className="custom-share-button pinterest"
         onClick={this.windowPopup.bind(this, url, 500, 300)}>
        <span className="custom-share-button-icon"><svg viewBox="0 0 33 33" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-pinterest"><path className="svg-icon-path" d="M 16.5,0C 7.387,0,0,7.387,0,16.5s 7.387,16.5, 16.5,16.5c 9.113,0, 16.5-7.387, 16.5-16.5S 25.613,0, 16.5,0z M 18.1,22.047 c-1.499-0.116-2.128-0.859-3.303-1.573C 14.15,23.863, 13.36,27.113, 11.021,28.81 c-0.722-5.123, 1.060-8.971, 1.888-13.055c-1.411-2.375, 0.17-7.155, 3.146-5.977 c 3.662,1.449-3.171,8.83, 1.416,9.752c 4.79,0.963, 6.745-8.31, 3.775-11.325 c-4.291-4.354-12.491-0.099-11.483,6.135c 0.245,1.524, 1.82,1.986, 0.629,4.090c-2.746-0.609-3.566-2.775-3.46-5.663 c 0.17-4.727, 4.247-8.036, 8.337-8.494c 5.172-0.579, 10.026,1.898, 10.696,6.764 C 26.719,16.527, 23.63,22.474, 18.1,22.047z"/></svg></span>
        <span className="custom-share-button-label"></span>
      </a>
    </div>
  }
});

const RedditButton = React.createClass({
    windowPopup(url, width, height) {
    // Calculate the position of the popup so
    // it’s centered on the screen.
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  },

  render() {
    const url = "http://www.reddit.com/submit/"+
     "?url=" + this.props.url;

    return <div>
      <a className="custom-share-button reddit"
         onClick={this.windowPopup.bind(this, url, 500, 300)}>
        <span className="custom-share-button-icon"><svg viewBox="0 0 33 33" preserveAspectRatio="xMidYMid meet" className="svg-icon svg-icon-reddit"><path className="svg-icon-path" d="M 8,20A2,2 2520 1 0 12,20A2,2 2520 1 0 8,20zM 20,20A2,2 2520 1 0 24,20A2,2 2520 1 0 20,20zM 20.097,24.274 C 20.612,23.869 21.359,23.957 21.765,24.472 C 22.171,24.987 22.082,25.734 21.567,26.14 C 20.133,27.27 17.948,28 16,28 C 14.052,28 11.867,27.27 10.433,26.14 C 9.918,25.734 9.829,24.987 10.235,24.472 C 10.641,23.957 11.388,23.869 11.903,24.274 C 12.729,24.925 14.363,25.625 16,25.625 C 17.637,25.625 19.271,24.925 20.097,24.274 ZM 32,16c0-2.209-1.791-4-4-4c-1.504,0-2.812,0.83-3.495,2.057c-2.056-1.125-4.561-1.851-7.29-2.019 l 2.387-5.36l 4.569,1.319C 24.581,9.163, 25.693,10, 27,10c 1.657,0, 3-1.343, 3-3s-1.343-3-3-3 c-1.143,0-2.136,0.639-2.642,1.579L 19.267,4.109c-0.57-0.164-1.173,0.116-1.414,0.658l-3.243,7.282 c-2.661,0.187-5.102,0.907-7.114,2.007C 6.813,12.83, 5.504,12, 4,12c-2.209,0-4,1.791-4,4 c0,1.635, 0.981,3.039, 2.387,3.659C 2.134,20.41, 2,21.194, 2,22c0,5.523, 6.268,10, 14,10 c 7.732,0, 14-4.477, 14-10c0-0.806-0.134-1.589-0.387-2.34C 31.019,19.040, 32,17.635, 32,16z M 27,5.875 c 0.621,0, 1.125,0.504, 1.125,1.125s-0.504,1.125-1.125,1.125s-1.125-0.504-1.125-1.125S 26.379,5.875, 27,5.875z M 2,16c0-1.103, 0.897-2, 2-2 c 0.797,0, 1.487,0.469, 1.808,1.145c-1.045,0.793-1.911,1.707-2.552,2.711C 2.521,17.56, 2,16.84, 2,16z M 16,29.625 c-6.42,0-11.625-3.414-11.625-7.625s 5.205-7.625, 11.625-7.625c 6.42,0, 11.625,3.414, 11.625,7.625S 22.42,29.625, 16,29.625z M 28.744,17.856 c-0.641-1.004-1.507-1.918-2.552-2.711C 26.513,14.469, 27.203,14, 28,14c 1.103,0, 2,0.897, 2,2 C 30,16.84, 29.48,17.56, 28.744,17.856z"/></svg></span>
        <span className="custom-share-button-label"></span>
      </a>
    </div>
  }
});