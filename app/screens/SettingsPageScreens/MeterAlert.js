import { Text, StyleSheet, View,ImageBackground, TextInput,Device } from 'react-native'
import React, { Component, useState } from 'react'
import { Button, Overlay } from "@rneui/themed";
import CheckMark from "react-native-vector-icons/AntDesign"


export default class MeterAlert extends Component {
  constructor(props){
    super(props)
    this.state={
      text:"",
      visible:false
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.toggleOverlay = this.toggleOverlay.bind(this)
  }
    
    toggleOverlay(){
      this.setState({
        visible: !this.state.visible
      })
    }
  
    onChangeText(text){
      this.setState({
        text: text
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter amount" onChangeText={this.onChangeText} 
        keyboardType={"number-pad"}/>
        <View style={styles.inner}>
          <View>
            <ImageBackground resizeMode="contain" style={styles.meter} source={require("../../assets/meter.png")}>
            <Text style={this.state.text > 1000000 ? styles.txt2:styles.txt1}>{this.state.text}</Text>
            </ImageBackground>
          </View>

        <View style={styles.btnarea}>
        <Button onPress={this.toggleOverlay} color="success" buttonStyle={styles.btn}>
          <Text style={styles.btnTxt}> Confirm </Text>
        </Button>
        <Overlay style={styles.overlay} isVisible={this.state.visible} onBackdropPress={this.toggleOverlay}>
        <View style={styles.check}>
          <CheckMark name="checkcircleo" type="font-awesome" color="green" size={100}/>
          <Text style={styles.textPrimary}>Success</Text>
        </View>
        
      <Text style={styles.textSecondary}>
        You will receive a notification when your meter balance falls below {this.state.text} cedis.
      </Text>

    </Overlay>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  input:{
    height: 40,
    width:"80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inner:{
    flex:1,
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center"
  },
  txt1:{
    fontSize:25,
    fontWeight: "bold",
    position:"absolute",
    top: "34%",
    right: "50%"
  },
  seg:{
    position:"absolute",
    top: "34%",
    right: "50%"
  },
  txt2:{
    fontSize:15,
    fontWeight: "bold",
    position:"absolute",
    top: "34%",
    right: "50%"
  },
  meter:{
    width: 700,
    height: 600,
    marginBottom: -60,
    justifyContent:"center",
    alignItems:"center",
  },
  btn:{
    width:300,
  },
  btnTxt:{
    fontSize: 20,
    fontWeight: "bold",
    color:"white"
  },
  btnarea:{
    flex:1,
    marginBottom: 50
  },
  textPrimary:{
    fontSize: 40
  },
  textSecondary:{
    fontSize: 20,
    color: "grey"
  },
  overlay:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  check:{
    alignItems:"center"
  }
})