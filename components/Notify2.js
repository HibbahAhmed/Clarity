import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
//import Voice from 'react-native-voice';
import {Actions} from 'react-native-router-flux';



export default class Notify2 extends Component {
    Activities(){
        Actions.Activities()
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Animatable.Text style={styles.text1}  iterationCount="1" animation="fadeInLeftBig">{"\n\n"}Instruction</Animatable.Text>
                </View>   
                <Animatable.Text style={styles.text} iterationCount="1" animation="fadeInUp">{"\n\n\n"}"Take Deep Breaths"</Animatable.Text>
                <Animatable.Text style={styles.text} iterationCount="1" animation="fadeInUp">"Don't Fight the Fear"</Animatable.Text>
                <Animatable.Text style={styles.text} iterationCount="1" animation="fadeInUp">"Speak words Slowly"</Animatable.Text>
                <Animatable.Text style={styles.text} iterationCount="1" animation="fadeInUp">"Stretch each sound and word"</Animatable.Text>
            <TouchableOpacity style={styles.button} onPress={this.Activities}>
                <Text style={styles.buttonText}> Okay </Text>
            </TouchableOpacity>

            </View>
        )
    }


}

    const styles = StyleSheet.create({
        header:{
            backgroundColor: '#4A148C',
            width: 370,
            height:175
        },

        container:{
          flex:1,
          backgroundColor: 'white',
      
        },
        text:{
           // marginTop: 50,
            color: '#4A148C', 
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        text1:{
            color: 'white', 
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        button:{
            //backgroundColor: '',
            backgroundColor: '#4A148C',

            borderRadius: 6,
            borderWidth: 4,
            borderColor: 'white',
            width: 150,
            height:50,
          //paddingVertical: 16
            marginTop: 32,
            marginRight: 110,
            marginLeft: 110

        },
        buttonText:{
            fontSize: 24,
            color: 'white',
            textAlign:'center',
            fontWeight: 'bold'
        }
    })