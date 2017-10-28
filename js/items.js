import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Alert, Platform } from 'react-native';
import { PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import { StackNavigator, NavigationActions, Navigator } from 'react-navigation';
import Button from 'react-native-button';

class ItemsScreen extends React.Component {

  static navigationOptions = {
    title: 'Should I buy the bag?',
    headerLeft: null,
  };

  render() {
    var imgBag;
    var imgShoes;
    var imgDress;

    if (Platform.OS === 'android'){
      imgBag ={ uri: 'sac'};
      imgShoes ={ uri: 'shoesillu'};
      imgDress ={ uri: 'dressillu'};
    } else{
      imgBag ={ uri:'/Users/annagueyte/Shouldibuythebag/img/illubag.jpg'};
      imgShoes ={ uri:'/Users/annagueyte/Shouldibuythebag/img/shoesillu.jpg'};
      imgDress ={ uri:'/Users/annagueyte/Shouldibuythebag/img/dressillu.jpg'};
      }

    const { navigate } = this.props.navigation;

    return (
      
      <View style={styles.itemsBackground}>
        <Text style={{fontFamily: 'Cochin', fontSize: 20}} >{'\n'}Pick an item to start the quizz{'\n'}</Text>
  
        <Button onPress={ () => navigate('Quizz', { item: 'bag' }) }><Image style={styles.items} source={imgBag}></Image></Button>
        <Button onPress={ () => navigate('Quizz', { item: 'shoes' }) }><Image style={styles.items} source={imgShoes}></Image></Button>
        <Button onPress={ () => navigate('Quizz', { item: 'dress' }) }><Image style={styles.items} source={imgDress}></Image></Button>
      
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