import React from 'react';
import { Carousel } from 'react-bootstrap';

const PictureSlider = React.createClass({
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
      <Carousel activeIndex={this.props.index} direction={this.props.direction} onSelect={this.props.toggleSlide} slide={true} interval={3000}>
        <Carousel.Item>
          <a href={this.props.episodes[0].soundcloud}><img width={950} height={600} alt="950x600" src={this.props.episodes[0].img}/></a>
          <Carousel.Caption>
            <h1>{this.props.episodes[0].episode} - {this.props.episodes[0].name} - {this.props.episodes[0].date}</h1>
            <h4>{this.props.episodes[0].info}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href={this.props.episodes[1].soundcloud}><img width={950} height={600} alt="950x600" src={this.props.episodes[1].img}/></a>
          <Carousel.Caption>
            <h1>{this.props.episodes[1].episode} - {this.props.episodes[1].name} - {this.props.episodes[1].date}</h1>
            <h4>{this.props.episodes[1].info}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={950} height={600} alt="950x600" src={this.props.episodes[2].img}/>
          <Carousel.Caption>
            <h1>{this.props.episodes[2].episode} - {this.props.episodes[2].name} - {this.props.episodes[2].date}</h1>
            <h4>{this.props.episodes[2].info}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={950} height={600} alt="950x600" src={this.props.episodes[3].img}/>
          <Carousel.Caption>
            <h1>{this.props.episodes[3].episode} - {this.props.episodes[3].name} - {this.props.episodes[3].date}</h1>
            <h4>{this.props.episodes[3].info}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={950} height={600} alt="950x600" src={this.props.episodes[4].img}/>
          <Carousel.Caption>
            <h1>{this.props.episodes[4].episode} - {this.props.episodes[4].name} - {this.props.episodes[4].date}</h1>
            <h4>{this.props.episodes[4].info}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
});

// const PictureSlide = React.createClass({
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <Carousel.Item>
//           <img width={900} height={600} alt="900x600" src={this.props.slide.img}/>
//           <Carousel.Caption>
//             <h3>{this.props.slide.name}</h3>
//             <p>{this.props.slide.info}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </div>
//     );
//   }
// });



export default PictureSlider;