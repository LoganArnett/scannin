import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Route } from 'react-router-native';
import Background from '../assets/brickbg.jpg';
// Components
import Splash from '../components/Splash';
import Scan from '../components/Scan';

export default class App extends Component {
  render() {
    return (
      <Image source={Background} style={styles.background}>
        <StatusBar hidden={true} />
        <Route exact path="/" component={Splash}></Route>
        <Route path="/scan" component={Scan}></Route>
      </Image>
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