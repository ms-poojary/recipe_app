import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';


export default function RecipeDetail({ route }) {
  let item=props.route.params;
const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>Recipe Detail Screen</Text>
      <Text>Name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
