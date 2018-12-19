import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';



export default class Vowels extends React.Component{
    Add(){
        Actions.Add()
    }
    
    Ant(){
        Actions.Ant()
    }
    Ape(){
        Actions.Ape()
    }
    Arch(){
        Actions.Arch()
    }
    
    Arm(){
        Actions.Arm()
    }
    Ax(){
        Actions.Ax()
    }
    Eat(){
        Actions.Eat()
    }
    
    Egg(){
        Actions.Egg()
    }
    Eel(){
        Actions.Eel()
    }
    Eight(){
        Actions.Eight()
    }
    
    Eye(){
        Actions.Eye()
    }
    Ill(){
        Actions.Ill()
    }
    render(){
        return(
        
            <View style={styles.container}>
               <View style={styles.header}>
                <Text style={styles.Text}>Words Starting with Vowels</Text>
                </View>
                <Text>{"\n\n"}</Text>
            <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>

                 <TouchableOpacity style={styles.buttonContainer} onPress={this.Add}>
                    <Text  style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Ant}>
                    <Text  style={styles.buttonText}>Ant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.Ape}>
                    <Text  style={styles.buttonText}>Ape</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Arch}>
                    <Text  style={styles.buttonText}>Arch</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Arm}>
                    <Text  style={styles.buttonText}>Arm</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Ax}>
                    <Text  style={styles.buttonText}>Ax</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Eat}>
                    <Text  style={styles.buttonText}>Eat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Eel}>
                    <Text  style={styles.buttonText}>Eel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Egg}>
                    <Text  style={styles.buttonText}>Egg</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Eight}>
                    <Text  style={styles.buttonText}>Eight</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Eye}>
                    <Text  style={styles.buttonText}>Eye</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Ill}>
                    <Text  style={styles.buttonText}>Ill</Text>
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
        height: 95
    },
    Text:{
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        margin: 30,
        fontWeight: 'bold',
        justifyContent:'center',
        marginTop:30
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
        width: 85,
        height: 85,
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
        fontSize: 22
    }
});
