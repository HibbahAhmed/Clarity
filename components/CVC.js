import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


export default class CVC extends React.Component{
    Food(){
        Actions.Food()
    }
    
    Fan(){
        Actions.Fan()
    }
    Man(){
        Actions.Man()
    }
    Moon(){
        Actions.Moon()
    }
    
    Five(){
        Actions.Five()
    }
    Leaf(){
        Actions.Leaf()
    }
    Lime(){
        Actions.Lime()
    }
    
    Nine(){
        Actions.Nine()
    }
    Soap(){
        Actions.Soap()
    }
    render(){
        return(
        
            <View style={styles.container}>
                 <View style={styles.header}>
                <Text style={styles.Text}>Consonant Vowel Consonant</Text>
                </View>
                <Text>{"\n\n"}</Text>
            <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
                 <TouchableOpacity style={styles.buttonContainer} onPress={this.Food}>
                    <Text  style={styles.buttonText}>Food</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Fan}>
                    <Text  style={styles.buttonText}>Fan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.Man}>
                    <Text  style={styles.buttonText}>Man</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Moon}>
                    <Text  style={styles.buttonText}>Moon</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Five }>
                    <Text  style={styles.buttonText}>Five</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Leaf}>
                    <Text  style={styles.buttonText}>Leaf</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Lime}>
                    <Text  style={styles.buttonText}>Lime</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Nine}>
                    <Text  style={styles.buttonText}>Nine</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Soap}>
                    <Text  style={styles.buttonText}>Soap</Text>
                </TouchableOpacity>

                {/*<TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Leaf</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ring</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Mill</Text>
        </TouchableOpacity> */}

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
        height: 110
    },
    Text:{
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        margin: 30,
        fontWeight: 'bold',
        justifyContent:'center',
        marginTop:40
        //fontStyle: 'bold'
    },
    buttonContainer:{    
        //backgroundColor: '#720D5D',
        //backgroundColor: '#512DA8',
        backgroundColor: '#4A148C',

        borderRadius: 6,
        borderWidth: 4,
        borderColor: 'black',
        width: 90,
        height: 90,
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
        fontSize: 24
    }
});
