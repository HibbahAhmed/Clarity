import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import LoginForm from '../components/Login/LoginForm';
import Ques from './Ques';
//import Alphabetic from '../components/Alphabetic';
import {Actions} from 'react-native-router-flux';


export default class Words extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  Consonants(){
    Actions.Consonants()
}

Vowels(){
    Actions.Vowels()
}
CVC(){
    Actions.CVC()
}
  render() {
    return (
        <KeyboardAvoidingView style={styles.container} 	behavior="position">
        {/*<View>
        <Image style={styles.stretch} source={require('../Images/direct.jpg')} />
       
        </View>
        <View style={styles.logoText}>
            <Text style={styles.Text} >USER PROFILE</Text>
        </View>

         <View style={styles.logoText1}>
            <Text style={styles.Text} >TASKS</Text> 
        </View>

         <View style={styles.logoText2}>
            <Text style={styles.Text} >SETTINGS</Text> 
        </View>
        <View style={styles.loginContainer}>
       
        </View>  */}
        
            <TouchableOpacity onPress={this.Vowels} >
            <View style={styles.one}>
                <Text style={styles.text}>{"\n\n\n\n"} VOWEL CONSONANT {"\n\n\n\n"}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.Consonants} >
            <View style={styles.two}>
                <Text style={styles.text}>{"\n\n"} CONSONANT VOWEL {"\n\n\n"}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.CVC} >
            <View style={styles.three}>
                <Text style={styles.text}>{"\n\n"} CONSONANT VOWEL CONSONANT {"\n\n\n"}</Text>
            </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    one: {
       // backgroundColor: '#8C9EFF',
       backgroundColor: '#673AB7',
        //alignItems: 'center',
        justifyContent: 'center',
        height: 208
    },
    text:{
        color:'white',
        fontSize: 28,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
        //marginBottom: 30,
        //margin: 120


    },
    two:{
       // backgroundColor: '#283593',
        backgroundColor: '#4A148C',

        justifyContent: 'center',
        //alignItems:'center', 
        height: 208  
    },
    three:{
        backgroundColor: '#9575CD',
        justifyContent: 'center',
        //alignItems:'center', 
        height: 208  
    },

    img:{
        height:80,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});
