//import Signup from './Signup'
import {Actions} from 'react-native-router-flux';
import * as React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView ,BackHandler,ToastAndroid} from 'react-native';
import Buttons from './Buttons';
import { NavigationActions } from 'react-navigation';
export default class Start extends React.Component{
   constructor(props){
       super(props);
       this.state={
           flag:false
       }
       this.backCount = 0;
       this.backAndroid=this.backAndroid.bind(this);
   }

   componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  }

  backAndroid () {
    // BackHandler.exitApp();
    console.log("back button - dashboard")

    if (this.backCount == 1) {
        BackHandler.exitApp();
        this.backCount = 2;
        return; // exit
    }
    else if (this.backCount == 0) {
        ToastAndroid.show("Press again to exit", ToastAndroid.SHORT);
      
        this.backCount++;

        setTimeout(() => {
            if (this.backCount != 2)
                this.backCount = 0;
        }, 2000)

        return true;
    }
 }
    render(){
        return(

            <KeyboardAvoidingView style={styles.container} 	behavior="position">
            <View>
            <Image style={styles.stretch} source={require('../Images/abc.jpg')} style={{justifyContent:'center' , alignItems: 'center'}}/>
            </View>
            <View style={styles.logoContainer}>
            <Image source={require('../Images/Clarity.png')} style={styles.logoImg}/>
            </View>
            <View style={styles.logoText}>
                <Text style={styles.Text} >Speak Fluently !</Text> 
            </View>
            <View style={styles.loginContainer}>
                <Buttons/>
            </View>
            
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    logoContainer:{
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 900
    },
    logoText: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 520
    },
    Text: {
  
        color: 'white',
        fontSize: 18 ,
        marginBottom:750,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop:280
    },
    logoImg:{
        width: 110,
        height: 90,
    },
    loginContainer:{
      position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      marginTop: 250

    }
});