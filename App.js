import React from 'react'
import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Search from './components/Search';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const RootHome = () => {
    return (
        <Tab.Navigator 
        screenOptions ={({route})=>({
                tabBarIcon:({color})=>{
                 let iconName;
                 if(route.name ==="Home"){
                     iconName ="home"
                 } else if (route.name === "Search"){
                     iconName ="city"
                 }
    
                 return <MaterialCommunityIcons name ={iconName} color={color} size ={25}/>
                 
    
                }
            })
         }
        
        tabBarOptions = {{
                activeTintColor:'white',
                inactiveTintColor:'grey',
                activeBackgroundColor:'#0F496E',
                inactiveBackgroundColor:'#0F496E'
        }}>
      <Tab.Screen name="Home" component ={HomeScreen} initialParams ={{city:"london"}}/>
      <Tab.Screen name="Search" component ={Search}/>
    </Tab.Navigator>
    
    )
}

const App = () => {
    return (
      <>
          <StatusBar barStyle ="light-content" backgroundColor="#0F496E"/> 


              <NavigationContainer>
              <Stack.Navigator initialRouteName ="Splash" headerMode="none">
                   <Stack.Screen name ="Splash" component = {SplashScreen} />
                       <Stack.Screen name ="rootHome" component ={RootHome}/>
                       
                   </Stack.Navigator>
              </NavigationContainer>


        
        </>
    )
}

export default App


