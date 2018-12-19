import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


export default class UserProfile extends React.Component{
    Directions(){
        Actions.Directions()
    }
    start(){
        Actions.start()
    }
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.start}>
                        <Text style={styles.Signout}>Signout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.Directions}>
                        <Text style={styles.Signout}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Hey There</Text>
                </View>
                <Text style={styles.text1}>{"\n\n"}Name:  </Text>
                <Text style={styles.text1}>Email:  </Text>
                <Text style={styles.text1}>Password:  </Text>
                <Text style={styles.text1}>Total Score: </Text>
            </View>
        )   
    }
}
const styles = StyleSheet.create({
    header:{
        width:360,
        height:130,
        backgroundColor:'#4A148C',

        //backgroundColor: '#6A1B9A',
        //backgroundColor: 'white',

        //borderWidth: 20
    },
    Signout:{
        color:'white',
        fontSize: 16
    },
    stretch:{
        width:120    ,
        height:90,
        marginLeft:108,
        marginRight:108
    },
    text:{
        color:'white',
        marginTop:30,
        fontSize: 32,
        fontWeight:'bold',
        textAlign: 'center'
    },
    text1:{
        color:'#4A148C',
        fontSize: 22,
        fontFamily: 'BreeSerif-Regular',
        marginLeft:20,
        marginLeft:20,
        marginTop: 30

    },
    text2:{
        color:'#4A148C',
        fontSize: 24,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        fontFamily: 'BreeSerif-Regular'
    }
});
