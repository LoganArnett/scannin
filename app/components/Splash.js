import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import Logo from '../assets/logo.png';

const Splash = () => {
  return (
      <View style={styles.container} >
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.instructions}>
          Scannin
        </Text>
        <Button
          Component={Link}
          to="/scan"
          title='Begin'
          raised
          iconRight
          icon={{name:'crop-free'}}
          backgroundColor='#333'
          buttonStyle={styles.begin}
          fontSize={20}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 150,
    position: 'absolute',
    top: 100
  },
  begin: {
    borderRadius: 50,
    width: 150,
    marginTop: 180
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.85)'
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(250,250,250,0.8)',
    marginTop: 180,
    marginBottom: 5,
  },
});

export default Splash;