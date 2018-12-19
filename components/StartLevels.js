import * as React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import Levels from './Levels';

export default class StartLevels extends React.Component{
    render(){
        return(

            
            <KeyboardAvoidingView style={styles.container} 	behavior="position">
            <View style={styles.stretch}>
            <Text>Sounds</Text>
            </View>
            <View style={styles.loginContainer}>
                <Levels/>
            </View>
            
            </KeyboardAvoidingView>
           
        )
    }
}
const styles = StyleSheet.create({
    stretch:{
        height: 650,
        width: 380,
        backgroundColor: '#7986CB'
    },
    container: {
      flex: 1,
      //marginTop: 20,
      //padding: 20
      
    },
    logoText: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //justifyContent: 'center',
        //alignItems: 'center',
        //marginTop: 520
    },
    Text: {
  
        color: 'white',
        fontSize: 18 ,
        marginBottom:750,
        justifyContent: 'center',
        alignItems: 'center',
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
      marginTop: 60

    }
});