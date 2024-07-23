import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Correct import for navigation
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import HomeSearch from '../components/HomeSearch';
import Categories from '../components/Categories';
import Recomend from '../components/Recomend';
import Recipes from '../components/recipes'
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();

  const [activeCategory, setActiveCategory] = useState('Chicken');
  const [categories, setCategories] = useState([]); // Adjust type as per your API response
  const [meals,setMeals]=useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);


  const handleChangeCategory = category =>{
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }


  const getCategories = async () => {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got response:', response.data);
      if (response && response.data) {
        setCategories(response.data.categories); // Assuming 'categories' is the key in your API response
      }
    } catch (error) {
      console.log('error fetching categories:', error);
    }
  };

  const getRecipes = async (category="Chicken") => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      // console.log('got recipes:', response.data);
      if (response && response.data) {
       setMeals(response.data.meals); // Assuming 'categories' is the key in your API response
      }
    } catch (error) {
      console.log('error fetching categories:', error);
    }
  };

  return (
    <SafeAreaView >
    <ScrollView>
    <View>
        <HomeSearch />
        {categories.length>0&&<Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />}
        {/* recipes */}
        
          <Recipes meals={meals} categories={categories}/>
        <Recomend />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
