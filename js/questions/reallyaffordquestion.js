import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, newView, Alert} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';


class ReallyAffordQuestionScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Should I buy the ${navigation.state.params.item}?`,
  });

  state = {
    quest:  "Really?? You can you afford it?!"
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

            <Button bordered danger style={{justifyContent: 'center', width: 85, height: 70, marginRight: 20}} onPress={ () => navigate('End', { item: this.props.navigation.state.params.item, message: 'jeez' } ) }><Text style={{color: 'red'}}>No</Text></Button>
            <Button bordered success style={{justifyContent: 'center', width: 85, height: 70, marginLeft: 20}} onPress={ () => navigate('RewardQuestion', { item: this.props.navigation.state.params.item} ) } ><Text style={{color: 'green'}}>Yes</Text></Button>


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
  question_container:{
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  question:{
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Cochin',
    color: 'black',
    fontSize: 25,
    fontFamily: 'Cochin',
    color: 'black',
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    width: 375,
    height: 100,
    borderColor: '#fff',
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});


export default ReallyAffordQuestionScreen;

