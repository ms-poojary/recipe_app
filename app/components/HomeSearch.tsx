// used in (tabs)/home

import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={{ color: Colors.primary.color8, fontWeight: '700', fontSize: 18 }}>Hello,</Text>
        <Text style={styles.topHead}>What would you like to cook Today ?</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput style={styles.SearchBar} placeholder="Type Here..." />
          <Ionicons name="search" size={24} color={Colors.primary.color8} />
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
    color: Colors.primary.color2,
    fontWeight: '800',
    marginVertical: 10
  },
  SearchBar: {
    width: '90%',
    padding: 7,
    backgroundColor: Colors.secondary.lightwhite,
    borderRadius: 8,
    marginRight: 10
  }
});
