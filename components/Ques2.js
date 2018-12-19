import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, CheckBox} from 'react-native';
//import { Radio } from 'native-base';
//import PropTypes from 'prop-types';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Actions} from 'react-native-router-flux';

var Que = [
    {label: 'Yes', value: 0 },
    {label: 'No', value: 1 }
  ];

export default class Ques2 extends React.Component{
    constructor() {
        super();
        this.state = {
          inputRef: null,
          value: '',
          isCorrect: 0,
        };
      }
      Question2(){
        Actions.Question2()
    }
     
      
    render(){
        return(

            <View style={styles.container}>
                <Text style={styles.Text}>Do you lose Confidence while Communicating? {'\n\n'}</Text>
                
                <View style={styles.radio}>
                <RadioForm
                    radio_props={Que}
                    initial={2}
                    onPress={(value) => {}} 
                    buttonSize={20}
                    buttonColor={'white'}
                    selectedButtonColor={'white'}
                    selectedLabelColor={'white'}
                    labelColor={'white'}
                    alignItem={'center'}
                    labelStyle={{fontSize: 18}}
                    //formHorizontal={true}
                    buttonOuterSize={30}
                    //buttonWrapStyle={{marginLeft: 200}}
                    />
                </View>


                <TouchableOpacity onPress={this.Question2} style={styles.buttonContainer}>
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
    radio:{
        margin:10
    }
    
});