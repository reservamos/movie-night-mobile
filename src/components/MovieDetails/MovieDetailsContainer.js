import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';

const mapStateToProps = (state, { navigation }) => {
  const movies = state.get('movies').toJS();
  const movieKey = navigation.getParam('key');

  const movie = movies.find(x => x.key === movieKey);

  return { movie };
};

export default connect(mapStateToProps)(MovieDetails);
