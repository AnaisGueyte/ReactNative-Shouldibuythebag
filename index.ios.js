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
import FitMeQuestionScreen from './js/questions/fitmequestion';
import InfluencerQuestionScreen from './js/questions/influencerquestion';
import InfluencerWearQuestionScreen from './js/questions/influencerwearquestion';
import OneTimeUseQuestionScreen from './js/questions/onetimeusequestion';
import ReallyOneTimeUseQuestionScreen from  './js/questions/reallyonetimeusequestion';
import SaleQuestionScreen from './js/questions/salequestion';
import WaitSaleQuestionScreen from './js/questions/waitsalequestion';
import SecondHandQuestionScreen from './js/questions/secondhandquestion';
import SecondHandOnlineQuestionScreen from './js/questions/secondhandonlinequestion';
import PriceQuestionScreen from './js/questions/pricequestion';
import PriceRangeQuestionScreen from './js/questions/pricerangequestion';
import AffordQuestionScreen from './js/questions/affordquestion';
import ReallyAffordQuestionScreen from './js/questions/reallyaffordquestion';
import RewardQuestionScreen from './js/questions/rewardquestion';
import EndScreen from './js/endmessage';


const shouldibuythebag = StackNavigator({
  Home: { screen: HomeScreen },
  Items: { screen: ItemsScreen },
  Quizz: { screen: QuizzScreen },
 
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
  FitMeQuestion: { screen: FitMeQuestionScreen },
  InfluencerQuestion: { screen: InfluencerQuestionScreen },
  InfluencerWearQuestion: { screen: InfluencerWearQuestionScreen },
  OneTimeUseQuestion: { screen: OneTimeUseQuestionScreen },
  ReallyOneTimeUseQuestion: { screen: ReallyOneTimeUseQuestionScreen },
  SaleQuestion: { screen: SaleQuestionScreen },
  WaitSaleQuestion: { screen: WaitSaleQuestionScreen },
  SecondHandQuestion: { screen: SecondHandQuestionScreen },
  SecondHandOnlineQuestion: { screen: SecondHandOnlineQuestionScreen },
  PriceQuestion: { screen: PriceQuestionScreen },
  PriceRangeQuestion: { screen: PriceRangeQuestionScreen },
  AffordQuestion: { screen: AffordQuestionScreen },
  ReallyAffordQuestion: { screen: ReallyAffordQuestionScreen },
  RewardQuestion: { screen: RewardQuestionScreen },

  End: { screen: EndScreen },
});

AppRegistry.registerComponent('Shouldibuythebag', () => shouldibuythebag);
