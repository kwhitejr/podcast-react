import React from 'react';
import { Carousel } from 'react-bootstrap';

const InfoSlider = React.createClass({
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
      <Carousel activeIndex={this.props.index} direction={this.props.direction} onSelect={this.toggleSlide} pauseOnHover={true} interval={2000} >
        <Carousel.Item>
          <img width={300} height={500} alt="300x600" src="./assets/images/sidebar-300x600.jpg"/>
          <div >
            <Carousel.Caption>
              <h3>{this.props.slides[0].name}</h3>
              <p>{this.props.slides[0].info}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div width={300} height={600}>
            <h3>{this.props.slides[1].name}</h3>
            <p>{this.props.slides[1].info}</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div width={300} height={600}>
            <h3>{this.props.slides[2].name}</h3>
            <p>{this.props.slides[2].info}</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div width={300} height={600}>
            <h3>{this.props.slides[2].name}</h3>
            <p>{this.props.slides[2].info}</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div width={300} height={600}>
            <h3>{this.props.slides[2].name}</h3>
            <p>{this.props.slides[2].info}</p>
          </div>
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



export default InfoSlider;