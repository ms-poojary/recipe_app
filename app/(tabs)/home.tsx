import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

import HomeSearch from '../components/HomeSearch';
import Categories from '../components/Categories';
import Recomend from '../components/Recomend';


const home = () => {

  const navigation= useNavigation();

  return (
    

   <SafeAreaView>
     <View style={styles.Container}>
     <Button title='go back' color={Colors.primary.color5} onPress={navigation.goBack}/>
     <HomeSearch/>
     <Categories/>
     <Recomend/>
    </View>
   </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  Container:{
    
  }

})

export default home