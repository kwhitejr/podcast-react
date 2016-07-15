import {Map, List} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function setSortedEpisodes(state, episodes) {
  const sortedEpisodes = episodes
    .sort(function (a, b) {
      if (parseInt(a.episode) > parseInt(b.episode)) {
        return -1;
      } else {
        return 1;
      }
    });

  return state.set('sortedEpisodes', sortedEpisodes);
}

function setSelectedEpisode(state, episode) {

  const newState = Object.assign({}, state, {
    selectedEpisode: Map(episode)
  });

  return state.merge(newState);
}

function setCurrentKevin(state) {
  const kevins = state.get('kevins').toJSON();
  const currentKevin = state.get('currentKevin');
  const max = 3;
  const randomNumber = Math.floor(Math.random() * max);

  const newState = Object.assign({}, state, {
    currentKevin: kevins[randomNumber]
  });

  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SET_SORTED_EPISODES':
    return setSortedEpisodes(state, action.episodes);
  case 'SET_SELECTED_EPISODE':
    return setSelectedEpisode(state, action.episode);
  case 'SET_CURRENT_KEVIN':
    return setCurrentKevin(state);
  }
  return state;
}