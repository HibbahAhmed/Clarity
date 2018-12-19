import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import LoginForm from '../components/Login/LoginForm';
import Ques from './Ques';
//import Alphabetic from '../components/Alphabetic';
import {Actions} from 'react-native-router-flux';


export default class Directions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  TasksDirect(){
    Actions.TasksDirect()
}
  UserProfile(){
    Actions.UserProfile()
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
        
            <TouchableOpacity onPress={this.UserProfile}>
            <View style={styles.one}>
                <Text style={styles.text}>{"\n\n"}    <Image style={styles.img} source={require('../Images/Person.png')} />USER PROFILE{"\n\n\n\n"}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.TasksDirect}>
            <View style={styles.two}>
                <Text style={styles.text}>{"\n\n"}    <Image style={styles.img} source={require('../Images/Task1.png')} />    TASKS {"\n\n\n"}</Text>
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
        backgroundColor: '#4B0082',
        //alignItems: 'center',
        justifyContent: 'center',
        height: 308
    },
    text:{
        color:'white',
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginBottom: 22


    },
    two:{
        backgroundColor: '#9370DB',
        justifyContent: 'center',
        //alignItems:'center', 
        height: 308
        

    },
    three:{
        backgroundColor: '#330066',
        justifyContent: 'center',
        //alignItems:'center',  
        height: 206,
    },
    img:{
        height:80,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',

        
    }
});
