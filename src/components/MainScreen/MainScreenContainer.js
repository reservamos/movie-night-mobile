import { connect } from 'react-redux';
import { fetchMovies } from 'actions/movies';
import MainScreen from './MainScreen';

const mapStateToProps = state => ({
  movies: state.get('movies').toJS(),
});

const mapDispatchToProps = {
  fetchMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
