

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import TabLayout from './(tabs)/_layout';
import Mexican from './components/Mexican';
import MexicanDetails from './components/MexicanDetails';
import Recipes from './components/recipes';
// import { Stack } from 'expo-router';



const Stack = createNativeStackNavigator();


export default function RootLayout() {
  return (
    // <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="index" />
    //   <Stack.Screen name="(tabs)" />
    //   <Stack.Screen name="components/Mexican" />
    //   <Stack.Screen name="components/MexicanDetails" />
    //   <Stack.Screen name="components/recipes"/>
    //   <Stack.Screen name="components/RecipeDetail"/>
    // </Stack>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="(tabs)" component={(TabLayout)} />
      <Stack.Screen name="Mexican" component={Mexican} />
      <Stack.Screen name="MexicanDetails" component={MexicanDetails} />
      <Stack.Screen name="Recipe" component={Recip}

    </Stack.Navigator>
  </NavigationContainer>
  );
}
