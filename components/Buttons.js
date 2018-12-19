import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import Login from './Login';
import {Actions} from 'react-native-router-flux';


export default class Buttons extends React.Component{
    login(){
        Actions.login()
    }
    intro(){
        Actions.intro()
    }
    render(){
        return(

            <View style={styles.container}>
                

                <TouchableOpacity onPress={this.intro} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.Text}>Already have an Account? Login !</Text>
                </View>
                <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
               {/* <View>
                    <Text style={styles.Text}>Want to Know About Clarity? See Introduction!</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Intro</Text>
                </TouchableOpacity>
               */}
               </View> 
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    buttonText: {
        textAlign:'center',
        color:'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonContainer:{
        backgroundColor: 'transparent',        
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'white',
        paddingVertical: 8,
        

    },
    Text: {
        fontSize: 16,
        color:'white',
        textAlign:'center',
        margin:10
    }
});