import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Header from '../components/Header';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';

const HomeScreen = (props) => {

    const [info,setInfo]= useState({
          name:"loading",
          temp:"loading",
          humidity:'loading',
          desc:'loading',
          icon:'loading'
    })



useEffect(()=>{
        getWeather()
       
},[])

    const getWeather = async()=> {
            let MyCity = await AsyncStorage.getItem("newCity")

            if(!MyCity){
                const {city} = props.route.params
                MyCity =city
    
            }

           
        fetch(`http://api.openweathermap.org./data/2.5/weather?q=${MyCity}&APPID=51750cbd84762a22b0dbfa950e729095&units=metric`)
        .then(data=>data.json())
        .then(results =>{
            //console.log(results)
            setInfo({
                name:results.name,
                temp:results.main.temp,
                humidity:results.main.humidity,
                desc:results.weather[0].description,
                icon:results.weather[0].icon
            })
        })
        .catch(err =>{
            alert(err.message)
        })

    }
if( props.route.params != "london"){
        getWeather()
}
    return (
        <View style={styles.container}>
        
           <Header name ="Weather App"/>

            <View style={styles.headingStyle}>

                <Text style={[styles.textStyle,{fontWeight:'bold',fontSize:20,color:'#0F496E'}]}>{info.name}</Text>

                <Image style={{width:160,height:160,resizeMode:'contain'}} 
                      source ={{uri:"https:openweathermap.org/img/w/"+info.icon+".png"}}
                />
            </View>

     <Animatable.View animation="fadeInUpBig"  duraton="2000" style={styles.cardList}  >
            <View 
            style={styles.card}>
                <Text style={styles.textStyle}>Temperature : {info.temp} °C</Text>
                </View >

            <View 
                     style={styles.card}>
                <Text style={styles.textStyle}>Humidity : {info.humidity} °C</Text>
                </View >

            <View 
                 style={styles.card}>
                <Text style={styles.textStyle}>Description : {info.desc}</Text>
                </View >
     </Animatable.View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#60BB78',

},
headingStyle:{
     justifyContent:'center',
     alignItems:'center',
     padding:5,
     //backgroundColor:'red'
},
textStyle:{
    padding:10,
    fontSize:20,
    color:'blue',
    //fontStyle:'normal'

    
},
cardList:{
   
    flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 30,


}
})
