import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
//import PropTypes from 'prop-types';

//import { Form } from 'native-base';

//import Email from './InputComponents/Email';
//import Password from './InputComponents/Password';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'



export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputRef: null,
            value: '',
            isCorrect: 0,
            email: '',
            password: ''
        };
        //login button function binding 
        this.submit = this.submit.bind(this)
    } 

    //Login Button function  
    submit() {
        // email validation
        if (this.state.email == "") {
            alert("Enter Email")
        }
        // password validation
        else if (this.state.password == "") {
            alert("Enter Password")
        }
        else {
            axios.post('https://warm-lake-30552.herokuapp.com/api/users/login', {
                email: this.state.email,
                password: this.state.password
            })
                .then(function (response) {
                    console.log(response); 
                    Actions.Directions()
                })
                .catch(function (error) {
                    console.log(error);
                });

        }




    }


    render() {
        return (

            <View style={styles.container}> 

                <TextInput style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="white"
                    returnKeyType="next" //Pata nae
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(e) => this.setState({ email: e })}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    returnKeyType="go"
                    secureTextEntry
                    onChangeText={(e) => this.setState({ password: e })}
                    ref={(input) => this.passwordInput = input} />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.submit} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.Text}>Forget Password?</Text>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        marginBottom: 15,
        color: 'white',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'white',
        paddingVertical: 12,
    },
    Text: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        margin: 20
    }
});