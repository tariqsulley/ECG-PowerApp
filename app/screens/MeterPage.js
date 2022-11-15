import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import BottomSheet from '../components/BottomSheet'
import { TouchableOpacity } from 'react-native'
import { useCallback } from 'react'
import { useRef } from 'react'

function MeterPage(){
    const ref = useRef(null)

    const onPress = useCallback(()=>{
        const isActive = ref?.current?.isActive()
        if(isActive){
        ref?.current?.scrollTo(0)}
        else{
            ref?.current?.scrollTo(-400)
        }
    })
    return(
    <GestureHandlerRootView style={styles.MeterPage}>
        <Header text="Meters"/>
        <View style = {styles.container}>
        <TouchableOpacity onPress ={onPress} style={styles.button}>
            
        </TouchableOpacity>
        <BottomSheet ref={ref}/>
        </View>
    </GestureHandlerRootView>
    )
}

export default MeterPage

const styles = StyleSheet.create({
    MeterPage:{
        flex: 1,
    },
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        height: 50,
        borderRadius: 25,
        opacity: 0.6,
        aspectRatio:1,
        backgroundColor:"blue"
    }
})