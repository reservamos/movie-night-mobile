import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Button } from 'react-native-elements';
import MovieCard from 'components/MovieCard';

export default class MainScreen extends Component {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
    })).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  constructor (props) {
    super(props);
    this.renderMovieCard = this.renderMovieCard.bind(this);
    this.onButtonPressed = this.onButtonPressed.bind(this);
  }

  onButtonPressed () {
    const { fetchMovies } = this.props;
    fetchMovies('monterrey-cumbres');
  }

  renderMovieCard () {
    const { movies, navigation } = this.props;

    return movies.map(movie => (
      <TouchableOpacity
        onPress={() => navigation.navigate('MovieDetails', { key: movie.key })}
        key={movie.key}
      >
        <MovieCard
          image={movie.image}
          title={movie.title}
          score={movie.score}
          clasification={movie.clasification}
          duration={movie.duration}
          gender={movie.gender}
        />
      </TouchableOpacity>
    ));
  }

  render () {
    const { movies } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header centerComponent={{ text: 'Selecciona tu pelicula', style: { color: '#fff' } }} />
        <ScrollView>
          <View>
            { movies.length ? this.renderMovieCard() : <Button onPress={this.onButtonPressed} title="Buscar Peliculas" />}
          </View>
        </ScrollView>
      </View>
    );
  }
}
