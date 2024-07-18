import { View, Text } from 'react-native'
import React from 'react'

export default function RecipeDetailScreen(props) {
    console.log(props.route.params);
  return (
    <View>
      <Text>RecipeDetailScreen</Text>
    </View>
  )
}