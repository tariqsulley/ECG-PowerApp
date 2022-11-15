import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect } from 'react'
import Header from "../components/Header"
import Animated,{withRepeat, withSpring,useSharedValue,useAnimatedStyle, withTiming} from "react-native-reanimated"
 
const SIZE =100
function HomePage() {
  const handleRotation = (progress:Animated.SharedValue<number>)=>{
    "worklet";
    return `${progress.value * 2 * Math.PI}rad`
  }  
  const progress = useSharedValue(1)
    const scale = useSharedValue(2)

    const reanimatedStyle = useAnimatedStyle(()=>{
      return{
        opacity: progress.value,
        borderRadius: progress.value * SIZE/2,
        transform: [{scale:scale.value},{rotate: handleRotation(progress)}],
    }
    },[])

    useEffect(()=>{
      progress.value = withRepeat(withSpring(0.5),3,true);
      scale.value = withRepeat(withSpring(1),3,true)
    },[])
    return (
    <View style = {styles.mainpage}>
        <Header text="Home"/>
      <View style={styles.container}>
      <Animated.View style={[{height: SIZE,width:SIZE,backgroundColor:"blue"},reanimatedStyle]}  />
      </View>
    </View>
    );
  }

export default HomePage

const styles = StyleSheet.create({
    mainpage:{
        flex:1
    },
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
})