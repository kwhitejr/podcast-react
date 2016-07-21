import React from 'react';
import { Carousel } from 'react-bootstrap';

export default React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  componentDidUpdate() {
    this.shakyCam();
  },

  shakyCam() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".slider-row").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1 - 50;
      $('.slider-row').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
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
