import { Text, StyleSheet, View , Linking} from 'react-native'
import React, { Component } from 'react'
import Icon from "react-native-vector-icons/AntDesign"

function ContactView({name,colour,text,description,image}){
return(
  <View>
    <Icon onPress={()=> {Linking.openURL("https://",{name},".com")}} 
    name ={name} size= {50} color={colour}/>
    <Text>
      {text}
    </Text>
  </View>
)
}

class ContactUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactView name="phone" colour="green" text="Phone"/>
        <ContactView name="twitter" colour="#00acee" text="Twitter"/>
        <ContactView name="facebook-square" colour="#4267B2" text="Facebook"/>
      </View>
    )
  }
}


export default ContactUs
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    }
})