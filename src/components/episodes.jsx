import React from 'react';
import { Media, Label, Image } from 'react-bootstrap';
import SocialMediaButtons from './SocialMediaButtons';


export default React.createClass({
  getInitialState() {
    return {
    }
  },

  componentDidMount () {
  },

  componentDidUpdate () {
  },

  render () {
    return (
      <div id="episodes" className="episodes">
        <h2>All Episodes</h2>
        {this.props.sortedEpisodes.map((episode, i) =>
          <div key={i}>
            <Media>
              <Media.Left>
                <Image width={150} height={150} src={episode.sqimg} alt="Image"/>
              </Media.Left>
              <Media.Body>
                <a href="/#/selectedEpisode" onClick={this.props.setSelectedEpisode.bind(this, episode)}>
                  <Media.Heading>{episode.episode} - {episode.name} - {episode.date}</Media.Heading>
                </a>
                <p>{episode.description}</p>
                <h4><a href={episode.url} target="_blank">{episode.label}</a></h4>
              </Media.Body>
            </Media>
            <hr />
          </div>
        )}
      </div>
    )
  }
});