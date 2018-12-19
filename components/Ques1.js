import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, CheckBox} from 'react-native';
//import { Radio } from 'native-base';
//import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var gender = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
  ];

export default class Ques1 extends React.Component{
    constructor() {
        super();
        this.state = {
          inputRef: null,
          value: '',
          isCorrect: 0,
        };
      }
      Questions(){
        Actions.Questions()
    }
      
    render(){
        return(

            <View style={styles.container}>
                <Text style={styles.Text}>Your Name: </Text>
                <TextInput style={styles.input}
                placeholder="Name"
                placeholderTextColor="white"
                returnKeyType="next" //Pata nae
                //onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="name-phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                />

                <Text style={styles.Text}>Your Age: </Text>
                <TextInput style={styles.input}
                placeholder="Age"
                placeholderTextColor="white"
                returnKeyType="next" //Pata nae
                //onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="name-phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                />
                <Text style={styles.Text}>Gender:</Text>
                <View style={styles.radio}>
                <RadioForm
                    radio_props={gender}
                    initial={2}
                    onPress={(value) => {}} 
                    buttonSize={8}
                    buttonColor={'white'}
                    selectedButtonColor={'white'}
                    selectedLabelColor={'white'}
                    labelColor={'white'}
                    />
                </View>


                <TouchableOpacity onPress={this.Questions} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>NEXT</Text>
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
        marginTop:-20
    },

    input: {
        height: 40 ,
        marginBottom:15,
        color: 'white',
        paddingHorizontal: 10,
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
        paddingVertical: 12,
        marginTop:18
        

    },
    Text: {
        fontSize: 17,
        color:'white',
        //textAlign:'center',
        margin:14,
        fontWeight:'bold'
    },
    radio:{
        margin:10
    }
});