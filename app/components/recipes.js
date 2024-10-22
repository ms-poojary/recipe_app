import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './loading'; // Ensure the correct import path
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
//import { WebView } from 'react-native-webview';
//import {youtubeiframe} from "react-native-youtube-iframe";
// import {WebViewProps} from 'react-native-webview';
//import YoutubeIframe from 'react-native-youtube-iframe'; // Ensure correct import
const Recipes = ({ categories = [], meals = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [mealData, setMealData] = useState(null);

  const handlePress = async (item) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`);
      setMealData(response.data.meals[0]);
      setSelectedItem(item);
      setModalVisible(true);
    } catch (error) {
      console.log('Error fetching meal data:', error);
    }
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedItem(null);
    setMealData(null);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {categories.length === 0 || meals.length === 0 ? (
            <Loading size="large" />
          ) : (
            <View style={styles.container}>
              <Text style={styles.header}>Your Recipes</Text>
              <View style={styles.gridContainer}>
                {meals.map((item, index) => (
                  <RecipeCard key={index} item={item} onPress={() => handlePress(item)} />
                ))}
              </View>
            </View>
          )}
        </View>
        {mealData && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleClose}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContentWrapper}>
                <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                <AntDesign name="closecircle" size={24} color={Colors.primary.color8} />     
                           </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.modalContent}>
                  <Image
                    source={{ uri: mealData.strMealThumb }}
                    style={styles.modalImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.modalHeader}>{mealData.strMeal}</Text>
                  <Text style={styles.modalText}>{mealData.strArea}</Text>
                  <View style={styles.iconRow}>
                    <View style={styles.iconContainer}>
                      <Icon name="time-outline" size={24} color={Colors.primary.color9} />
                      <Text style={styles.iconText}>30 mins</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <Icon name="restaurant-outline" size={24} color={Colors.primary.color9}  />
                      <Text style={styles.iconText}>2 servings</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <Icon name="flame-outline" size={24} color={Colors.primary.color9}  />
                      <Text style={styles.iconText}>300 kcal</Text>
                    </View>
                  </View>
                  <Text style={styles.ingredientHeader}>Ingredients</Text>
                  <View style={styles.ingredientList}>
                    {Object.keys(mealData).map((key, index) => {
                      if (key.startsWith('strIngredient') && mealData[key]) {
                        const measureKey = `strMeasure${key.slice(13)}`;
                        return (
                          <Text key={index} style={styles.ingredientText}>
                            {mealData[key]} - {mealData[measureKey]}
                          </Text>
                        );
                      }
                      return null;
                    })}
                  </View>
                  <Text style={styles.instructionHeader}>Instructions</Text>
                  <Text style={styles.instructionText}>{mealData.strInstructions}</Text>
                  
                </ScrollView>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const RecipeCard = ({ item, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.pressable} onPress={onPress}>
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
    fontSize: 20,
  fontFamily:'font5',
  color:Colors.primary.color7,
    textAlign: 'center',
    marginBottom: 10,
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
    fontSize:12,
    color:Colors.primary.color3
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    margin: 5,
    borderWidth: 2,
    borderColor: Colors.secondary.grey,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.secondary.lightwhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'white',
    borderRadius: 0,
    padding: 10,
    paddingTop:30
  },
  closeButton: {
    position: 'absolute',
    top:5,
    right:5,
  },
  closeButtonText: {
    // fontSize: 18,
    // fontWeight: 'bold',
    // color: 'black',
  },
  modalContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  modalHeader: {
    marginTop: 15,
    fontSize: 22,
    fontFamily:'font5',
    textAlign: 'center',
    color:Colors.primary.color7
  },
  modalText: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
    fontFamily:'font6',
    color:Colors.primary.color4
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    fontFamily:'font6'
  },
  ingredientHeader: {
    marginTop: 15,
    fontSize: 20,
    fontFamily:'font5',
    color:Colors.primary.color7,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  ingredientList: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  ingredientText: {
    fontSize: 14,
    fontFamily:'font6',
    color:Colors.secondary.darkgrey1,
    marginBottom: 5,
  },
  instructionHeader: {
    marginTop: 15,
    fontSize: 20,
    alignSelf: 'flex-start',
    fontFamily:'font5',
    marginLeft: 10,
    color:Colors.primary.color7,
    
  },
  instructionText: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
    fontFamily:'font6',
    color:Colors.secondary.darkgrey1
  },
});

export default Recipes;
