import React from 'react';
import { PlayButton, Progress, Timer, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

const CLIENT_ID = '89289477605a115f4826be4c766dcdb3';
// const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/callback`;
const REDIRECT_URI = 'https://soundcloud.com/thegrindwithkevin';

export default React.createClass({

  render: function () {
    return <div>
      <SoundPlayerContainer
        clientId={CLIENT_ID}
        resolveUrl={REDIRECT_URI}
      >
        <PlayButton />
        <Progress />
        <Timer />
      </SoundPlayerContainer>
    </div>
  }
});