import { Tabs } from 'expo-router';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle: { display: 'none' }, // Hide labels by setting display to none 
        // tabBarStyle: { height: 60},
        tabBarInactiveBackgroundColor:Colors.primary.color8,
        tabBarActiveBackgroundColor:Colors.primary.color8,
        tabBarInactiveTintColor: Colors.secondary.lightgrey,
        tabBarActiveTintColor: Colors.primary.color6,
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarLabel: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
        <Tabs.Screen
        name='explore'
        options={{
          tabBarLabel: 'Explore ',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen 
      name='favorite'
      options={
        {
          tabBarIcon:({color,size})=> <Ionicons name="heart" size={size} color={color} />
        }
      }
      />
    </Tabs>
  );
}