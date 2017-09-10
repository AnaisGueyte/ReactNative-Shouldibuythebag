import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Button from 'react-native-button';



class ItemsScreen extends React.Component {
   static navigationOptions = {
    title: 'Pick an item!',
  };

render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.itemsBackground}>
        
        <Text style={{fontFamily: 'Cochin', fontSize: 20}} >{'\n'}Pick an item to start the quizz{'\n'}</Text>
        
        <Button onPress={() => navigate('Quizz')}><Image style={styles.items} source={require('Shouldibuythebag/img/sac.jpg')}></Image></Button>
        <Button onPress={() => navigate('Quizz')}><Image style={styles.items} source={require('Shouldibuythebag/img/shoesillu.jpg')}></Image></Button>
        <Button onPress={() => navigate('Quizz')}><Image style={styles.items} source={require('Shouldibuythebag/img/dressillu.jpg')}></Image></Button>
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