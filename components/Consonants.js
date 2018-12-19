import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


export default class Consonants extends React.Component{
    Knee(){
        Actions.Knee();
    }
    Zoo(){
        Actions.Zoo()
    }
    
    She(){
        Actions.She()
    }
    Saw(){
        Actions.Saw()
    }
    Shoe(){
        Actions.Shoe()
    }
    
    See(){
        Actions.See()
    }
    No(){
        Actions.No()
    }
    render(){
        return(
        
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.Text}>Words Starting with Consonants</Text>
                </View>
                <Text>{"\n\n\n"}</Text>
            <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
                 <TouchableOpacity style={styles.buttonContainer} onPress={this.Knee}>
                    <Text  style={styles.buttonText}>Knee</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.No}>
                    <Text  style={styles.buttonText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.See}>
                    <Text  style={styles.buttonText}>See</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Saw}>
                    <Text  style={styles.buttonText}>Saw</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Shoe}>
                    <Text  style={styles.buttonText}>Shoe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.Zoo}>
                    <Text  style={styles.buttonText}>Zoo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.She}>
                    <Text  style={styles.buttonText}>She</Text>
                </TouchableOpacity>

                {/*<TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Kill</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Nil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
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
        height: 120
    },
    Text:{
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        margin: 30,
        fontWeight: 'bold',
        justifyContent:'center',
        marginTop:28
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
