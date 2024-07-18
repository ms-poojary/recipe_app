// used in (tabs)/home

import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import Animated,{  FadeInDown } from 'react-native-reanimated';
import { CategoryData } from './index'


  

const Categories = ({categories, activeCategory, handleChangeCategory }) => {
  return (
    <SafeAreaView>
      <View style={styles.CategoryBg}>
        <Text style={styles.CategoryText}>Recipe Categories</Text>
      </View>

      {/* <Animated.View entering={FadeInDown(500).springify()}> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat, index) => {
            const isActive = cat.strCategory === activeCategory;
            return (
              <View key={index} style={styles.Categories}>
                <View style={[styles.Container, isActive && styles.activeContainer]}>
                  <Pressable
                    style={[styles.CategoriesCard, isActive && styles.activeCategoriesCard]}
                    onPress={() => handleChangeCategory(cat.strCategory)}
                  >
                    <Image
                      source={{ uri: cat.strCategoryThumb}}
                      style={styles.CategoriesImage}
                    />
                  </Pressable>
                  <View>
                    <Text style={[styles.CardText, isActive && styles.activeCardText]}>
                      {cat.strCategory}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      {/* </Animated.View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Categories: {
    backgroundColor: Colors.secondary.lightwhite,
    flexDirection: 'row',
    padding: 10,
  },
  CategoriesCard: {
    width: 100,
    height: 100,
    backgroundColor: Colors.secondary.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    margin: 5,
    paddingVertical: 10,
  },
  CategoriesImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 5,
  },
  Container: {
    alignItems: 'center',
  },
  CardText: {
    fontSize: 12,
    color: Colors.primary.color6,
    width: 90,
    textAlign: 'center',
  },
  CategoryBg: {
    paddingHorizontal: 10,
  },
  CategoryText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: Colors.primary.color2,
  },
  activeContainer: {
    backgroundColor: Colors.secondary.lightgrey,
  },
  activeCategoriesCard: {
    borderColor: Colors.primary.color1,
    borderWidth: 2,
  },
  activeCardText: {
    color: Colors.primary.color1,
  },
});

export default Categories;
