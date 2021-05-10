import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer>
      </AppContainer>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Write : {screen:WriteStoryScreen},
  Read : {screen:ReadStoryScreen},
},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon : ()=>{
    const routeName = navigation.state.routeName;
    if(routeName === "Write"){
      return(<Image source = {require("./assets/write.png")} style = {{width : 40, height : 40}}></Image>)
    }else if(routeName === "Read"){
      return(<Image source = {require("./assets/read.png")} style = {{width : 40, height : 40}}></Image>)
    }
  }
})})
const AppContainer = createAppContainer(TabNavigator);