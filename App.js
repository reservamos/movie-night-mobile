import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchMovies } from 'actions/movies';
import { Provider } from 'react-redux';
import store from 'store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  componentDidMount () {
    store.dispatch(fetchMovies('monterrey-cumbres'));
  }

  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}
