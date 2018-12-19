import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Level1 extends React.Component{
   
    state = {
        count: 0
    }
    VoiceExample(){
      Actions.VoiceExample()
  }

 render(){
            return(

                <View>
                <Text style={styles.text}>{this.state.count}</Text>
                <TouchableOpacity style={styles.Button}
                  title="increase" onPress={this.VoiceExample}
                  onPress={() => this.setState({ count: this.state.count + 1 })}
                >
                  <Text style={styles.text1}>Press Me</Text>
                </TouchableOpacity>
                </View>
            )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  Button:{
        backgroundColor: 'black',
        //justifyContent: 'center',
        //alignItems:'center',  
        //justifyContent: 'center',
        marginRight: 100,
        marginLeft: 100,
        height: 40,
        width: 150,
        
  },
  text:{
    fontSize: 40,
    marginTop: 50,
    marginBottom: 50,
    marginLeft:160,
    marginRight:160
  },

  text1:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})