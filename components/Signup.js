import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
//import Login from './Login';
import {Actions} from 'react-native-router-flux';
import axios from 'axios'


export default class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    }
    login(){
        Actions.login()
    }
    Questionare(){
        axios.post('https://warm-lake-30552.herokuapp.com/api/users/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        })
            .then(function (response) {
                console.log(response);
                Actions.Directions()
            })
            .catch(function (error) {
                console.log(error);
            });
        Actions.Questionare()
    }
    render(){
        return(

            <View style={styles.container}>
                <TextInput style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                returnKeyType="next" 
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText={(e) => this.setState({ email: e })}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}/>

                <TextInput style={styles.input}
                placeholder="Username"
                placeholderTextColor="white"
                returnKeyType="next" 
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText={(e) => this.setState({ name: e })}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}/>


               <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                returnKeyType="go"
                secureTextEntry
                ref={(input) => this.passwordInput = input} onChangeText={(e) => this.setState({ password: e })}/>
                

                <TextInput style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                returnKeyType="go"
                secureTextEntry
                ref={(input) => this.passwordInput = input} onChangeText={(e) => this.setState({ password2: e })}  />
        

                <TouchableOpacity onPress={this.Questionare} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.Text}>Already have an Account? Login !</Text>
                </View>
                <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 35 ,
        marginBottom:15,
        color: 'white',
        paddingHorizontal: 8,
        backgroundColor:'rgba(255,255,255,0.1)',
        //margin: 30
        
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