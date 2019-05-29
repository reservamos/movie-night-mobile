import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Video } from 'expo';
import styles from './styles';

export default class MovieDetails extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      trailer: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  constructor (props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress () {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render () {
    const { movie } = this.props;
    const { trailer, title } = movie;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 16 } }}
          leftComponent={(
            <Button
              icon={{ name: 'arrow-back', color: 'white', size: 25 }}
              onPress={this.onButtonPress}
            />
          )}
        />
        <View style={styles.wrapper}>
          <Video
            source={{ uri: trailer }}
            style={{ width: '100%', height: 300 }}
            resizeMode="cover"
            shouldPlay
          />
        </View>
      </SafeAreaView>
    );
  }
}
