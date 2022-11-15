import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

function Header({text}){
    return(
    <View style= {styles.header}>
        <Text style = {styles.ecgtext}> {text}</Text>
        <Image style = {styles.logo} source={require("../assets/ecg-logo.png")}/>
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flex:0.1,
        paddingBottom: 25,
        borderBottomWidth: 2,
        borderBottomColor: "blue",
        backgroundColor: "white",
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.32,
        shadowRadius: 10,
    
        elevation: 10
    },
    logo:{
        position: "absolute",
        top: 25,
        left:10,
        width: "20%",
        height: "100%",
    },
    ecgtext:{
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        position:"absolute",
        left: 80,
        top: 45
    }
})