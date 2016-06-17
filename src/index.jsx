import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// import './../styles/app.scss';
import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';

import {AppContainer} from './components/App';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const createStoreWithMiddleWare = applyMiddleware(
  remoteActionMiddleware
)(createStoreDevTools);
const store = createStoreWithMiddleWare(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    sortedEpisodes: []
  }
});

const routes = <Route>
  <Route path="/" component={AppContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

/***
const App = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null,
      recentFive: [{soundcloud: ''}, {}, {}, {}, {}],
      allEpisodes: [{soundcloud: ''}, {}, {}, {}, {}],
      episodes: []
    };
  },

  componentDidMount () {
    this.getAllEpisodes();
  },

  getAllEpisodes () {
    $.ajax({
      url: '/episodes',
      method: "GET",
      dataType: "json",
      success: (data) => {
        this.setState({
          episodes: data,
        });
        this.getRecentFive();
        this.sortEpisodes();
      },
      failure: function (err) {
        console.log(err);
      }
    });
  },

  getRecentFive () {
    var recentFive = this.state.episodes
      .sort(function (a, b) {
        if (parseInt(a.episode) > parseInt(b.episode)) {
          return -1;
        } else {
          return 1;
        }
      })
      .slice(0, 5);

    this.setState({
      recentFive: recentFive
    });
  },

  sortEpisodes() {
    // ajax call to server.js
    var allEpisodes = this.state.episodes
      .sort(function (a, b) {
        if (parseInt(a.episode) > parseInt(b.episode)) {
          return -1;
        } else {
          return 1;
        }
      });

    this.setState({
      allEpisodes: allEpisodes
    });
  },

  toggleSlide (selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render () {
    return (
      <div>
        <Header />
        <GridInstance
          index={this.state.index}
          direction={this.state.direction}
          recentFive={this.state.recentFive}
          allEpisodes={this.state.allEpisodes}
          toggleSlide={this.toggleSlide}
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
            <PictureSlider
              index={this.props.index}
              direction={this.props.direction}
              episodes={this.props.recentFive}
              toggleSlide={this.props.toggleSlide}
            />
          </Col>
        </Row>&nbsp;


        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Episodes
              episodes={this.props.allEpisodes}
            />
          </Col>
        </Row>&nbsp;

        <Row className="show-grid">
          <Col xs={6} xsOffset={1}>
            <About />
          </Col>
        </Row>
      </Grid>
    );
  }
});

render(<App/>, document.getElementById('app'));
***/

//  <Col xs={4}>
//   <InfoSlider
//     index={this.props.index}
//     direction={this.props.direction}
//     episodes={this.props.episodes}
//     toggleSlide={this.props.toggleSlide}
//   />
// </Col>


// <Row className="show-grid">
//   <Col xs={10} xsOffset={1}>
//     <Player />
//   </Col>
// </Row>&nbsp;