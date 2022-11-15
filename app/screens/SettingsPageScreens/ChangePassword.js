import { Text, StyleSheet, View,TextInput} from 'react-native'
import React, { Component } from 'react'
import { Button } from "@rneui/themed";

export default class ChangePassword extends Component {
  render() {
    return (
      <View style={styles.PasswordView}>
        <Text style={styles.headertxt}>Create New Password</Text>
        <Text style={styles.subtxt}>Your new password must be different from previous and used passwords</Text>
        
        <Text style={styles.passtxt}>Password</Text>
        <TextInput style={styles.Input}/>
        <Text style={styles.passtxt}>Confirm Password</Text>
        <TextInput style={styles.Input}/>
        <Button type="solid">
          <Text> Change Password</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  PasswordView:{
    flex:1,
    marginTop: 20
  },
  headertxt:{
    fontWeight:"bold",
    fontSize: 25,
    marginLeft:20
  },
  subtxt:{
    fontSize: 15,
    margin: 5,
    marginLeft:20
  },
  Input:{
    width: "80%",
    height: 45,
    borderWidth: 2,
    margin: 20
  },
  passtxt:{
    marginLeft:20
  }
})