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
import Detail from './src/components/Detail';
import History from './src/components/History';
import Login from './src/components/Login';
import Category from './src/components/home/Category';

const App: () => React$Node = () => {
  return <View style={{flex: 1}} />;
};

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home}, // 2
    Category: {screen: Category}, //5
    Login: {screen: Login}, // 1
    History: {screen: History}, //3
    Detail: {screen: Detail}, //4
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
