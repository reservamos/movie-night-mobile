import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import MainScreen from 'components/MainScreen';
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

  }

  render () {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
