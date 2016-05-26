import React from 'react';
import { Media, Label } from 'react-bootstrap';


const Episodes = React.createClass({
  render () {
    return (
      <div >
        <h2>All Episodes</h2>
        <Media id="episodes">
         <Media.Left>
            <img width={150} height={150} src={this.props.episodes[4].sqimg} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.episodes[4].episode} - {this.props.episodes[4].name} - {this.props.episodes[4].date} <Label bsStyle="success">Coming Soon!</Label></Media.Heading>
            <p>{this.props.episodes[4].description}</p>
            <h4><a href="http://www.skykombucha.com">www.skykombucha.com</a></h4>
          </Media.Body>
        </Media>
        <hr />

        <Media>
         <Media.Left>
            <img width={150} height={150} src={this.props.episodes[3].sqimg} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.episodes[3].episode} - {this.props.episodes[3].name} - {this.props.episodes[3].date} <Label bsStyle="success">Coming Soon!</Label></Media.Heading>
            <p>{this.props.episodes[3].description}</p>
          </Media.Body>
        </Media>
        <hr />

        <Media>
         <Media.Left>
            <img width={150} height={150} src={this.props.episodes[2].sqimg} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.episodes[2].episode} - {this.props.episodes[2].name} - {this.props.episodes[2].date}</Media.Heading>
            <p>{this.props.episodes[2].description}</p>
            <h4><a href="http://www.benjaminpettus.com">www.benjaminpettus.com</a></h4>
          </Media.Body>
        </Media>
        <hr />

        <Media>
         <Media.Left>
            <img width={150} height={150} src={this.props.episodes[1].sqimg} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading><a href={this.props.episodes[1].soundcloud}>{this.props.episodes[1].episode} - {this.props.episodes[1].name} - {this.props.episodes[1].date}</a></Media.Heading>
            <p>{this.props.episodes[1].description}</p>
            <h4><a href="http://www.theotrance.com">www.theotrance.com</a></h4>
            <h4><a href="https://soundcloud.com/theotranofficial">Theo on SoundCloud</a></h4>
          </Media.Body>
        </Media>
        <hr />

        <Media>
         <Media.Left>
            <img width={150} height={150} src={this.props.episodes[0].sqimg} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading><a href={this.props.episodes[0].soundcloud}>{this.props.episodes[0].episode} - {this.props.episodes[0].name} - {this.props.episodes[0].date}</a></Media.Heading>
            <p>{this.props.episodes[0].description}</p>
          </Media.Body>
        </Media>
        <hr />

      </div>
    )
  }
});

export default Episodes;