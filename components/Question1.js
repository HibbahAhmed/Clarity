import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput,KeyboardAvoidingView } from 'react-native';
//import LoginForm from '../components/Login/LoginForm';
import Ques2 from './Ques2';



export default class Question1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} 	behavior="position">
        <View>
        <Image style={styles.stretch} source={require('../Images/abc.jpg')} />
       
        </View>
        <View style={styles.logoText}>
            <Text style={styles.Text} >CLARITY WANTS TO KNOW</Text> 
        </View>
        <View style={styles.loginContainer}>
        <Ques2 />
    </View> 

        </KeyboardAvoidingView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    stretch:{
        width:370,
        height:880,
        justifyContent:'center',
        alignItems:'center'
    },
    logoContainer:{
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop:200,
        //marginBottom: 200
    },
    logoText: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
        //marginBottom:10
    },
    Text: {
        color: 'white',
        fontSize: 22 ,
        marginBottom:750,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight:'bold'
    
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
      marginTop: 150
    },
});
