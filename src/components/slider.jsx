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
      <h2>Recent Episodes</h2>
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >

        {this.props.sortedEpisodes.slice(0,5).map((episode, i) =>
            <Carousel.Item key={i}>
              <a href={episode.soundcloud}><img width={950} height={600} alt="950x600" src={episode.img}/></a>
              <Carousel.Caption>
                <h1>{episode.episode} - {episode.name} - {episode.date}</h1>
                <h4>{episode.info}</h4>
              </Carousel.Caption>
            </Carousel.Item>
        )}
      </Carousel>
      </div>
    );
  }
});
