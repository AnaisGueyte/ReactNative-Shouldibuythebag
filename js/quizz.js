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
    var imgBanner;

    if ( params == 'bag'){
      imgBanner = require('Shouldibuythebag/img/bag.jpg');
      imgSource = require('Shouldibuythebag/img/sac.jpg');
    } else if( params == 'shoes'){
      imgBanner = require('Shouldibuythebag/img/shoes.png');
      imgSource = require('Shouldibuythebag/img/shoesillu.jpg');
    } else {
      imgBanner = require('Shouldibuythebag/img/cintres.jpg');
      imgSource = require('Shouldibuythebag/img/dressillu.jpg');
    }

    return (
      <View style={styles.quizz}>

            <View style={styles.bannerView}>
              <Image style={styles.banner} source={imgBanner}></Image>
            </View>

            <View style={styles.itemsBackground}>
              <Text> { params } </Text>
              <Image style={styles.items} source={imgSource}></Image>
            </View>

      </View>
          );  
    }   
}



const styles = StyleSheet.create({
  quizz:{
    width: 375,
    height: 700,
    backgroundColor: 'white',
  },
  bannerView:{
    width: 375,
    height: 100,
  },
  banner:{
    width: 375,
    height: 100,
  },
itemsBackground: {
    width: 375,
    height: 250, 
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