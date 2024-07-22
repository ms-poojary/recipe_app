import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import Loading from './loading'
import { useNavigation } from 'expo-router';


const Recipes = ({ categories, meals }) => {
  const navigation= useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {categories.length === 0 || meals.length === 0 ?(
            <Loading size="large" className="mt-20"/>
          ) : (
            <View style={styles.container}>
              <Text style={styles.header}>Recipes</Text>
              <View style={styles.gridContainer}>
                {meals.map((item, index) => (
                  <RecipeCard key={index} item={item}  navigation={navigation}/>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const RecipeCard = ({ item ,navigation}) => {
  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.pressable}
      onPress={()=> navigation.navigate('components/RecipeDetail',{ itemId: 86,
        otherParam: 'anything you want here',})}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: item.strMealThumb }}
            style={styles.image}
            resizeMode="cover"
            onError={(e) => console.log("Error loading image", e.nativeEvent.error)}
          />
          <Text style={styles.text}>
            {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%',
    marginBottom: 10,
  },
  pressable: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 16,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    margin: 5,
    borderWidth: 2,
    borderColor: '#000',
  },
});

export default Recipes;
