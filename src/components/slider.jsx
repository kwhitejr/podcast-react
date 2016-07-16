import React from 'react';
import { Carousel } from 'react-bootstrap';

export default React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    // alert('selected=' + selectedIndex + ', direction=' + e.direction);
    console.log(this.props);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <div className="slider">
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={3000} rounded>

          {this.props.sortedEpisodes.slice(0,5).map((episode, i) =>
              <Carousel.Item key={i}>
                <a href="/#/selectedEpisode" onClick={this.props.setSelectedEpisode.bind(this, episode)}><img src={episode.img}/></a>
                <Carousel.Caption>
                  <h1>{episode.name}</h1>
                  <h4>{episode.info}</h4>
                </Carousel.Caption>
              </Carousel.Item>
          )}
        </Carousel>
      </div>
    );
  }
});
