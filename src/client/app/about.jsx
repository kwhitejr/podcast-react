import React from 'react';
import { Panel } from 'react-bootstrap';


const title = (
  <h3>About</h3>
);

const About = React.createClass({
  render () {
    return (
      <div id="about">
        <Panel header={title}>
          Panel content
        </Panel>
      </div>
    )
  }
});

export default About;