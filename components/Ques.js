import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, CheckBox} from 'react-native';
//import { Radio } from 'native-base';
//import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';


export default class Ques extends React.Component{
    constructor() {
        super();
        this.state = {
          inputRef: null,
          value: '',
          isCorrect: 0,
        };
      }
      Question1(){
        Actions.Question1()
    }
      
    render(){
        return(

            <View style={styles.container}>
                <Text style={styles.Text}>Since when you are Facing Difficulties while Communicating ?
                Comment Below. </Text>
                <TextInput style={styles.input}
                placeholder="Comment"
                placeholderTextColor="white"
                returnKeyType="go" //Pata nae
                //onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="name-phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                />



                <TouchableOpacity onPress={this.Question1} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
                {/* <View>
                    <Text style={styles.Text}>Forget Password?</Text>
                </View> */}

            </View>
            
        )
    }
}
   
  
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30
    },

    input: {
        height: 80 ,
        marginBottom:15,
        color: 'white',
        paddingHorizontal: 10,
        backgroundColor:'rgba(255,255,255,0.1)',
        marginTop: 30
        
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
        paddingVertical: 12,
        marginTop:18
        

    },
    Text: {
        fontSize: 19,
        color:'white',
        textAlign:'center',
        margin:18,
        fontWeight:'bold',
        width: 299
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    
});