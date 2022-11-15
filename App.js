import { StatusBar } from 'expo-status-bar';
import React, {Component} from  "react"
import {View, Dimensions, Alert, TouchableHighlight, Image, StyleSheet, Text,SafeAreaView} from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import NavigationScreen from "./app/screens/NavigationScreen"
import Settings from './app/screens/SettingsPage';

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <View style = {styles.container}>
    <StatusBar/>
    <NavigationScreen/>
    </View>
    )
  }
}
export default App
const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});