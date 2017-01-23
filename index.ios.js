

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Home from './app/components/Home'

 class navigationTest extends Component {
  render() {
    return (
      <NavigatorIOS
          initialRoute={{
            component: Home,
            title: 'Home',
            navigationBarHidden: true
          }}
          style={{flex:1}}
        />
    );
  }
};

AppRegistry.registerComponent('navigationTest', () => navigationTest);
