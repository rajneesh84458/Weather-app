import React,{useEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,StatusBar } from 'react-native'

import {useNavigation} from '@react-navigation/native'

const SplashScreen = () => {
   
useEffect(()=>{
        setTimeout(() => {
            gotoHome()
        },2000);
 },[])

 const navigation = useNavigation();

 const gotoHome = () => {
     navigation.navigate('rootHome')
 }

    return (
           
          
          
           <ImageBackground 
                 style={styles.full}
                 source ={require('./assets/splash1.jpg')}         
                          
                          >
  
           </ImageBackground>
         
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    full:{
        flex:1,
        resizeMode:'cover'
    }
})
