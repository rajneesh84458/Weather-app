import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
const {width} =Dimensions.get('window')


const Header = (props) => {
    return (
        <View style={styles.header}>
             <Text style={styles.headingText}>{props.name}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

 header:{
   
       //width,
       height:60,
       margin:10,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#0F496E',
       marginHorizontal:10,
       borderRadius:20
 },
 headingText:{
     color:'white',
     fontSize:20,
    // textAlign:'center'
 }

})
