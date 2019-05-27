import { List, Map } from 'immutable';
import { SET_MOVIES, SET_LOADING, CLEAR_STATE } from 'constants/actionTypes';

const defaultState = Map({
  isLoading: false,
  movies: List(),
});

export default function movies (state = defaultState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.set('isLoading', action.isLoading);
    case SET_MOVIES:
      console.log(action.movies);
      return state.set('movies', List(action.movies));
    case CLEAR_STATE:
      return defaultState;
    default:
      return defaultState;
  }
}
