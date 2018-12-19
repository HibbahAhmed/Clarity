import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Voice from 'react-native-voice';
import {Actions} from 'react-native-router-flux';

export default class Activity3 extends Component {

UserProfile(){
  Actions.UserProfile()

  
  };

  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      error: '',
      end: '',
      started: false,
      results: [],
      partialResults: [],
      output: 'This is a Leaf',
      counter: 0,
      sound:'this is a leaf',
      score:0,
    }
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    // eslint-disable-next-line
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = e => {
    // eslint-disable-next-line
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = e => {
    // eslint-disable-next-line
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    // eslint-disable-next-line
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
    if(e.value == this.state.sound){
      this.setState({
        score: 1 + this.state.score
      })}
    
  };

  onSpeechPartialResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
    if(e.value == this.state.sound){
      this.setState({
        score: 1 + this.state.score
      })}
  };

  onSpeechVolumeChanged = e => {
    // eslint-disable-next-line
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {

    // alert('asd')
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      // started: '',
      results: [],
      partialResults: [],
      end: '',
      started: true
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    let count = this.state.counter;
    let arr = this.state.partialResults
    for(var i; i< arr.length; i++){
      if(arr[i] == this.state.output){
        count+1
      }
    }
    this.setState({
      started: false,
      counter: count
    })
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

    render(){
      return(

        <View style={styles.five}>
        <View style={styles.six}>
        <TouchableHighlight onPress={this.UserProfile}> 
          <Text style={styles.Signout}>Show Result</Text>
        </TouchableHighlight>
        <Animatable.Text animation="slideInDown" iterationCount="infinite"  direction="alternate" style={styles.one}>{"\n"}Please Speak</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.two}>  {this.state.output}</Animatable.Text>
        
        <Text style={styles.stat}> {this.state.score} </Text>
        </View>
        
       {/* <Text style={styles.stat}>{"\n\n\n"}Points</Text>
        <Text style={styles.stat}>{this.state.counter}{"\n\n\n"}</Text> */}
        <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent: 'center' ,marginTop: 30}}>
        <TouchableHighlight onPress={this._startRecognizing}>
            <Image style={styles.stretch} source={require('../Images/Mike3.png')}/>
        </TouchableHighlight>
  
        <TouchableHighlight onPress={this._stopRecognizing}>
         <Image style={styles.stretch1} source={require('../Images/Mike1.png')}/>
        </TouchableHighlight>



        </View>
    
     {/* {
          (this.state.started == false) ? 
        
        <TouchableHighlight style={styles.four} onPress={this._startRecognizing}>
          <Image source={require('../Images/Mike1.png')}  style={{justifyContent: 'center' , height: 100 , width: 90}}/> 
        </TouchableHighlight>
        :
        <TouchableHighlight style={styles.four} onPress={this._stopRecognizing}>
         <Image source={require('../Images/Mike2.png')} style={{justifyContent: 'center' , height: 100 , width: 90}} />
        </TouchableHighlight>
      }*/}
        </View>

      )
    }


}
const styles = StyleSheet.create({
  six:{
    backgroundColor: '#4A148C',
    height: 440,
    width:380

  },
  Signout:{
    fontSize: 16,
    color:'white',
    marginRight: 50

  },

  button:{
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 30,
    marginTop:20,
    marginRight: 50

  },
  stretch:{
    height:95,
    width: 88,

    //marginTop: 36,
    //marginRight: 65,
    //marginLeft: 65
    //alignItems: 'center',
    //textAlign: 'center',
    //justifyContent: 'center'

  },
  stretch1:{
    height:95,
    width: 88,
    //marginTop: 36,
    //marginRight: 195,
    //marginLeft: 195,
    //marginBottom: 900
    //alignItems: 'center',
    //textAlign: 'center',
    //justifyContent: 'center'

  },
  five:{
    flex: 1,
    //backgroundColor:'#B39DDB',
    backgroundColor: '#F8F8FF',
  },
  four:{

    width: 20,
    height: 100,

    //textAlign: 'center',

  },
  one:{
    textAlign: 'center',
    fontSize: 42,
    color: 'white',
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Acme-Regular',
  
  },
  two:{
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    marginTop: 8,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    fontFamily: 'BreeSerif-Regular',

  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 17
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: 'white',
  //marginBottom: 12,
    fontSize: 150,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
});