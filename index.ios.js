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
import WantItQuestionScreen from './js/questions/wantitquestion';
import QualityQuestionScreen from './js/questions/qualityquestion';
import NeedIQuestionScreen from './js/questions/needitquestion';
import ImpulseShoppingQuestionScreen from './js/questions/impulseshoppingquestion';
import OnlineShoppingQuestionScreen from './js/questions/onlineshoppingquestion';
import OnlineShoppingReturnQuestionScreen from './js/questions/onlineshoppingreturnquestion';
import OnlineShoppingReturnEasyQuestionScreen from './js/questions/onlineshoppingreturneasyquestion';
import OwnQuestionScreen from './js/questions/ownquestion';
import TooManyQuestionScreen from './js/questions/toomanyquestion';
import FitQuestionScreen from './js/questions/fitquestion';
import EndScreen from './js/endmessage';


const shouldibuythebag = StackNavigator({
  Home: { screen: HomeScreen },
  Items: { screen: ItemsScreen },
  Quizz: { screen: QuizzScreen },
  End: { screen: EndScreen }, 
  WantItQuestion: { screen: WantItQuestionScreen },
  QualityQuestion: { screen: QualityQuestionScreen },
  Needit: { screen: NeedIQuestionScreen }, 
  ImpulseShoppingQuestion: { screen: ImpulseShoppingQuestionScreen },
  OnlineShoppingQuestion: { screen: OnlineShoppingQuestionScreen },
  OnlineShoppingReturnQuestion: { screen: OnlineShoppingReturnQuestionScreen },
  OnlineShoppingReturnEasyQuestion: { screen: OnlineShoppingReturnEasyQuestionScreen },
  OwnQuestion: { screen: OwnQuestionScreen },
  TooManyQuestion: { screen: TooManyQuestionScreen },
  FitQuestion: { screen: FitQuestionScreen },
});

AppRegistry.registerComponent('Shouldibuythebag', () => shouldibuythebag);
