import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';



export default class Activities extends React.Component{
    Activity1(){
        Actions.Activity1()
    } 
    Activity2(){
        Actions.Activity2()
    } 
    Activity3(){
        Actions.Activity3()
    } 
    Activity4(){
        Actions.Activity4()
    } 
    render(){
        return(
        
            <View style={styles.container}>
               <View style={styles.header}>
                <Text style={styles.Text}>Carrier Phases</Text>
                </View>
            <View style={{ flexDirection:'column', flexWrap:'wrap', justifyContent: 'center'}}>
                <Text>{"\n"}</Text>
                 <TouchableOpacity style={styles.buttonContainer} onPress={this.Activity1}>
                    <Text  style={styles.buttonText}>Activity 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Activity2}>
                    <Text  style={styles.buttonText}>Activity 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.Activity3}>
                    <Text  style={styles.buttonText}>Activity 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Activity4}>
                    <Text  style={styles.buttonText}>Activity 4</Text>
                </TouchableOpacity>


            </View>
            </View>
           
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor: '#6A1B9A',
        backgroundColor: 'white',
        alignItems: 'center',
        //borderColor: '#4A148C',
        //borderWidth: 20
    },
    header:{
        backgroundColor:'#4A148C',
        width: 380,
        height: 80

    },
    Text:{
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        margin: 30,
        fontWeight: 'bold',
        justifyContent:'center',
        marginTop:22
        //fontStyle: 'bold'
    },
    buttonContainer:{    
        //backgroundColor: '#720D5D',
        //backgroundColor: '#512DA8',
        //backgroundColor: '#880E4F',
        backgroundColor: '#4A148C',
        borderRadius: 6,
        borderWidth: 4,
        borderColor: 'black',
        width: 250,
        height: 70,
        //paddingVertical: 16
        marginTop: 20,
        marginRight: 16,
        marginLeft: 16
        
    },
    buttonText:{
        //alignItems:'center',
        textAlign: 'center',
        //justifyContent: 'center',
        color:'white',
        marginTop:15,
        fontWeight: '700',
        fontSize: 24
    }
});
