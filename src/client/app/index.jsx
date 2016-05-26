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
      episodes: [
        {
          episode: '001',
          name: 'David Stapp',
          info: 'Texan, Legal Mind, Skilled Orator, Questionable Comedian',
          description: 'Met Dave in law school. After three years, I found out that he prefers to go by "David." He\'s a pretty astute fellow, despite his height. As young professionals on the cusp of new careers as attorneys, we share a fear of leading a drab cubicle existence. Do not go gently into that morose good night.',
          date: '2/27/2016',
          img: './assets/images/001davidstapp-900x600.jpg',
          sqimg: './assets/images/001davidstapp-sq.jpg',
          soundcloud: 'https://soundcloud.com/kevin-white-612475908/001-david-stapp-022716'
        },
        {
          episode: '002',
          name: 'DJ Theo Tran',
          info: 'EDM DJ, Jiu-jitsu Ninja, Web Developer, Gun Enthusiast',
          img: './assets/images/002theotran-900x600.jpg',
          sqimg: './assets/images/002theotran-sq.jpg',
          description: 'Theo is my classmate from DevLeague\'s legendary Cohort 8. He is the best damn EDM DJ on the Hawaiian Islands, a jiu-jitsu practitioner, and gun aficionado. He also has the best damn hat collection I ever did see. Theo did me a great favor by composing the intro music for the podcast. Among other things, we discuss our reasons for entering coding bootcamp and what we hope to get out of it.',
          date: '3/6/2016',
          soundcloud: 'https://soundcloud.com/kevin-white-612475908/002-dj-theo-tran-3616'
        },
        {
          episode: '003',
          name: 'Benjamin Pettus',
          info: 'Designer, Web Developer, Yoga Instructor, Coffee Connoiseur',
          img: './assets/images/spices-900x600.jpg',
          sqimg: './assets/images/003benpettus-sq.jpg',
          description: 'Ben is a designer extraordinaire. He was also my classmate at DevLeague, where we shared a great love for good coffee. Ben was instrumental in helping to conceptualize the podcast, and designed its legendary logos. We go deep into his transformative experience as a Mysore Ashtanga yoga student and his journey to becoming a full instructor.',
          date: '3/22/2016'
        },
        {
          episode: '004',
          name: 'Brad Sova',
          info: 'Attorney, Linguist, Gamer, Quick-witted Rascal, Dour Genius',
          img: './assets/images/004bradsova-900x600.jpg',
          sqimg: './assets/images/004bradsova-sq.jpg',
          description: 'Brad is well-known ne\'er-do-well who is not, in fact, well-known, and a disreputable rascal who is not, in fact, disreputable. We discuss why Nintendo cannot hope to successfully develop an open-world Zelda, why Miyamoto-san ought to gracefully retire, and why Tim is so very, very wrong.',
          date: '3/27/2016'
        },
        {
          episode: '005',
          name: 'Dave Yarber',
          info: 'SKY Kombucha Co-Founder, Brewer, Entrepreneur, Attorney',
          img: './assets/images/005daveyarber-900x600.jpg',
          sqimg: './assets/images/005daveyarber-sq.jpg',
          description: 'Dave the tireless co-founder of SKY Kombucha, the best locally brewed on-tap or in-a-bottle kombucha on the island of Oahu, Hawaii. Dave discusses how he and his wife, Shannon, bootstrapped their business whilst getting married, having two kids, hiring employees, getting onto storeshelves, and 1001 other things you need to figure out on the way to building a kombucha empire. If you are interested in learning hard truths about running your own small business, listen to this.',
          date: '4/10/2016'
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
          episodes={this.state.episodes}
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
              episodes={this.props.episodes}
              toggleSlide={this.props.toggleSlide}
            />
          </Col>
        </Row>&nbsp;


        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Episodes
              episodes={this.props.episodes}
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