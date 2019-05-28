import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Video } from 'expo';

export default class MovieDetails extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      trailer: PropTypes.string,
    }).isRequired,
  }

  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {
    const { movie } = this.props;
    const { trailer, title } = movie;

    return (
      <View>
        <Header centerComponent={{ text: title, style: { color: '#fff' } }} />
        <Video source={{ uri: trailer }} style={{ width: '100%', height: 300 }} shouldPlay />
      </View>
    );
  }
}
