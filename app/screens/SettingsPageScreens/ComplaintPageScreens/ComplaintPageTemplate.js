import {View,StyleSheet,Text, TextInput,Alert,ScrollView,Image} from "react-native"
import React, {useState} from 'react'
import * as ImagePicker from "expo-image-picker"
import Toast from "react-native-toast-message"
import { Button } from "@rneui/themed";
import CameraIcon from "react-native-vector-icons/Feather"
import CancelIcon from "react-native-vector-icons/MaterialIcons"


function ComplaintPageTemplate(props){
    const [text,setText] = useState("")
    const [image,setImage] = useState(".")

    const ToastMsg= ()=>{
        Toast.show({
            type: 'success',
            text1: 'Sending your complaint',
            position:"bottom",
            bottomOffset: 100
        });
        setImage(".")
        setText("")
    }

    const openImagePicker = async() =>{
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
          setImage(pickerResult.uri)
      }    

    return(
        <View style={styles.Page}>
                <ScrollView style={styles.Scroll}>
                <View style={styles.FaultView}>
                <View style={styles.Report}>
                <Text style={{margin:10,fontWeight:"bold",fontSize:25}}> {props.title}</Text>
                <Text style={{margin:10,fontSize:16,color:"grey"}}> {props.titleDesc}</Text>
                </View>
        
                <View style={styles.Subject}>
                <Text style={{fontWeight:"bold",margin:10}}>{props.subject} </Text>
                <Text style={styles.Fault}> {props.subjectArea}</Text>
                <Text style={{margin:10,color:"grey"}}> {props.subjectDesc}</Text>
                </View>
                <View style={styles.Comment}>
                <Text style={styles.toptxt}> {props.comments}</Text>
                <TextInput value={text} onChangeText={setText} selectionColor={"black"} 
                textAlignVertical="top" multiline={true} 
                placeholder="Add a brief description and any information that would be useful to our response team" style={styles.input}/>
                
                <View style={styles.Attacharea}>
                
                <View style={{display:"flex",flexDirection:"column"}}>
                
                <View>
                <Text style={styles.Attachtxt}> {props.attachImg}</Text>
                </View>

                <View>
                <Button buttonStyle={styles.Attach} onPress={openImagePicker} >
                    <CameraIcon name="camera" size={20}/>
                </Button>
                </View>
                

                </View>
                <View style={styles.ReportImgView}>
                <Image style={styles.ReportImg} source={{uri:image}}/>
                {image !== "." ?
                <Button onPress={()=>setImage(".")} buttonStyle={styles.Cancelbtn}>
                    <CancelIcon name="cancel" size={20} color="white"/>
                </Button>:null
                 }
                </View>

                </View>

                <View style={styles.Reportbtnarea}>
                <Button buttonStyle={styles.Reportbtn} onPress={ToastMsg}>
                <Text style={{color:"white"}}> {props.reportBtn} </Text>
                </Button>
                </View>
                </View>

                </View>
                </ScrollView>
            </View>
    )
}

export default ComplaintPageTemplate

const styles = StyleSheet.create({
    Page:{
        flex:1,
        backgroundColor:"white"
    },
    Scroll:{
        flex:1,
        height:"100%",
    },
    FaultView:{
        flex:1,
    },
    Report:{
        marginTop: "5%",
        color:"grey",
    },
    Subject:{
        marginTop:"10%",
        color:"grey",
    },
    Fault:{
        backgroundColor:"#DADFE1",
        color:"grey",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        margin:10,
        fontSize: 20,
        padding: 10
    },
    Comment:{
        marginTop: "20%",
        justifyContent:"center",
        alignItems:"center",
        marginBottom: "100%"        
    },
    toptxt:{
        position:"absolute",
        top:5,
        left:38,
        fontWeight:"bold",
        fontSize: 18
    },
    input:{
        width: "80%",
        height: "50%",
        margin: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        borderWidth: 2,
        paddingTop:10,
        paddingLeft: 10
    },
    Attach:{
        width: 100,
        height: 100,
        borderWidth: 2,
        borderStyle: "dotted",
        backgroundColor: "lightblue",
        marginRight: 0,
        marginTop: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    Attachtxt:{
        fontSize: 15,
        fontWeight:"bold"
    },
    Attacharea:{
        marginTop: 0,
        display:"flex",
        flexDirection: "row",
    },
    Reportbtnarea:{
        marginTop: 50
    },
    ReportImg:{
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    ReportImgView:{
        marginTop: 22,
       
    },
    Cancelbtn:{
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        width: 40,
        height: 40,
        backgroundColor:"tomato",
        marginLeft: 60,
    },
    Reportbtn:{
        padding: 15,
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})
