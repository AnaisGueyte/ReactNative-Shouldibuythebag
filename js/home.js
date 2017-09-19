import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Container, Content, Button } from 'native-base';


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Should I buy the bag?',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image style={styles.backgroundImage} source={require('Shouldibuythebag/img/bag.jpg')}>
       
        <Container style={styles.welcome}>

          <Text style={styles.title}>SHOULD I BUY THE BAG?</Text>
      
          <Text style={styles.claim}>
            Answer this few questions right now to find out if you really should buy that new bag, dress or pair of shoes!
          </Text>

          <Container style={styles.button_container} >
          <Button bordered danger style={styles.button} styleDisabled={{color: 'red'}} onPress={() => navigate('Items')} >
              <Text style={styles.button_text}>START THE TEST</Text>
          </Button>
          </Container>
       
        </Container>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: undefined,
    height: undefined,
  },
  welcome: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: undefined,
    height: undefined,
    alignItems: 'center',
  },
  title: {
    color:'#000000',
    fontSize: 50,  
    flex: 1,
    textShadowColor: 'rgba(255,255,255,0.4)',
    textShadowOffset: {width: 1, height: 1},
    top: 40,
    fontFamily: 'Cochin',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: undefined,
  },
  claim: {
    color:'#000000',
    fontSize: 28, 
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: 'rgba(255,255,255,0.4)',
    borderRadius: 10,
    fontFamily: 'Cochin',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    top: 20,
  },
  button_container: {
    justifyContent: 'center',
  },
  button: {
    top: 10,
    borderRadius: 10,
    width: 300, 
    height: 70, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text:{
    color:'#000000',
    fontSize: 25, 
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: 'rgba(255,255,255,0.4)',
    fontFamily: 'cochin', 
    fontWeight: 'bold', 
    fontSize: 20, 
  },
});

export default HomeScreen;