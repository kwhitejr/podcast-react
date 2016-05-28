import React from 'react';
import { Media, Label } from 'react-bootstrap';


const Episodes = React.createClass({

  componentDidMount () {
  },

  componentDidUpdate () {
  },

  render () {
    return (
      <div id="episodes">
        <h2>All Episodes</h2>
          {this.props.episodes.map(function(episode, i) {
            return (
              <div key={i}>
                <Media>
                 <Media.Left>
                    <img width={150} height={150} src={episode.sqimg} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <a href={episode.soundcloud} target="_blank">
                      <Media.Heading>{episode.episode} - {episode.name} - {episode.date}</Media.Heading>
                    </a>
                    <p>{episode.description}</p>
                    <h4><a href={episode.url}>{episode.label}</a></h4>
                  </Media.Body>
                </Media>
                <hr />
              </div>
            )
          })}
      </div>
    )
  }
});

export default Episodes;