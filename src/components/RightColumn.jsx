import React from 'react';
import { Panel } from 'react-bootstrap';
import SocialMediaButtons from './SocialMediaButtons';


export default React.createClass({
  render() {
    const url = "http%3A%2F%2Fthegrindwithkevin.com%2F";

    return (
      <div id="subscribe">
        <Panel>
          Subscribe via the RSS or iTunes links above!
        </Panel>
        <SocialMediaButtons url={url} />
      </div>
    )
  }
});