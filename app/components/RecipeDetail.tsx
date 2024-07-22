import { View, Text, ScrollView, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecipeDetail = ({ route }) => {
  const { itemId, otherParam } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetail;
