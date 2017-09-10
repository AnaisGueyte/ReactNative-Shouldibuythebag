import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Button from 'react-native-button';

class QuizzScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Should I buy the ${navigation.state.params.item}`,
  });

  render(){ 
    var params = this.props.navigation.state.params.item;
    var imgSource;

    if ( params == 'bag'){
      imgSource = require('Shouldibuythebag/img/sac.jpg');
    } else if( params = 'shoes'){
        imgSource = require('Shouldibuythebag/img/shoesillu.jpg');
      } else {
        imgSource = require('Shouldibuythebag/img/dressillu.jpg');
      }

    return (
            <View style={styles.itemsBackground}>
              <Text> { params } </Text>
              <Image style={styles.items} source={imgSource}></Image>
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