import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput,KeyboardAvoidingView } from 'react-native';
//import LoginForm from '../components/Login/LoginForm';
import LoginForm from './LoginForm';




export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
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
            <LoginForm/>
        </View>
        
        </KeyboardAvoidingView>

        );
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
        marginBottom: 800
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
        marginBottom:650,
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
      marginTop: 330

    }
});
