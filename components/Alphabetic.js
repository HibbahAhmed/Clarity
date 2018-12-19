import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,BackHandler} from 'react-native';
//import { Header } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


export default class Alphabetic extends React.Component{
    constructor(props){
        super(props);
        this.backCount = 0;
        this.backAndroid=this.backAndroid.bind(this);
    }
    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
      }
    
      componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
      }

      backAndroid () {
        if (this.backCount == 0) {
            Actions.TasksDirect()
           return true;
        }
       
     }
    Ssss(){
        Actions.Ssss()
    }
    Nnnn(){
        Actions.Nnnn()
    }
    Oooo(){
        Actions.Oooo()
    }
    Zzzz(){
        Actions.Zzzz()
    }
    Mmmm(){
        Actions.Mmmm()
    }
    Llll(){
        Actions.Llll()
    }
    Sound(){
        Actions.Sound()
    }
    render(){
        return(
        
            <View style={styles.container}>
               <View style={styles.header}>
                <Text style={styles.Text}> Lets Play with Sounds</Text>
                </View>
                <Text>{"\n"}</Text>
            <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
                 <TouchableOpacity style={styles.buttonContainer}  onPress={this.Sound}>
                    <Text  style={styles.buttonText}>Aaaa</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonContainer} onPress={this.Llll}>
                    <Text  style={styles.buttonText}>Llll</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Ssss}> 
                    <Text  style={styles.buttonText}>Ssss</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Mmmm}>
                    <Text  style={styles.buttonText}>Mmmm</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Nnnn}>
                    <Text  style={styles.buttonText}>Nnnn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Oooo}>
                    <Text  style={styles.buttonText}>Oooo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Zzzz}>
                    <Text  style={styles.buttonText}>Zzzz</Text>
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
        height: 100
    },
    Text:{
        fontSize: 26,
        textAlign: 'center',
        color: 'white',
        margin: 30,
        fontWeight: 'bold',
        justifyContent:'center',
        marginTop:35
        //fontStyle: 'bold'
    },
    buttonContainer:{    
        //backgroundColor: '#720D5D',
        //backgroundColor: '#512DA8',
        backgroundColor: '#4A148C',

        borderRadius: 6,
        borderWidth: 4,
        borderColor: 'black',
        width: 120,
        height:90,
        //paddingVertical: 16
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10
        
    },
    buttonText:{
        //alignItems:'center',
        textAlign: 'center',
        //justifyContent: 'center',
        color:'white',
        marginTop:20,
        fontWeight: '700',
        fontSize: 28
    }
});
