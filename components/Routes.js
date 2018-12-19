import * as React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {BackHandler} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Login from './Login';
//import Signup from './Signup';
import Start from './Start';
import Intro from './Intro';
import Questionare from './Questionare';
import Questions from './Questions';
import Question2 from './Question2';
import Question1 from './Question1';
import Directions from './Directions';
import Alphabetic from './Alphabetic';
import TasksDirect from './TasksDirect';
import Words from './Words';
import Consonants from './Consonants';
import Vowels from './Vowels';
import Sound from './Sound';
import CVC from './CVC';
import Activities from './Activities';
import Ssss from './Ssss';
import Nnnn from './Nnnn';
import Oooo from './Oooo';
import Zzzz from './Zzzz';
import Mmmm from './Mmmm';
import Llll from './Llll';
import Add from './Add';
import Arch from './Arch';
import Ape from './Ape';
import Ant from './Ant';
import Arm from './Arm';
import Ax from './Ax';
import Eat from './Eat';
import Eel from './Eel';
import Egg from './Egg';
import Eight from './Eight';
import Eye from './Eye';
import Ill from './Ill';
import Knee from './Knee';
import No from './No';
import See from './See';
import Saw from './Saw';
import Shoe from './Shoe';
import Zoo from './Zoo';
import She from './She';
import Food from './Food';
import Fan from './Fan';
import Man from './Man';
import Moon from './Moon';
import Five from './Five';
import Leaf from './Leaf';
import Lime from './Knee';
import Nine from './Nine';
import Soap from './Soap';
import Notify from './Notify';
import Notify1 from './Notify1';
import Notify2 from './Notify2';
import Activity1 from './Activity1';
import Activity2 from './Activity2';
import Activity3 from './Activity3';
import Activity4 from './Activity4';
import Result2 from './Result2';
import UserProfile from './UserProfile';






export default class Routes extends React.Component{
    
  onBackPress() {    
      
    if (Actions.state.index === 0) {
      return false;
    }
    console.log("Actions.pop()",Actions);
    Actions.pop();
    return false;
}
    render(){
        return(
       <Router
      
       backAndroidHandler={this.onBackPress}
        >
            <Stack key="root" hideNavBar={true}>
                <Scene key="start" component={Start} title="start" initial={true}/> 
                <Scene key="intro" component={Intro} title="register"/> 
                <Scene key="login" component={Login} title="login"/>
                <Scene key="Questionare" component={Questionare} title="Questionare"/>
                <Scene key="Questions" component={Questions} title="Questions"/>
                <Scene key="Question1" component={Question1} title="Question1"/>
                <Scene key="Question2" component={Question2} title="Question2"/>
                <Scene key="Directions" component={Directions} title="Directions"/>
                <Scene key="TasksDirect" component={TasksDirect} title="TasksDirect"/>
                <Scene key="Alphabetic" component={Alphabetic} title="Alphabetic"/>
                <Scene key="Words" component={Words} title="Words"/>
                <Scene key="Consonants" component={Consonants} title="Consonants"/>
                <Scene key="Vowels" component={Vowels} title="Vowels"/>
                <Scene key="CVC" component={CVC} title="CVC"/>
                <Scene key="Activities" component={Activities} title="Activities"/>
                <Scene key="Sound" component={Sound} title="Sound"/>
                <Scene key="Ssss" component={Ssss} title="Ssss"/>
                <Scene key="Nnnn" component={Nnnn} title="Nnnn"/>
                <Scene key="Oooo" component={Oooo} title="Oooo"/>
                <Scene key="Zzzz" component={Zzzz} title="Zzzz"/>
                <Scene key="Mmmm" component={Mmmm} title="Mmmm"/>
                <Scene key="Llll" component={Llll} title="Llll"/>
                <Scene key="Add" component={Add} title="Add"/>
                <Scene key="Ant" component={Ant} title="Ant"/>
                <Scene key="Ape" component={Ape} title="Ape"/>
                <Scene key="Arch" component={Arch} title="Arch"/>
                <Scene key="Arm" component={Arm} title="Arm"/>
                <Scene key="Ax" component={Ax} title="Ax"/>
                <Scene key="Eat" component={Eat} title="Eat"/>
                <Scene key="Eel" component={Eel} title="Eel"/>
                <Scene key="Egg" component={Egg} title="Egg"/>
                <Scene key="Eight" component={Eight} title="Eight"/>
                <Scene key="Eye" component={Eye} title="Eye"/>
                <Scene key="Ill" component={Ill} title="Ill"/>
                <Scene key="Knee" component={Knee} title="Knee"/>
                <Scene key="No" component={No} title="No"/>
                <Scene key="See" component={See} title="See"/>
                <Scene key="Saw" component={Saw} title="Saw"/>
                <Scene key="Shoe" component={Shoe} title="Shoe"/>
                <Scene key="Zoo" component={Zoo} title="Zoo"/>
                <Scene key="She" component={She} title="She"/>
                <Scene key="Food" component={Food} title="Food"/>
                <Scene key="Fan" component={Fan} title="Fan"/>
                <Scene key="Man" component={Man} title="Man"/>
                <Scene key="Moon" component={Moon} title="Moon"/>
                <Scene key="Five" component={Five} title="Five"/>
                <Scene key="Leaf" component={Leaf} title="Leaf"/>
                <Scene key="Lime" component={Lime} title="Lime"/>
                <Scene key="Nine" component={Nine} title="Nine"/>
                <Scene key="Soap" component={Soap} title="Soap"/>
                <Scene key="Notify" component={Notify} title="Notify"/>
                <Scene key="Notify1" component={Notify1} title="Notify1"/>
                <Scene key="Notify2" component={Notify2} title="Notify2"/>
                <Scene key="Activity1" component={Activity1} title="Activity1"/>
                <Scene key="Activity2" component={Activity2} title="Activity2"/>
                <Scene key="Activity3" component={Activity3} title="Activity3"/>
                <Scene key="Activity4" component={Activity4} title="Activity4"/>
                <Scene key="Result2" component={Result2} title="Result2"/>
                <Scene key="UserProfile" component={UserProfile} title="UserProfile"/>







            </Stack>
        </Router>
    );
}
}