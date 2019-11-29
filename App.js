/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/home/Home';
import Detail from './src/components/details/Detail';
import History from './src/components/History';
import Login from './src/components/Login';

const App: () => React$Node = () => {
  return <View style={{flex: 1}} />;
};

const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login}, // 1
    Home: {screen: Home}, // 2
    History: {screen: History}, //3
    Detail: {screen: Detail}, //4
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
