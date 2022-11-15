import { StyleSheet, Text, View,FlatList , ScrollView,Image,Alert,SafeAreaView,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { Button } from "@rneui/themed";
import Header from '../components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LockIcon from "react-native-vector-icons/EvilIcons"
import ContactIcon from "react-native-vector-icons/AntDesign"
import ComplaintIcon from "react-native-vector-icons/Octicons"
import FinanceIcon from "react-native-vector-icons/MaterialCommunityIcons"
import TimerIcon from "react-native-vector-icons/MaterialIcons"
import Transaction from './SettingsPageScreens/Transaction';
import MeterAlert from './SettingsPageScreens/MeterAlert';
import ChangePassword from './SettingsPageScreens/ChangePassword';
import Complaint from './SettingsPageScreens/Complaint';
import ContactUs from './SettingsPageScreens/ContactUs';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreen from './NavigationScreen';
import Toast from "react-native-toast-message"

const Stack = createNativeStackNavigator()

const settingslist = [
    {title:"Transaction",text: "View your transaction history", 
    icon: <FinanceIcon name = "finance" size= {60}/>, name:"Transaction"
    },
    {title:"Meter Alert",text: "Get alerted when meter balance \nfalls below set threshold", 
    icon: <TimerIcon name = "timer" size= {60}/>, name:"Alert"
    },
    {title:"File a complaint",text: "Anything wrong?",
     icon: <ComplaintIcon name = "report" size= {50}/>, name:"Complaint"
    },
    {title:"Change Password", text: "Change your password", 
     icon: <LockIcon  name = "lock" size={60}/>, name:"Password"
    },
    {title:"Contact us", text:"Get in touch with us", 
     icon: <ContactIcon name = "contacts" size= {50}/>, name:"Contact"
    },
]

class SettingsPage extends Component{
    constructor(props){
        super(props)
        this.state= {
            viewPage: ""
        }
        this.action = this.action.bind(this)
    }
    action(index){
        this.setState({
            viewPage: index
        })
        setTimeout(()=>Alert.alert("" + this.state.viewPage),0.01 )
    }
    render(){
        return(
    <SafeAreaView style= {styles.SettingsPage}>
        <Header text = "Settings"/>
        <View style= {styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.TopView}>
            </View>

            <View style = {styles.BottomView}>
            <FlatList  style={styles.List} nestedScrollEnabled data={settingslist} 
            renderItem={({item}) =>
                <View style ={styles.settingsView}>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate(item.name)} 
                style= {styles.settingsCard}>

                <View>
                <Text style={styles.Icon}>
                    {item.icon}
                </Text>
                </View>

                <View>
                
                <Text style = {styles.Title}>
                    {item.title}
                </Text>

                <Text style= {styles.Text}>
                    {item.text}
                </Text>

                </View>
                
                </TouchableOpacity>

            </View>
                }/>
            <Button  color="tomato" buttonStyle={styles.Logout}>
                <Text style={{color:"white"}}> Log Out</Text>
            </Button>
            </View>
                </ScrollView>
        </View>
    </SafeAreaView>
        )
    }
}

class Settings extends Component{
    render(){
        return(
            <>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown:false}} name= "Settings" component={SettingsPage}/>
                    <Stack.Screen  name ="Contact" component={ContactUs}  />
                    <Stack.Screen name = "Transaction" component={Transaction}/>
                    <Stack.Screen name = "Alert" component={MeterAlert}/>
                    <Stack.Screen name = "Complaint" component={Complaint}/>
                    <Stack.Screen name = "Password" component={ChangePassword}/>
                </Stack.Navigator>
                <Toast/>
            </>
        )
    }
}
export default Settings

const styles = StyleSheet.create({
    SettingsPage:{
        flex:1,
        backgroundColor: "lightgrey"
    },
    container:{
        flex:1
    },
    scrollView:{
   
    },
    TopView:{
        flex: 0.5,
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
    settingsView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    settingsCard:{
        borderWidth: 2,
        borderColor: "lightgrey",
        padding: 10,
        marginTop: 60,
        margin: 5,
        width: "90%",
        flexDirection: "row"
    },
    Title:{
        margin: 10,
        fontWeight:"bold"
    },
    Text:{
        margin: 5,
        paddingLeft: 5,
        flexWrap: "wrap",
        color: "grey"
    },
    Icon:{
        margin: 10
    },
    Logout:{
        marginTop: 40,
        height: 60,
        color: "red"
    }

})