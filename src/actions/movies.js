import { SET_MOVIES, SET_LOADING, CLEAR_STATE } from 'constants/actionTypes';
import getMovies from 'network/getMovies';

export function setMovies (movies) {
  return {
    movies,
    type: SET_MOVIES,
  };
}

export function setLoading (isLoading) {
  return {
    isLoading,
    type: SET_LOADING,
  };
}

export function clearState () {
  return {
    type: CLEAR_STATE,
  };
}

export function fetchMovies (cityKey) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const movies = await getMovies(cityKey);

      dispatch(setMovies(movies));
      dispatch(setLoading(false));
    } catch {
      dispatch(setLoading(false));
    }
  };
}
