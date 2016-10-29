import React from 'react';
import { Panel } from 'react-bootstrap';


const title = (
  <h2>About the Podcast</h2>
);

export default React.createClass({
  render () {
    return (
      <div id="about">
        <Panel header={title}>
          <i>The Grind with Kevin</i> is coffee, coding, and candid conversation with people from all walks of life. I've been inspired by many of the conversational podcasts out there. I am interested in hearing and sharing what everyday people have to say about the various topics that interest them. My goal is to share a cup of coffee with each of them, prevaricate on the issues of the day, and inject a bit of humor and personal growth where I can. Thanks for listening!
        </Panel>
      </div>
    )
  }
});