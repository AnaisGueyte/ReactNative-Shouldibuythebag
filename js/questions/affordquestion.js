import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, newView, Alert} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';


class AffordQuestionScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Should I buy the ${navigation.state.params.item}?`,
  });

  state = {
    quest:  "Can you afford it?"
  }
  
  render(){ 

    const { navigate } = this.props.navigation;
    var params = this.props.navigation.state.params.item; 
    var imgBanner;

    if ( params == 'bag'){
      imgBanner = require('Shouldibuythebag/img/bag.jpg');
    } else if( params == 'shoes'){
      imgBanner = require('Shouldibuythebag/img/shoes.png');
    } else {
      imgBanner = require('Shouldibuythebag/img/cintres.jpg');
    }

    return (
     <View style={styles.quizz}>

       <View style={styles.bannerView}><Image style={styles.banner} source={imgBanner}></Image></View>

        <View style={styles.itemsBackground}>
           <Text style={styles.question}> {this.state.quest} </Text>

          <View style={styles.button}>

            <Button bordered danger style={{justifyContent: 'center', width: 85, height: 70, marginRight: 20}} onPress={ () => navigate('End', { item: this.props.navigation.state.params.item, message: 'jeez' } ) }><Text style={{color: 'red'}}>No</Text></Button>
            <Button bordered success style={{justifyContent: 'center', width: 85, height: 70, marginLeft: 20}} onPress={ () => navigate('ReallyAffordQuestion', { item: this.props.navigation.state.params.item} ) } ><Text style={{color: 'green'}}>Yes</Text></Button>

          </View>
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
  question:{
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontFamily: 'Cochin',
  },
  button: {
    width: 375,
    height: 50,
    borderColor: '#fff',
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
  },
  submit:{
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});


export default AffordQuestionScreen;
