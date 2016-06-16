export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function getEpisodes() {
  return {
    type: 'GET_EPISODES',
    url: 'http://localhost:3000/district',
    method: 'GET',
    cb: (response, dispatch) => dispatch(sortEpisodes(response))
  };
}

export function sortEpisodes(episodes) {
  return {
    type: 'SORT_EPISODES',
    episodes
  };
}