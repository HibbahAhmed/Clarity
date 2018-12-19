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
  Notify(){
    Actions.Notify()
}
Notify1(){
    Actions.Notify1()
}
Notify2(){
    Actions.Notify2()
}
start(){
    Actions.start()
}
Directions(){
    Actions.Directions()

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
            <TouchableOpacity onPress={this.start}>
                    <Text style={styles.four}>Signout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Directions}>
                    <Text style={styles.four}>Back</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={this.Notify} >
            <View style={styles.one}>

                <Text style={styles.text}>{"\n\n"}    <Image style={styles.img} source={require('../Images/sounds.png')} />SOUNDS{"\n\n\n\n"}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.Notify1}>
            <View style={styles.two}>
                <Text style={styles.text}>{"\n\n"}    <Image style={styles.img} source={require('../Images/Words.png')} /> WORDS {"\n\n\n"}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.Notify2}>
            <View style={styles.three}>
                <Text style={styles.text}>{"\n\n"}    <Image style={styles.img} source={require('../Images/Activity.png')} />ACTIVITIES {"\n\n\n"}</Text>
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
        backgroundColor: '#7E57C2',
        //alignItems: 'center',
        justifyContent: 'center',
        height: 160
    },
    text:{
        color:'white',
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginBottom: 20


    },
    four:{
        color:'white',
        fontSize: 16 ,
        backgroundColor: '#7E57C2',
        fontWeight: 'bold',
    },
    two:{
        backgroundColor: '#673AB7',
        justifyContent: 'center',
        //alignItems:'center', 
        height: 210,
        

    },
    three:{
        backgroundColor: '#512DA8',
        justifyContent: 'center',
        //alignItems:'center',  
        height: 210,
    },
    img:{
        height:80,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',

        
    }
});
