import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Button from 'react-native-button';


class QuizzScreen extends React.Component {
   static navigationOptions = {
    title: 'Quizz: Should I buy it?',
  };

render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.itemsBackground}>
        
        <Image style={styles.items} source={require('Shouldibuythebag/img/sac.jpg')}></Image>
  
      </View>
    );
  }  
}


const styles = StyleSheet.create({
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

export default QuizzScreen;