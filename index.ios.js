/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { StackNavigator} from 'react-navigation';

import HomeScreen from './js/home';
import ItemsScreen from './js/items';
import QuizzScreen from './js/quizz';
import EndScreen from './js/endmessage';

const shouldibuythebag = StackNavigator({
  Items: { screen: ItemsScreen },  
  Quizz: { screen: QuizzScreen },
  End: { screen: EndScreen },
  Home: { screen: HomeScreen },
});

export default class Home extends React.Component {
	render(){
		return(
			<HomeScreen/>
		);
	}
}

AppRegistry.registerComponent('Shouldibuythebag', () => shouldibuythebag);
