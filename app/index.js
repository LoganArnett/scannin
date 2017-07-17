import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { NativeRouter as Router } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore()

import App from './containers/App';

export default class Routes extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});