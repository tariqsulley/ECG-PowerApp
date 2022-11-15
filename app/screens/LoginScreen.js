import { Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Button } from "@rneui/themed";
import { TextInput } from 'react-native-paper';
import { Alert } from 'react-native';
import Toast from "react-native-toast-message"
//import { auth } from '../firebase'
//import {auth} from "./../../firebase.js"
//import { createUserWithEmailAndPassword } from 'firebase/auth';

export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state= {
            email: "",
            password: ""
        }
        this.handleSignUp = this.handleSignUp.bind(this)
    }

   handleSignUp(){
    Alert.alert("Hello")
}
    
    render() {
    return (
      <View style= {styles.container}>
        <View style = {styles.topView}>
        <Image  style ={styles.img} source={require("../assets/login_img.jpg")}></Image>
        <Image  style = {styles.logo} source={require("../assets/logo.png")}/>
        <View style = {styles.additional}>
        </View>
        </View>
       
        <View style={styles.bottomView}>
          
        <View style = {styles.bottomText}>
          
        <Text  style = {styles.welcome}> Welcome </Text>
        <View style= {styles.linkarea}>
        <Text style = {styles.createAcc}> Don't have an account? </Text>

        <TouchableOpacity >
          <Text style= {styles.link}>
            Create One
          </Text>
        </TouchableOpacity>
        
        </View>
        
        </View>
        
        <View style={styles.textArea}>
        <Text  style = {styles.email}> Email: {this.state.email} </Text>
        <View style= {styles.inputSection}>
        <TextInput value={this.state.email} onChangeText={email =>this.setState({email})} 
        style={styles.input} placeholder="Email" 
         right={<TextInput.Icon icon="email" />}
         mode="flat"/>
        </View>

        <Text> Password: </Text>
        <View style= {styles.inputSection}>
        <TextInput  value = {this.state.password} style={styles.input} placeholder="Password" 
        secureTextEntry onChangeText={password => this.setState({password})}  
        right={<TextInput.Icon icon="eye" />}/>
        </View>
        </View>

        <Button onPress={this.handleSignUp}
          buttonStyle={styles.btn} type= "solid">
        <Icon style={styles.icon} size={20} name="login" color="white" />
            <Text style = {styles.logintxt}> LOGIN </Text>
        </Button>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
    backgroundColor: "blue",
    flex: 1
},

img:{
    width: "100%",
    height: "100%",
    position:"absolute",
    opacity: 0.5
},

logo:{
    width: "40%",
    height: "40%",
},

topView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},

additional:{
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    padding: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
},

bottomView:{
    backgroundColor: "white",
    flex: 1.2,
    alignItems: "center",
    paddingBottom: 200
},

bottomText:{
    flexDirection: "column"
},

welcome:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#2089dc"
},

createAcc:{
    fontSize: 18,
},

link:{
    fontSize: 18,
    color: "#52c41a",
    textDecorationLine: 'underline'
},

linkarea:{
flexDirection: "row"
},

input: {
    height: 50,
    width: 340,
    margin: 0,
    borderWidth: 1,
    padding: 0,
    backgroundColor: "white"
  },

  textArea:{
    paddingBottom: 50
  },

  email:{
   paddingTop: 50
  },

  btn:{
    width: 300, 
  },

  inputSection:{
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  inputIcon:{
    padding: 0
  },

  icon:{
    paddingRight:10
  },

  logintxt:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
})