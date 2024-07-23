// import { Tabs } from 'expo-router';
// import { Ionicons,FontAwesome } from '@expo/vector-icons';
// import { Colors } from '@/constants/Colors';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown:false,
//         tabBarLabelStyle: { display: 'none' }, // Hide labels by setting display to none 
//         // tabBarStyle: { height: 60},
//         tabBarInactiveBackgroundColor:Colors.primary.color8,
//         tabBarActiveBackgroundColor:Colors.primary.color8,
//         tabBarInactiveTintColor: Colors.secondary.lightgrey,
//         tabBarActiveTintColor: Colors.primary.color6,
//       }}
//     >
//       <Tabs.Screen
//         name='home'
//         options={{
//           tabBarLabel: 'Home',
//           headerShown:false,
//           tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
//         }}
//       />
//         <Tabs.Screen
//         name='explore'
//         options={{
//           tabBarLabel: 'Explore ',
//           tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
//         }}
//       />
//       {/* <Tabs.Screen 
//       name='favorite'
//       options={
//         {
//           tabBarIcon:({color,size})=> <Ionicons name="heart" size={size} color={color} />
//         }
//       }
//       /> */}
//     </Tabs>
    
//   );
// }

import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import Home from './home'
import Explore from './Explore'
export type RootStackParamList = {
  Home:undefined,
  Explore:undefined
 
};

const Stack=createNativeStackNavigator<RootStackParamList>();



export default function TabLayout() {
  return (
  <Stack.Navigator initialRouteName='Home' screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Explore'component={Explore}/>
  </Stack.Navigator>
 
    
  )
}
const styles=StyleSheet.create({
})
