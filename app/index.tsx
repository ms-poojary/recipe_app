import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './components/Home';

export default function Index() {
  // Load fonts
  const [fontsLoaded, error] = useFonts({
    'font1': require('@/assets/fonts/Outfit-Black.ttf'),
    'font2': require('@/assets/fonts/Outfit-ExtraBold.ttf'),
    'font3': require('@/assets/fonts/Outfit-Bold.ttf'),
    'font4': require('@/assets/fonts/Outfit-SemiBold.ttf'),
    'font5': require('@/assets/fonts/Outfit-Medium.ttf'),
    'font6': require('@/assets/fonts/Outfit-Regular.ttf'),
    'font7': require('@/assets/fonts/Outfit-Light.ttf'),
    'font8': require('@/assets/fonts/Outfit-ExtraLight.ttf'),
    'font9': require('@/assets/fonts/Outfit-Thin.ttf')
  });

  // Handle splash screen
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // You can return a loading spinner or splash screen here
  }

  return (
    <View style={styles.container}>
      <Home />
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
