/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Button from 'react-native-button';



class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Should I buy the bag?',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image style={styles.backgroundImage} source={require('./img/bag.jpg')}>
       
        <Text style={styles.welcome}>

          <Text style={styles.title}>SHOULD I BUY THE BAG? 
            {'\n'}
          </Text>
        
  
          <Text style={styles.claim}>
          {'\n'}
          {'\n'}
          Answer this few questions right now to find out if you really should buy that new bag, dress or pair of shoes!
          {'\n'}
          {'\n'}
          </Text>

          <Text>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            <View style={styles.button}>
              <Button style={{top: 15, fontFamily: 'Cochin', fontSize: 20, color: 'white'}} 
                      styleDisabled={{color: 'red'}} 
                      onPress={() => navigate('Items')} >
                      START THE QUIZZ NOW!
              </Button>
            </View>
          </Text>

        </Text>

      </Image>
    );
  }
}

class ItemsScreen extends React.Component {
   static navigationOptions = {
    title: 'Pick an item!',
  };

render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.itemsBackground}>
        
        <Text style={{fontFamily: 'Cochin', fontSize: 20}} >{'\n'}Pick an item to start the quizz{'\n'}</Text>
        
        <Button onPress={() => navigate('Quizz')}><Image style={styles.items} source={require('./img/sac.jpg')}></Image></Button>
        <Button onPress={() => navigate('Quizz')}><Image style={styles.items} source={require('./img/shoesillu.jpg')}></Image></Button>
        <Button onPress={() => navigate('Quizz')}><Image style={styles.items} source={require('./img/dressillu.jpg')}></Image></Button>
      </View>
    );
  }
}


class QuizzScreen extends React.Component {
   static navigationOptions = {
    title: 'Quizz: Should I buy it?',
  };

render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.itemsBackground}>
        
        <Image style={styles.items} source={require('./img/sac.jpg')}></Image>
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    width: 325,
    height: 550,
    backgroundColor:'rgba(0, 0, 0, 0)',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    color:'#FFFFFF',
    fontSize: 50,  
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    textShadowColor: 'grey',
    textShadowOffset: {width: 1, height: 1},
    fontFamily: 'Cochin',
  },
  claim: {
    color:'#FFFFFF',
    fontSize: 25, 
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 10,
    fontFamily: 'Cochin',
  },
  button: {
    width: 270,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
  },
 itemsBackground: {
  width: 375,
  height: 600, 
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
},
items: {
  width: 150,
  height: 150,
  marginBottom: 20,
  borderRadius: 10,
},
});

const shouldibuythebag = StackNavigator({
  Home: { screen: HomeScreen },
  Items: { screen: ItemsScreen },
  Quizz: { screen: QuizzScreen }, 
});

AppRegistry.registerComponent('Shouldibuythebag', () => shouldibuythebag);
