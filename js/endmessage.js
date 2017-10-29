import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';

class EndScreen extends React.Component {

    // Title options for this view
     static navigationOptions = ({ navigation }) => ({
        title: `Should I buy the ${navigation.state.params.item}`,
        headerLeft: null,
    });

    whatBanners(item){
          if (Platform.OS === 'android'){
            if ( item == 'bag'){
                    imgBanner = {uri: 'redbag'};
                } else if( item == 'shoes'){
                    imgBanner = {uri: 'shoes'};
                } else {
                    imgBanner = {uri: 'cintres'};
                }
            } else {
               if ( item == 'bag'){
                    imgBanner = {uri: '/Users/annagueyte/Shouldibuythebag/img/bag.jpg'};
                  } else if( item == 'shoes'){
                    imgBanner = {uri: '/Users/annagueyte/Shouldibuythebag/img/shoes.png'};
                  } else {
                    imgBanner = {uri: '/Users/annagueyte/Shouldibuythebag/img/cintres.jpg'};
                  }
            }      
          return imgBanner;
        }
  
    render(){ 
  
        const { navigate } = this.props.navigation;
        var imgBanner;
        var item = this.props.navigation.state.params.item;
        var params = this.props.navigation.state.params.message;
    
        imgBanner = this.whatBanners(this.props.navigation.state.params.item);
      
        // differents answer possible
        var reallywhy = "Really?! \n Why do you even take the test then?!";
        var reallywhy_gif;
        var thankHonesty = "I appreciate your honesty. Honesty made you save cash for something better.";
        var thankHonesty_gif;
        var dontBuyIt = "Hum... Don't buy it.";
        var dontBuyIt_gif;
        var jeezdontbuyit = "Jeez! Don't buy it!";
        var jeezdontbuyit_gif;
        var treatyoself = "Well then, why do you have doubt about buying the " +  item  +  "? \n Treat yo self!";
        var treatyoself_gif;
        var lifetooshort = "Life is too short, buy the " + item ;
        var lifetooshort_gif;
        
        if (Platform.OS === 'android'){
            reallywhy_gif = {uri: 'really'};
            thankHonesty_gif = {uri: 'honesty'};
            dontBuyIt_gif = {uri: 'dontbuyit'};
            jeezdontbuyit_gif = {uri: 'jeez'}; 
            treatyoself_gif = {uri: 'treatyoself'};
            lifetooshort_gif = {uri: 'lifeistooshort'};           
        } else {
            reallywhy_gif = {uri: '/Users/annagueyte/Shouldibuythebag/img/really.gif'}; 
            thankHonesty_gif = {uri: '/Users/annagueyte/Shouldibuythebag/img/honesty.gif'}; 
            dontBuyIt_gif = {uri: '/Users/annagueyte/Shouldibuythebag/img/dontbuyit.gif'};
            jeezdontbuyit_gif = {uri: '/Users/annagueyte/Shouldibuythebag/img/jeez.gif'};
            treatyoself_gif = {uri: '/Users/annagueyte/Shouldibuythebag/img/treatyoself.gif'}; 
            lifetooshort_gif  = { uri: '/Users/annagueyte/Shouldibuythebag/img/lifeistooshort.gif'};            
        }
 
        var message;
        var gif;

        if (params ==  'really'){
            message = reallywhy;
            gif = reallywhy_gif;
        } else if (params == 'honesty'){
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

                <Container style={styles.button}>
                    <Button bordered dark style={{justifyContent: 'center', marginTop: 20, width: 90}} onPress={() => navigate('Items')}><Text>Back home</Text></Button>      
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
