export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

// export function getEpisodes() {
//   return {
//     type: 'GET_EPISODES',
//     url: 'http://localhost:3000/district',
//     method: 'GET',
//     cb: (response, dispatch) => dispatch(sortEpisodes(response))
//   };
// }

export function setSortedEpisodes(episodes) {
  return {
    type: 'SET_SORTED_EPISODES',
    episodes
  };
}

export function setTracks(track) {
  return {
    type: 'SET_TRACKS',
    tracks
  };
}