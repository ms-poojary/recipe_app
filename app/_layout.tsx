import { Stack } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function RootLayout() {
  return (
    
    <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="components/Mexican" />
      <Stack.Screen name="components/MexicanDetails" />
      <Stack.Screen name="components/recipes" />
      <Stack.Screen name="components/RecipeDetail" />
    </Stack>
  );
}

