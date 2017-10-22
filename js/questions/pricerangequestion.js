import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, newView, Alert} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';


class PriceRangeQuestionScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Should I buy the ${navigation.state.params.item}?`,
  });

  state = {
    quest:  "How expensive?"
  }
  
  render(){ 

    const { navigate } = this.props.navigation;
    var params = this.props.navigation.state.params.item; 
    var imgBanner;

      if ( params == 'bag'){
      imgBanner = {uri: 'Shouldibuythebag/img/bag.jpg'};
    } else if( params == 'shoes'){
      imgBanner = {uri: 'Shouldibuythebag/img/shoes.png'};
    } else {
      imgBanner = {uri: 'Shouldibuythebag/img/cintres.jpg'};
    }


    return (
     <Container style={styles.quizz}>

        <View style={styles.bannerView}><Image style={styles.banner} source={imgBanner}></Image></View>

        <Container style={styles.question_container}>
          <Text style={styles.question}> {this.state.quest} </Text>
        </Container>
        <Container style={styles.button}>

            <Button bordered danger style={{marginTop: 5, justifyContent: 'center', width: 200, height: 40}} onPress={ () => navigate('RewardQuestion', { item: this.props.navigation.state.params.item} ) }><Text style={{color: 'red'}}>Under 20$</Text></Button>
            <Button bordered danger style={{marginTop: 5, justifyContent: 'center', width: 200, height: 40}} onPress={ () => navigate('AffordQuestion', { item: this.props.navigation.state.params.item} ) } ><Text style={{color: 'red'}}>Between 50 & 100$</Text></Button>
            <Button bordered danger style={{marginTop: 5, justifyContent: 'center', width: 200, height: 40}} onPress={ () => navigate('AffordQuestion', { item: this.props.navigation.state.params.item} ) }><Text style={{color: 'red'}}>Above 100$</Text></Button>
            <Button bordered danger style={{marginTop: 5, justifyContent: 'center', width: 200, height: 40}} onPress={ () => navigate('AffordQuestion', { item: this.props.navigation.state.params.item} ) }><Text style={{color: 'red'}}>Above 200$</Text></Button>
            <Button bordered danger style={{marginTop: 5, justifyContent: 'center', width: 200, height: 40}} onPress={ () => navigate('AffordQuestion', { item: this.props.navigation.state.params.item} ) } ><Text style={{color: 'red'}}>Above 500$</Text></Button>

        </Container>
      </Container>
        );
      
      
    }   
}


const styles = StyleSheet.create({
  quizz:{
    width: 375,
    height: 700,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bannerView:{
    width: 375,
    height: 100,
  },
  banner:{
    width: 375,
    height: 100,
  },
  question_container:{
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  question:{
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Cochin',
    color: 'black',
    marginLeft: 15,
    marginRight: 15,
  },
 button: {
    marginBottom: 120,
  },
});




export default PriceRangeQuestionScreen;

