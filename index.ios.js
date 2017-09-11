/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry} from 'react-native';
import { StackNavigator} from 'react-navigation';

import HomeScreen from './js/home';
import ItemsScreen from './js/items';
import QuizzScreen from './js/quizz';
import EndScreen from './js/endmessage';

const shouldibuythebag = StackNavigator({
  Home: { screen: HomeScreen },
  Items: { screen: ItemsScreen },
  Quizz: { screen: QuizzScreen },
  End: { screen: EndScreen }, 
});

AppRegistry.registerComponent('Shouldibuythebag', () => shouldibuythebag);
