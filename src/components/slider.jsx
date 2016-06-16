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


        // <Carousel.Item>
        //   <a href={this.props.sortedEpisodes[0].soundcloud}><img width={950} height={600} alt="950x600" src={this.props.sortedEpisodes[0].img}/></a>
        //   <Carousel.Caption>
        //     <h1>{this.props.sortedEpisodes[0].episode} - {this.props.sortedEpisodes[0].name} - {this.props.sortedEpisodes[0].date}</h1>
        //     <h4>{this.props.sortedEpisodes[0].info}</h4>
        //   </Carousel.Caption>
        // </Carousel.Item>
        // <Carousel.Item>
        //   <a href={this.props.sortedEpisodes[1].soundcloud}><img width={950} height={600} alt="950x600" src={this.props.sortedEpisodes[1].img}/></a>
        //   <Carousel.Caption>
        //     <h1>{this.props.sortedEpisodes[1].episode} - {this.props.sortedEpisodes[1].name} - {this.props.sortedEpisodes[1].date}</h1>
        //     <h4>{this.props.sortedEpisodes[1].info}</h4>
        //   </Carousel.Caption>
        // </Carousel.Item>
        // <Carousel.Item>
        //   <img width={950} height={600} alt="950x600" src={this.props.sortedEpisodes[2].img}/>
        //   <Carousel.Caption>
        //     <h1>{this.props.sortedEpisodes[2].episode} - {this.props.sortedEpisodes[2].name} - {this.props.sortedEpisodes[2].date}</h1>
        //     <h4>{this.props.sortedEpisodes[2].info}</h4>
        //   </Carousel.Caption>
        // </Carousel.Item>
        // <Carousel.Item>
        //   <img width={950} height={600} alt="950x600" src={this.props.sortedEpisodes[3].img}/>
        //   <Carousel.Caption>
        //     <h1>{this.props.sortedEpisodes[3].episode} - {this.props.sortedEpisodes[3].name} - {this.props.sortedEpisodes[3].date}</h1>
        //     <h4>{this.props.sortedEpisodes[3].info}</h4>
        //   </Carousel.Caption>
        // </Carousel.Item>
        // <Carousel.Item>
        //   <img width={950} height={600} alt="950x600" src={this.props.sortedEpisodes[4].img}/>
        //   <Carousel.Caption>
        //     <h1>{this.props.sortedEpisodes[4].episode} - {this.props.sortedEpisodes[4].name} - {this.props.sortedEpisodes[4].date}</h1>
        //     <h4>{this.props.sortedEpisodes[4].info}</h4>
        //   </Carousel.Caption>
        // </Carousel.Item>
