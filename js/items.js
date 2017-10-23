import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions, Navigator } from 'react-navigation';
import Button from 'react-native-button';

class ItemsScreen extends React.Component {

  static navigationOptions = {
    title: 'Should I buy the bag?',
    headerLeft: null,
  };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      
      <View style={styles.itemsBackground}>
        <Text style={{fontFamily: 'Cochin', fontSize: 20}} >{'\n'}Pick an item to start the quizz{'\n'}</Text>
  
        <Button onPress={ () => navigate('Quizz', { item: 'bag' }) }><Image style={styles.items} source={{uri:'/Users/annagueyte/Shouldibuythebag/img/sac.jpg'}}></Image></Button>
        <Button onPress={ () => navigate('Quizz', { item: 'shoes' }) }><Image style={styles.items} source={{uri:'/Users/annagueyte/Shouldibuythebag/img/shoesillu.jpg'}}></Image></Button>
        <Button onPress={ () => navigate('Quizz', { item: 'dress' }) }><Image style={styles.items} source={{uri:'/Users/annagueyte/Shouldibuythebag/img/dressillu.jpg'}}></Image></Button>
      
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

export default ItemsScreen;