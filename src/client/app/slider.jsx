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
      <Carousel activeIndex={this.props.index} direction={this.props.direction} onSelect={this.props.toggleSlide}>
        <Carousel.Item>
          <img width={950} height={600} alt="900x600" src={this.props.slides[0].img}/>
          <Carousel.Caption>
            <h3>{this.props.slides[0].name}</h3>
            <p>{this.props.slides[0].info}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={600} alt="900x600" src={this.props.slides[1].img}/>
          <Carousel.Caption>
            <h3>{this.props.slides[1].name}</h3>
            <p>{this.props.slides[1].info}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={600} alt="900x600" src={this.props.slides[2].img}/>
          <Carousel.Caption>
            <h3>{this.props.slides[2].name}</h3>
            <p>{this.props.slides[2].info}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={600} alt="900x600" src={this.props.slides[3].img}/>
          <Carousel.Caption>
            <h3>{this.props.slides[3].name}</h3>
            <p>{this.props.slides[3].info}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={600} alt="900x600" src={this.props.slides[4].img}/>
          <Carousel.Caption>
            <h3>{this.props.slides[4].name}</h3>
            <p>{this.props.slides[4].info}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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