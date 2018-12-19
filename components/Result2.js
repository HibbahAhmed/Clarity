import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';

export default class Result1 extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.container}>Result:  </Text>

            </View>
        )   
    }
}
const styles = StyleSheet.create({
    container:{
        fontSize: 24,
        marginTop: 50,
        textAlign: 'center'

        //borderWidth: 20
    }
});