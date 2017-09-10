
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
      <Image style={styles.backgroundImage} source={require('Shouldibuythebag/img/bag.jpg')}>
       
        <Text style={styles.welcome}>

          <Text style={styles.title}>SHOULD I BUY THE BAG?</Text>
      
          <Text style={styles.claim}>
          {'\n'}
          {'\n'}
          Answer this few questions right now to find out if you really should buy that new bag, dress or pair of shoes!
          {'\n'}
          {'\n'}
          </Text>

        </Text>

        <View style={styles.button}>
          <Button style={{top: 15, fontFamily: 'cochin', fontSize: 20, color: 'white'}} 
                  styleDisabled={{color: 'red'}} 
                  onPress={() => navigate('Items')} >
                  START THE QUIZZ NOW!
          </Button>
        </View>

      </Image>
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
    height: 400,
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
});

export default HomeScreen;