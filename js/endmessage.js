import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';

class EndScreen extends React.Component {

static navigationOptions = ({ navigation }) => ({
    title: `Should I buy the ${navigation.state.params.item}`,
  });

  
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

    var reallywhy = "Really? \n Why do you even take the test then?!";
    var reallywhy_gif = {uri: 'https://media.giphy.com/media/3ornkbl5jev6mIz4oU/giphy.gif'};

    return (
      <View style={styles.quizz}>

         <View style={styles.bannerView}>
          <Image style={styles.banner} source={imgBanner}></Image>
        </View>

        <View style={styles.itemsBackground}>
            <Text style={styles.question}>  { reallywhy }  </Text>
            <Image style={{width: 300, height: 200}} source={reallywhy_gif}></Image> 
             
        </View>
            <Container>
            <Button bordered primary style={{marginTop: 20, width: 85, height: 50}} onPress={() => navigate('Home')}>
                <Text style={{justifyContent: 'center'}}> Home</Text>
            </Button>
            </Container> 

    </View>
      );  
  }   
}


const styles = StyleSheet.create({
  quizz:{
    width: 375,
    height: 700,
    backgroundColor: 'white',
    justifyContent: 'center',
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
itemsBackground: {
    width: 375,
    height: 350,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question:{
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Cochin',
    marginBottom: 20,
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
});


export default EndScreen;
