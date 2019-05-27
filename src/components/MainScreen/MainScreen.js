import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import MovieCard from 'components/MovieCard';

export default class MainScreen extends Component {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
    })).isRequired,
  }

  constructor (props) {
    super(props);
    this.renderMovieCard = this.renderMovieCard.bind(this);
  }

  componentDidMount () {
    const { fetchMovies } = this.props;

    fetchMovies('monterrey-cumbres');
  }

  renderMovieCard () {
    const { movies } = this.props;

    if (!movies) return <Text>Sin Resultados</Text>;

    return movies.map(movie => (
      <MovieCard
        image={movie.image}
        title={movie.title}
        score={movie.score}
        key={movie.key}
      />
    ));
  }

  render () {
    const movies = this.renderMovieCard();

    return (
      <ScrollView>
        <View>
          {movies}
        </View>
      </ScrollView>
    );
  }
}
