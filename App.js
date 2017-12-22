/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Card from './src/components/Card/Card';

import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>
        <View style = {styles.contentContainerStyle}>
          <Header />
          <Card />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = {
  contentContainerStyle : {
    flex: 1,
    backgroundColor: '#dbd1b1',

  }
}
