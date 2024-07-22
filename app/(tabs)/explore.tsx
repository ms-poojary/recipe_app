import { View, Text } from 'react-native'
import React from 'react'
import GetRecipe from '../components/GetRecipe'
import Mexican from '../components/Mexican' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import MexicanDetails from '../components/MexicanDetails'

const explore = () => {
  return (
    <SafeAreaView>
         {/* <GetRecipe/> */}
       <Mexican/>
      {/* <MexicanDetails/> */}
    </SafeAreaView>
    
  )
}
const styles=StyleSheet.create({
})

export default explore