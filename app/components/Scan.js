import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, DeviceEventEmitter, ToastAndroid, NativeModules } from 'react-native';
import NFC, { NfcDataType, NdefRecordType } from "react-native-nfc";
import { Link } from 'react-router-native';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    console.log(NativeModules)
    this.state = {
      data: {
        name: 'BLAH'
      }
    }

    this.scanNFC = this.scanNFC.bind(this);
  }
  componentDidMount() {
    this.scanNFC();
  }

  scanNFC() {
    this.setState({data: {name: "Scanning"}});
    console.log('Starting up scan listener');
    NFC.addListener((payload) => {
      console.log('Captured nfc scan w/ payload', payload);
      switch(payload.type) {
        case NfcDataType.NDEF:
          ToastAndroid.show(`NFC Tag Detected`, ToastAndroid.SHORT);
          break;
        case NfcDataType.TAG:
          ToastAndroid.show('Invalid Tag Type Detected (NON-NDEF)', ToastAndroid.SHORT);
          break;
      }
    });
    /*
    NFC.addListener(payload => {
      console.log(payload)
      ToastAndroid.show(payload.type)
        switch (payload.type) {
            case NfcDataType.NDEF:
                let messages = payload.data;
                for (let i in messages) {
                    let records = messages[i];
                    for (let j in records) {
                        let r = records[j];
                        if (r.type === NdefRecordType.TEXT) {
                            ToastAndroid.show(
                                `Tag of type ${r.type} with data ${r.data}`,
                                ToastAndroid.SHORT
                            );
                        } else {
                            ToastAndroid.show(
                                `Non-TEXT tag of type ${r.type} with data ${r.data}`,
                                ToastAndroid.SHORT
                            );
                        }
                    }
                }
                break;

            case NfcDataType.TAG:
                ToastAndroid.show(
                    `The TAG is non-NDEF:\n\n${payload.data.description}`,
                    ToastAndroid.SHORT
                );
                break;
        }
    });
    */
  }

  render() {
    return (
      <View style={styles.container}>
        <Link to="/">
          <Text style={styles.welcome} >
            {JSON.stringify(this.state.data, null, 2)}
          </Text>
        </Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.85)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
})
