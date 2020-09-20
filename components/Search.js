import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Search = ({navigation}) => {
     const [city,setCity] = useState("")
     const [cities,setCities] = useState([])

     const fetchCities = (text)=> {
             setCity(text)

             fetch(`https://autocomplete.wunderground.com/aq?query=` +text)
                  .then(item=>item.json())
                  .then((cityData)=>{
                     // console.log(cityData)
                     setCities(cityData.RESULTS.slice(0,9))
                  })
                 }

          const btnClick = async() => {
              await AsyncStorage.setItem("newCity",city)
              navigation.navigate("Home",{city:city})
          }     

          const listClick =  async(cityname) => {
                setCity(cityname)
                await AsyncStorage.setItem("newCity",cityname)
                navigation.navigate("Home",{city:cityname})

          } 

    return (
        <View style={styles.search}>
           <Header name= "Search Screen"/>

           <View style={{flex:1}}>

              <View style={styles.searchButton}>
              <EvilIcons name ="search" color="grey" size ={28}  style ={{paddingTop:10,paddingHorizontal:5}}/>
              <TextInput  style={styles.input}
                        placeholder="Search the desired City"
                        value ={city}
                        onChangeText={(text)=>fetchCities(text)}
                  
                  />
              </View>
          
           

                  <TouchableOpacity onPress ={()=>btnClick()}
                                style={styles.button}>
                        <Text style={{  fontSize:20, fontWeight:'bold',color:'white'}}>Cities</Text>
                  </TouchableOpacity>



                   <View style={{marginTop:10}}>

                   <FlatList
                         keyExtractor ={(item)=>item.name}
                         data={cities}
                         renderItem ={({item})=>{
                             return (
                                     <TouchableOpacity  onPress = {()=>listClick(item.name)}

                                            style={styles.card}>
                                         <Text>{item.name}</Text>
                                     </TouchableOpacity>
                             )
                         }}

                        
                  />
                   </View>
                   </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    search:{
            flex:1,
            },
    searchButton:{
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'grey',
        marginBottom:10,
        marginHorizontal:20,
        borderRadius:10,
        
    },
    input:{
        
        fontSize:18
    },
    button:{
           padding:10,
           backgroundColor:'#60BB78',
           flexDirection:'row',
           justifyContent:'center',
           alignItems:'center',
           marginHorizontal:30,
           borderColor:'#8D5F61',
           borderWidth:1,
           borderRadius:10
         },
         card:{
            
             marginTop:10,
             padding:10,
             borderColor:"grey",
             borderWidth:0.5,
             marginHorizontal:15,
             elevation:5,
             backgroundColor:'white',
             borderRadius:5

         }
})
