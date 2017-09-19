import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, newView, Alert} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';


class QualityQuestionScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Should I buy the ${navigation.state.params.item}?`,
  });

  state = {
    quest: 'Is it good quality?\n(I mean, will it last after two washes, 2 miles, two years?)'
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

          <Container style={styles.button}>

            <Button bordered danger style={{justifyContent: 'center', width: 85, height: 70, marginRight: 20}} onPress={ () => navigate('End',  { item: this.props.navigation.state.params.item, message: 'honesty' } ) }><Text style={{color: 'red'}}>No</Text></Button>
            <Button bordered success style={{justifyContent: 'center', width: 85, height: 70, marginLeft: 20}} onPress={ () => navigate('Needit',  { item: this.props.navigation.state.params.item } ) } ><Text style={{color: 'green'}}>Yes</Text></Button>

          </Container>
        </View>

      </View>
        );
      
      
    }   
}


const styles = StyleSheet.create({
  quizz:{
    width: 375,
    height: 700,
    backgroundColor: 'blue',
  },
  bannerView:{
    width: 375,
    height: 100,
    backgroundColor: 'red',
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
    backgroundColor: 'green',
  },
  question:{
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontFamily: 'Cochin',
    backgroundColor: 'black',
  },
  button: {
    width: 375,
    height: 50,
    borderColor: '#fff',
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});


export default QualityQuestionScreen;

