import React from 'react';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

const clientId = '89289477605a115f4826be4c766dcdb3';

const Player = React.createClass({
  render() {
    return (
      <div>
      <SoundPlayerContainer
        clientId={clientId}
        resolveUrl='https://soundcloud.com/thrilljockey/future-islands-balance'
        streamUrl='https://api.soundcloud.com/tracks/200494743/stream'
        onStartTrack={Function}
        onStopTrack={Function}
      >
        <PlayButton
          className={String}
          playing={Boolean}
          seeking={Boolean}
          seekingIcon={ReactElement}
          onTogglePlay={Function}
          soundCloudAudio={instanceof SoundCloudAudio}
        />
        <Progress
          className={String}
          innerClassName={String}
          value={Number}
          onSeekTrack={Function}
          soundCloudAudio={instanceof SoundCloudAudio}
        />
        <Timer
          className={String}
          duration={Number}
          currentTime={Number}
        />
      </SoundPlayerContainer>
      </div>
    );
  }
});

export default Player;