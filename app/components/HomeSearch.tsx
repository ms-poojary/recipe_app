// used in (tabs)/home

import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const HomeSearch = () => {
  const navigation=useNavigation()
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={{ color: Colors.primary.color7, fontSize: 18,fontFamily:"font5"}}>Hello,</Text>
        <Text style={styles.topHead}>What would you like to cook Today ?</Text>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput style={styles.SearchBar} placeholder="Type Here..." />
          <Ionicons name="search" size={24} color={Colors.primary.color8} />
        </View> */}
        <View style={{alignItems:'center'}}>
        <Image source={require('@/assets/images/food16.jpg')} style={{width:340,height:270,marginVertical:10,resizeMode: "cover" ,borderRadius:20}}/>
      <Text style={styles.foodText}>Cook Your Own <Text style={{color:Colors.primary.color7}}>Food</Text></Text>
    
        
        <Pressable onPress={()=>{navigation.navigate('Explore')}}>
          <View style={styles.explorebtn}>
            <Text style={styles.exploreText}>Explore</Text>
          </View>
        </Pressable>
        </View>
       
      </View>
      
    </View>
  );
}

export default HomeSearch;

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5
  },
  topHead: {
    fontSize: 22,
    color: Colors.secondary.darkgrey1,
    fontFamily:'font5',
    marginVertical: 10
  },
  foodText:{
    fontSize:22,
    fontFamily:'font5',
    textAlign:'center',
    color:Colors.secondary.darkgrey1
  },
  explorebtn:{
    backgroundColor:Colors.primary.color8,
    width:150,
    justifyContent:'center',
    borderRadius:10,
    paddingVertical:10,
    margin:10,
    alignItems:'center'
  },
  exploreText:{
    color:'white',
    fontFamily:'font5',
fontSize:20

  },
  SearchBar: {
    width: '90%',
    padding: 7,
    backgroundColor: Colors.secondary.lightwhite,
    borderRadius: 8,
    marginRight: 10
  }
});
