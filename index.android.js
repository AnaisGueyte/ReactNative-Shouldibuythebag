/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import Button from 'react-native-button';

import HomeScreen from './js/home';
import ItemsScreen from './js/items';
import QuizzScreen from './js/quizz';

const shouldibuythebag = StackNavigator({
    Home: { screen: HomeScreen },
    Items: { screen: ItemsScreen },
    Quizz: { screen: QuizzScreen },    
});

export default shouldibuythebag;

AppRegistry.registerComponent('Shouldibuythebag', () => shouldibuythebag);
