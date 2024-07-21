// import { Stack } from 'expo-router';
// import MexicanDetails from './components/MexicanDetails';

// export default function RootLayout() {
//   return (
//     <Stack initialRouteName='index' screenOptions={
//       {
//         headerShown:false
//       }
//     }
//      >
//       <Stack.Screen name="index" />
//       <Stack.Screen name="(tabs)" />
//     <Stack.Screen name="components/Mexican"/>
//     <Stack.Screen name="MexicanDetails" component={MexicanDetails}/>

//     </Stack>
//   );
// }

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="components/Mexican" />
      <Stack.Screen name="components/MexicanDetails" />
      <Stack.Screen name="components/recipes"/>
      <Stack.Screen name="components/RecipeDetail"/>
    </Stack>
  );
}
