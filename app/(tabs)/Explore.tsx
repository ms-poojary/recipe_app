import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import GetRecipe from '../components/GetRecipe'
import Mexican from '../components/Mexican'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import MexicanDetails from '../components/MexicanDetails'

export type RootStackParamList = {
 Mexican:undefined,
 MexicanDetails:{MexicanId:number}
};

const Stack=createNativeStackNavigator<RootStackParamList>();



const Explore = () => {
  return (
  <Stack.Navigator initialRouteName='Mexican' screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name='Mexican' component={Mexican}/>
    <Stack.Screen name='MexicanDetails'component={MexicanDetails}/>
  </Stack.Navigator>
 
    
  )
}
const styles=StyleSheet.create({
})

export default Explore