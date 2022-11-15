import { Text, StyleSheet, View, ScrollView, FlatList, Alert } from 'react-native'
import React, { Component } from 'react'
import QuestionMarkIcon from "react-native-vector-icons/AntDesign"
import PowerPlugIcon from "react-native-vector-icons/MaterialCommunityIcons"
import BulbIcon from "react-native-vector-icons/MaterialCommunityIcons"
import DangerousIcon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native'
import FaultView from './ComplaintPageScreens/Fault'
import DisconnectionView from './ComplaintPageScreens/Disconnetion'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const data = [{title:"Fault/Outage", name:"Fault", text:"Report any meter or transmission fault.",
              icon: <BulbIcon  name="lightbulb-off" size={50}/>},
              {title:"Disconnection", name:"Disconnection", 
              text:"Get help to resolve any disconnection",
              icon: <PowerPlugIcon name="power-plug-off" size = {50}/>},
              {title:"General Enquiry", name:"Enquiry",
              text:"We're here for you, Ask us about \nanything question mark",
              icon: <QuestionMarkIcon name="questioncircleo" size ={50}/>},
             {title:"Theft/Staff Misconduct", name:"Theft",
              text:"Bad behaviour harm all of us and \ndegrades us",
              icon: <DangerousIcon name="dangerous" size ={50}/>}
             ]
          

class Complaint extends Component {
render() {
    return (
    <View style={styles.PageView}>

        <View style= {styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.TopView}>
        </View>

        <View style={styles.BottomView}>
         <FlatList data={data} nestedScrollEnabled renderItem={({item}) =>
          <View style={styles.ListView}>
            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate(item.name)}>

            <View>
            <Text> {item.icon} </Text>
            </View>

            <View>
            <Text> {item.title}</Text>
            <Text> {item.text}</Text>
            </View>

            </TouchableOpacity>
            

          </View>
        }/>
        </View>
      </ScrollView>
    </View>
    </View>
    )
  }
}

class ComplaintView extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
     <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Complaint" component={Complaint}/>
      <Stack.Screen options={{headerShown:true}} name="Fault" component={FaultView}/>
      <Stack.Screen options={{headerShown: true}} name="Disconnection" component={DisconnectionView}/>
     </Stack.Navigator>
    )
  }
}
export default ComplaintView

const styles = StyleSheet.create({
  PageView:{
    flex:1,
    backgroundColor:"lightgrey"
  },
  container:{
    flex:1
  },
  TopView:{
    flex: 1,
    backgroundColor: "lightgrey"
},
BottomView:{
  flex: 1,
  marginTop: 100,
  marginBottom: 80,
  backgroundColor: "white",
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50
},
ListView:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
},
Card:{
  borderWidth: 2,
  borderColor: "lightgrey",
  padding: 10,
  marginTop: 60,
  margin: 5,
  width: "90%",
  flexDirection: "row"
},
})
  