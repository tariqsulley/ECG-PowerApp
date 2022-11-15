import { StyleSheet, Text, View } from 'react-native'
import React, { Component, useSyncExternalStore } from 'react'
import Header from "../components/Header"
import Empty from "react-native-vector-icons/AntDesign"

class NotificationPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            notifications: []
        }
    }
    render(){
        if(this.state.notifications.length === 0){
        return(
            <View style = {styles.NotifPage}>
            <Header text ="Notifications"/>
            <View style = {styles.container}>
            <Empty name= {"inbox"} size = {80}/>
            <Text> No Notifications </Text>
            </View> 
            </View>  
        )
    }else{
        return(
            <View style = {styles.NotifPage}>
            <Header text ="Notifications"/>
            <View style = {styles.container}>
            <Text> Notifications </Text>
            </View> 
            </View> 
        )
    }
    }
}


export default NotificationPage

const styles = StyleSheet.create({
    NotifPage:{
        flex: 1
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})