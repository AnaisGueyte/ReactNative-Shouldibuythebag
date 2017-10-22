  import React, { Component } from 'react';
  import { StyleSheet, Text, View, Image} from 'react-native';
  import { Container, Button } from 'native-base';
  import { StackNavigator, NavigationActions, Navigator } from 'react-navigation';

  class QuizzScreen extends React.Component {

    constructor() {
        super()
          // First question on opening
        this.state = {
           quest: 'Do you really like it?',
         }
     }

     static item = 

    static navigationOptions = ({ navigation }) => ({
      title: `Should I buy the ${navigation.state.params.item}?`,
    });

    // Catches the item selected to display the right banner on top of the quizz
    whatBanner(params){
      var imgBanner;
      if ( params == 'bag'){
        imgBanner = {uri: 'Shouldibuythebag/img/bag.jpg'};
      } else if( params == 'shoes'){
        imgBanner = {uri: 'Shouldibuythebag/img/shoes.png'};
      } else {
        imgBanner = {uri: 'Shouldibuythebag/img/cintres.jpg'};
      }
      return imgBanner
    }

 var really = this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'End', params: {item: this.props.navigation.state.params.item, message: 'really'} }));
      var thankHonesty = this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'End', params: {item: this.props.navigation.state.params.item, message: 'honesty'} }));
      var dontbuyit = this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'End', params: {item: this.props.navigation.state.params.item, message: 'dontbuyit'} }));
      var jeez = this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'End', params: {item: this.props.navigation.state.params.item, message: 'jeez'} }));
      var treatyoself = this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'End', params: {item: this.props.navigation.state.params.item, message: 'treatyoself'} }));
      var lifetooshort = this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'End', params: {item: this.props.navigation.state.params.item, message: 'lifetooshort'} }));


    // Reacts to every no answer
    answerNo(){
      
      var quest = this.state.quest;

     

      if (quest == 'Do you really like it?'){
        really;
      }

      if (quest == 'Do you really want it?'){
        really;
      }

      if (quest == 'Is it good quality?'){
        honesty;
      }

      if (quest == 'Do you need it?'){
        honesty;
      }
      if (quest == 'Is it an impulse shopping situation?'){
        this.setState({quest:  "Is it an online shopping situation?"})
        this.setState({under_question: ''})
        
      }
      if (quest == 'Is it an online shopping situation?'){
        this.setState({quest:  "Do you already own something similar?"})
        this.setState({under_question: ''})
      }
       if (quest == "Have you check the return policy?"){
        this.setState({quest:  "Can you return the item easily if it doesn't fit?"})
        this.setState({under_question: ''})
      }
       if (quest == "Can you return the item easily if it doesn't fit?"){
        this.setState({quest: "Do you already own something similar?"})
        this.setState({under_question: ''})
      }
       if (quest == "Do you already own something similar?"){
        this.setState({quest:  "Have you check the return policy?"})
        this.setState({under_question: ''})
      }
      if (quest == "Do you feel like you already have too many" + ${navigation.state.params.item} + "?"){
        // no
      }
       if (quest == "Can you return the item easily if it doesn't fit?"){
        this.setState({quest: "Does it even fit?!"})
        this.setState({under_question: ''})
      } 
      if (quest == "Does it even fit?!"){
        this.setState({quest: "Do you want this " + this.props.navigation.state.params.item  + " because you saw a blogger/celebrity wear it on Instagram?"})
        this.setState({under_question: ''})
      } 
      if (quest == "Do you want this " + this.props.navigation.state.params.item  + " because you saw a blogger/celebrity wear it on Instagram?"){
        this.setState({quest: "Would you still buy it if that Influencer wasn't wearing it?"})
        this.setState({under_question: ''})
      } 
       if (quest == "Would you still buy it if that Influencer wasn't wearing it?"){
        this.setState({quest: "Will you wear it more than one time?"})
        this.setState({under_question: '(We all know the party dress situation)'})
      } 
      if (quest == "Would you still buy it if that Influencer wasn't wearing it?"){
        this.setState({quest: "Will you wear it more than one time?"})
        this.setState({under_question: '(We all know the party dress situation)'})
      } 
       if (quest == "Will you wear it more than one time?"){
        this.setState({quest: "Is it on sale"})
        this.setState({under_question: ''})
      } 
      if (quest == "Is it on sale"){
        this.setState({quest: "Is it second hand?"})
        this.setState({under_question: ''})
      }
      if (quest == "Is it on sale"){
        this.setState({quest: "Is it second hand?"})
        this.setState({under_question: ''})
      }
      if (quest == "Is it second hand?"){
        this.setState({quest: "Is it expensive?"})
        this.setState({under_question: ''})
      }
      if (quest == "Is it expensive?"){
        this.setState({quest: "How expensive?"})
        this.setState({under_question: ''})
      }
      if (quest == "Can you afford it?"){
        this.setState({quest: "Really?? You can you afford it?!"})
        this.setState({under_question: ''})
      }
      if (quest == "Really?? You can you afford it?!"){
        this.setState({quest: "Do you feel like you deserve to reward or gift yourself lately?"})
        this.setState({under_question: ''})
      }
      if (quest == "Do you feel like you deserve to reward or gift yourself lately?"){
        // End -> treat yo self
      }
    }

    answerYes(){

      var quest = this.state.quest;

      if (quest == 'Do you really like it?'){
        this.setState({quest: 'Do you really want it?'})
      }

      if (quest == 'Do you really want it?'){
        this.setState({quest: 'Is it good quality?'})
        this.setState({under_question: '(I mean, will it last after two washes, 2 miles, two years?)'})
      }

      if (quest == 'Is it good quality?'){
        this.setState({quest: 'Do you need it?'})
        this.setState({under_question: ''})
      }

      if (quest == 'Do you need it?'){
        this.setState({quest:  "Is it an impulse shopping situation?"})
        this.setState({under_question: '(Or do you just need a hug?)'})
      }
      if (quest == 'Is it an impulse shopping situation?'){
        dontbuyit;
      }
      if (quest == 'Is it an online shopping situation?'){
        this.setState({quest:  "Have you check the return policy?"})
        this.setState({under_question: ''})
      }
       if (quest == "Have you check the return policy?"){
        this.setState({quest:  "Can you return the item easily if it doesn't fit?"})
        this.setState({under_question: ''})
      }
       if (quest == "Can you return the item easily if it doesn't fit?"){
        this.setState({quest: "Do you already own something similar?"})
        this.setState({under_question: ''})
      }
       if (quest == "Do you already own something similar?"){
        // No
      }
      if (quest == "Do you feel like you already have too many" + ${navigation.state.params.item} + "?"){
        // no
      }
       if (quest == "Can you return the item easily if it doesn't fit?"){
        this.setState({quest: "Does it even fit?!"})
        this.setState({under_question: ''})
      } 
      if (quest == "Does it even fit?!"){
        this.setState({quest: "Do you want this " + this.props.navigation.state.params.item  + " because you saw a blogger/celebrity wear it on Instagram?"})
        this.setState({under_question: ''})
      } 
      if (quest == "Do you want this " + this.props.navigation.state.params.item  + " because you saw a blogger/celebrity wear it on Instagram?"){
        this.setState({quest: "Would you still buy it if that Influencer wasn't wearing it?"})
        this.setState({under_question: ''})
      } 
       if (quest == "Would you still buy it if that Influencer wasn't wearing it?"){
        this.setState({quest: "Will you wear it more than one time?"})
        this.setState({under_question: '(We all know the party dress situation)'})
      } 
      if (quest == "Would you still buy it if that Influencer wasn't wearing it?"){
        this.setState({quest: "Will you wear it more than one time?"})
        this.setState({under_question: '(We all know the party dress situation)'})
      } 
       if (quest == "Will you wear it more than one time?"){
        this.setState({quest: "Is it on sale"})
        this.setState({under_question: ''})
      } 
      if (quest == "Is it on sale"){
        this.setState({quest: "Is it second hand?"})
        this.setState({under_question: ''})
      }
      if (quest == "Is it on sale"){
        this.setState({quest: "Is it second hand?"})
        this.setState({under_question: ''})
      }
      if (quest == "Is it second hand?"){
        this.setState({quest: "Is it expensive?"})
        this.setState({under_question: ''})
      }
      if (quest == "Is it expensive?"){
        this.setState({quest: "How expensive?"})
        this.setState({under_question: ''})
      }
      if (quest == "Can you afford it?"){
        this.setState({quest: "Really?? You can you afford it?!"})
        this.setState({under_question: ''})
      }
      if (quest == "Really?? You can you afford it?!"){
        this.setState({quest: "Do you feel like you deserve to reward or gift yourself lately?"})
        this.setState({under_question: ''})
      }
      if (quest == "Do you feel like you deserve to reward or gift yourself lately?"){
        // End -> treat yo self
      }
    }


    render(){ 
    
    const { navigate } = this.props.navigation;

    imgBanner = this.whatBanner(this.props.navigation.state.params.item);

      return (
      <Container style={styles.quizz}>

          <View style={styles.bannerView}><Image style={styles.banner} source={imgBanner}></Image></View>

          <Container style={styles.question_container}>
            <Text style={styles.question}> {this.state.quest} </Text>
            <Text style={styles.under_question}> {this.state.under_question} </Text>
          </Container>
          <Container style={styles.button}>

              <Button bordered danger style={{justifyContent: 'center', width: 85, height: 70, marginRight: 20}} onPress={() =>{this.answerNo()} }><Text style={{color: 'red'}}>No</Text></Button>
              <Button bordered success style={{justifyContent: 'center', width: 85, height: 70, marginLeft: 20}} onPress={() =>{this.answerYes()} }><Text style={{color: 'green'}}>Yes</Text></Button>
              
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
    },
    under_question:{
      textAlign: 'center',
      fontSize: 15,
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


  export default QuizzScreen;

