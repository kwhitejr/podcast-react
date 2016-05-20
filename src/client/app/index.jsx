import React from 'react';
import {render} from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';


import Header from './header.jsx';
import PictureSlider from './slider.jsx';
// import InfoSlider from './infoSlider.jsx';
import About from './about.jsx';
import Episodes from './episodes.jsx';
// import Player from './player.jsx';
// import CustomPlayer from './player2.jsx';


const App = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null,
      slides: [
        {
          name: 'Kevin White',
          info: 'He is a guy who loves coffee.',
          img: './assets/images/cups-900x600.jpg'
        },
        {
          name: 'Theo Tran',
          info: 'He is a guy who loves music.',
          img: './assets/images/fox-900x600.jpg'
        },
        {
          name: 'Chaz Leong',
          info: 'He is a guy who loves katsu curry chicken.',
          img: './assets/images/spices-900x600.jpg'
        },
        {
          name: 'Jesse Copeland',
          info: 'He is a guy who loves the empire.',
          img: './assets/images/stories-900x600.jpg'
        },
        {
          name: 'Tony Gaskell',
          info: 'He is a guy who loves puters.',
          img: './assets/images/fox-900x600.jpg'
        }
      ]
    };
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
          slides={this.state.slides}
          toggleSlide={this.toggleSlide}
        />
      </div>
    );
  }
});

const GridInstance = React.createClass({
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <PictureSlider
              index={this.props.index}
              direction={this.props.direction}
              slides={this.props.slides}
              toggleSlide={this.props.toggleSlide}
            />
          </Col>
        </Row>&nbsp;


        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Episodes />
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


//  <Col xs={4}>
//   <InfoSlider
//     index={this.props.index}
//     direction={this.props.direction}
//     slides={this.props.slides}
//     toggleSlide={this.props.toggleSlide}
//   />
// </Col>


// <Row className="show-grid">
//   <Col xs={10} xsOffset={1}>
//     <Player />
//   </Col>
// </Row>&nbsp;