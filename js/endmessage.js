import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';

class EndScreen extends React.Component {

    // Title options for this view
    static navigationOptions = ({ navigation }) => ({
        title: `Should I buy the ${navigation.state.params.item}`,
    });

  
    render(){ 
  
        const { navigate } = this.props.navigation;

        var item = this.props.navigation.state.params.item;
        var params = this.props.navigation.state.params.message;
        var imgBanner = {uri: 'Shouldibuythebag/img/bag.jpg'};


        if ( params == 'bag'){
      imgBanner = {uri: 'Shouldibuythebag/img/bag.jpg'};
    } else if( params == 'shoes'){
      imgBanner = {uri: 'Shouldibuythebag/img/shoes.png'};
    } else {
      imgBanner = {uri: 'Shouldibuythebag/img/cintres.jpg'};
    }


        // differents answer possible
        var reallywhy = "Really?! \n Why do you even take the test then?!";
        var reallywhy_gif = {uri: 'https://media.giphy.com/media/3ornkbl5jev6mIz4oU/giphy.gif'};

        var thankHonesty = "I appreciate your honesty. Honesty made you save cash for something better.";
        var thankHonesty_gif = {uri: 'https://media.giphy.com/media/dEugCWatqhdQY/giphy.gif'};

        var dontBuyIt = "Hum... Don't buy it.";
        var dontBuyIt_gif = {uri: 'https://media.giphy.com/media/l0MYSSCIrv8aUaBsQ/giphy.gif'};

        var jeezdontbuyit = "Jeez! Don't buy it!";
        var jeezdontbuyit_gif =  {uri: 'https://media.giphy.com/media/EsmlrgWNx5v0Y/giphy.gif'};

        var treatyoself = "Well then, why do you have doubt about buying the " +  item  +  "? \n Treat yo self!";
        var treatyoself_gif = {uri: 'https://media.giphy.com/media/lAbxg2qCfOwKY/giphy.gif'};
        
        var lifetooshort = "Life is too short, buy the " + item ;
        var lifetooshort_gif = { uri: 'https://media.giphy.com/media/iIneJpUbaEZva/giphy.gif'};


        // Switch case

        var message;
        var gif;

      if (params ==  'really'){
        message = reallywhy;
        gif = reallywhy_gif;
    } else if (params =='honesty'){
        message = thankHonesty;
        gif = thankHonesty_gif;
    } else if (params == 'dontbuyit'){
        message = dontBuyIt;
        gif = dontBuyIt_gif;
     } else if( params == 'jeez'){
        message = jeezdontbuyit;
        gif = jeezdontbuyit_gif;
     } else if( params ==  'treatyoself'){
        message = treatyoself;
        gif = treatyoself_gif;
     } else if ( params ==  'lifetooshort'){
        message = lifetooshort;
        gif = lifetooshort_gif;
     }

        // Return the view
        return (
            <View style={styles.quizz}>

                <View style={styles.bannerView}>
                    <Image style={styles.banner} source={imgBanner}></Image>
                </View>

                <View style={styles.itemsBackground}>
                    <Text style={styles.question}>  { message }  </Text>
                    <Image style={{width: 300, height: 200}} source={ gif }></Image>
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
    color: 'black',
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
