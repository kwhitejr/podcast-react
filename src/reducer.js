import {Map, List} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function sortEpisodes(state, episodes) {

  const sortedEpisodes = episodes
    .sort(function (a, b) {
      if (parseInt(a.episode) > parseInt(b.episode)) {
        return -1;
      } else {
        return 1;
      }
    });

  return state.set('sortedEpisodes', Map(sortedEpisodes));
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SORT_EPISODES':
    return sortEpisodes(state, action.episodes);
  }
  return state;
}