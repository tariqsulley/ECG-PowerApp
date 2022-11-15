import { Dimensions, StyleSheet, Text, View,Alert } from 'react-native'
import React, {useEffect} from 'react'
import {Gesture,GestureDetector} from "react-native-gesture-handler"
import Animated, { color, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useCallback } from 'react'
import { useImperativeHandle } from 'react'
import { Button } from 'react-native-elements'
const height = Dimensions.get("window").height
const MAX_TRANSLATE_Y = -height + 50;

type BottomSheetProps = {}

export type BottomSheetRefProps = {
    scrollTo:(destination)
}

const BottomSheet = React.forwardRef(({},ref) => {
    const translateY = useSharedValue(0)
    const active = useSharedValue(false)

    const isActive = useCallback(()=>{
        return active.value
    },[])
    useImperativeHandle(ref,()=>({scrollTo,isActive}),[scrollTo,isActive])
    const context = useSharedValue({y:0})

    const scrollTo = useCallback((destination)=>{
       "worklet"
       active.value = destination!==0
       translateY.value = withSpring(destination,{damping:50})
    },[])

    const gesture = Gesture.Pan().onStart(()=>{
        context.value = {y:translateY.value}
    }).onUpdate((event)=>{
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value,MAX_TRANSLATE_Y)
        console.log(translateY.value)
    }).onEnd(()=>{
        if(translateY.value > -245  ){
            scrollTo(0)
        }
        else if(translateY.value < -320){
            scrollTo(MAX_TRANSLATE_Y)
        }
    })

    {/*
    useEffect(()=>{
        scrollTo(-height/3)
    })*/}

    const rBottomSheetStyle = useAnimatedStyle(()=>{
        return{
            transform: [{translateY: translateY.value},]
        }
    })

  return (
    <GestureDetector gesture={gesture}>
        
        <Animated.View style={[styles.BottomSheetContainer,rBottomSheetStyle]}>
            <View style={styles.line}/>
            <Button onPress={()=>Alert.alert("Hello")} buttonStyle={styles.cancelbtn}>
            </Button>
            
        </Animated.View>
    </GestureDetector>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
    BottomSheetContainer:{
        height: height,
        top: height,
        borderRadius: 25,
        width: "100%",
        backgroundColor: "red",
        position:"absolute"
    },
    line:{
        width: 75,
        height: 4,
        marginVertical: 15,
        borderRadius: 2,
        backgroundColor: "grey",
        alignSelf: "center"
    },
    cancelbtn:{
        alignSelf:"center",
        width: "90%",
        height: "24%"
    },
    txt:{
        fontSize: 30,
        color:"white"
    }
})