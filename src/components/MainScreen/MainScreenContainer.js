import { connect } from 'react-redux';
import { fetchMovies, clearState } from 'actions/movies';
import MainScreen from './MainScreen';

const mapStateToProps = state => ({
  movies: state.get('movies').toJS(),
  isLoading: state.get('isLoading'),
});

const mapDispatchToProps = {
  fetchMovies,
  clearState,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
