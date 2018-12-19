import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
//import Login from './Login';
//import {Actions} from 'react-native-router-flux';


export default class Levels extends React.Component{
   

    render(){
        return(
            <View style={{flexDirection:'row', flexWrap:'wrap' , padding:18,justifyContent:'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Aa</Text>
                </TouchableOpacity>
               
                
                <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Bb</Text>
                </TouchableOpacity>
             


                 <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Cc</Text>
                </TouchableOpacity>
        


                 <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Dd</Text>
                </TouchableOpacity>
                

                 <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ee</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ff</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Gg</Text>
                </TouchableOpacity>


                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Hh</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ii</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Jj</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Kk</Text>
                </TouchableOpacity>


               <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ll</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Mm</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Nn</Text>
                </TouchableOpacity>


                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Oo</Text>
                </TouchableOpacity>


                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Pp</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Qq</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Rr</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ss</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Tt</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Uu</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Vv</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Ww</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Xx</Text>
                </TouchableOpacity>

                   <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Yy</Text>
                </TouchableOpacity>
               
                <TouchableOpacity  style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>Zz</Text>
                </TouchableOpacity>

            </View>

          
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    buttonText: {
        textAlign:'center',
        color:'black',
        fontWeight: '700',
        fontSize: 20
    },
    buttonContainer:{
        backgroundColor: 'white',        
        //borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        width: 63,
        height: 45,
        //paddingHorizontal: 20,   
        marginRight: 16, 
        marginTop: 23    

    },
    Text: {
        fontSize: 16,
        color:'black',
        textAlign:'center',
        margin:10
    }
});