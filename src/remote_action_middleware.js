import fetch from 'isomorphic-fetch';
import reducer from './reducer';

export default store => next => action => {
  console.log('in middleware', action);

  return next(action);

  // if (action.type !== 'GET_DISTRICT') return next(action);

  // if (action.type === 'GET_EPISODES') {
  //   fetch(action.url, {
  //     method: action.method,
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json => action.cb(json, store.dispatch));
  // } else {
  //   return next(action);
  // }

}