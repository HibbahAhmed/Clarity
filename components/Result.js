import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';

export default class Result extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}> Hey Fighter You Did It! </Text>
                    <Image style={styles.stretch} source={require('../Images/Smiley.png')} />
                </View>
                <Text style={styles.text1}>{"\n\n"}Your Score:{"\n\n"} </Text>
                <Image style={styles.stretch} source={require('../Images/Check.png')} />
                <Text style={styles.text2}>{"\n"}Your are not mend to giveup go ahead for the next level. </Text>
            </View>
        )   
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor: '#6A1B9A',
        //backgroundColor: 'white',
        alignItems: 'center',
        backgroundColor: 'white',
        fontFamily: 'Acme-Regular'

        //borderWidth: 20
    },
    stretch:{
        width:120    ,
        height:90,
        marginLeft:108,
        marginRight:108
    },
    text:{
        color:'#4A148C',
        marginTop:50,
        fontSize: 32,
        fontWeight:'bold',
        textAlign: 'center'
    },
    text1:{
        color:'#4A148C',
        fontSize: 20,
        fontFamily: 'BreeSerif-Regular'
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
