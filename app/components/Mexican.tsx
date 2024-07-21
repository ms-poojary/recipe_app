// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
// import { Entypo, Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

// type FoodItem = {
//   id: string;
//   name: string;
//   image: number; // Change this type based on your image source type
//   difficulty: string;
// };

// const foodData: FoodItem[] = [
//   { id: '1', name: 'Food 1', image: require('@/assets/images/food0.jpg'), difficulty: 'easy' },
//   { id: '2', name: 'Food 2', image: require('@/assets/images/food1.jpg'), difficulty: 'medium' },
//   // Add more food items here
// ];

// const Mexican = () => {
//   const [favoriteItems, setFavoriteItems] = useState<Set<string>>(new Set());

//   const toggleFavorite = (id: string) => {
//     setFavoriteItems((prevFavorites) => {
//       const newFavorites = new Set(prevFavorites);
//       if (newFavorites.has(id)) {
//         newFavorites.delete(id);
//       } else {
//         newFavorites.add(id);
//       }
//       return newFavorites;
//     });
//   };

//   const renderItem = ({ item }: { item: FoodItem }) => (
//     <View style={styles.FoodCard}>
//       <Image source={item.image} style={styles.foodImage} />
//       <View style={styles.body}>
//         <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
//         <View style={styles.icons}>
//           <View style={{ flexDirection: 'row', gap: 10 }}>
//             <Entypo name="bar-graph" size={20} color="black" />
//             <Text>{item.difficulty}</Text>
//           </View>
//           <Pressable onPress={() => toggleFavorite(item.id)}>
//             <Ionicons
//               name={favoriteItems.has(item.id) ? 'heart-sharp' : 'heart-outline'}
//               size={24}
//               color={favoriteItems.has(item.id) ? 'red' : 'black'}
//             />
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView>
//       <FlatList
//         data={foodData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   FoodCard: {
//     flexDirection: 'row',
//     margin: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   foodImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 5,
//   },
//   body: {
//     flex: 1,
//     paddingLeft: 10,
//   },
//   icons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
// });

// export default Mexican;













// Hello Raaz.., this is the working API code. if you want to do any kind of experiment then please use the above codes.
// Running the following code multiple times may cross the request limit. 
// SO kindly minimize the use of following code and try do the final test only


import { View, Text, Image, StyleSheet, Pressable,FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './loading';
import { useNavigation } from 'expo-router';

const Mexican = () => {
  const navigation=useNavigation()
  const [mexican, setMexican] = useState([]);

const [favoriteItems, setFavoriteItems] = useState<Set<string>>(new Set());

const toggleFavorite = (id: string) => {
  setFavoriteItems((prevFavorites) => {
    const newFavorites = new Set(prevFavorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    return newFavorites;
  });
};


  async function fetchMexican() {
    const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '469c087769mshc6a737c2e32227bp1844cajsn45906e9527d3',
        'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
      }
    };
    

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parsing JSON directly
      // console.log('API Result:', result); 

      setMexican(result); // Updating the state
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMexican();
  }, []); // Corrected dependency array placement

  const renderMexicanRecipe = ({ item }: { item: any }) => (
    // console.log(item.id)
    

   <Pressable  onPress={()=>{
    navigation.navigate('components/MexicanDetails')
   }}>
     <View style={styles.FoodCard}>
     <Image
        source={{ uri: item.image }}
        style={styles.foodImage}
      />
      <View style={styles.body}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
        <View style={styles.icons}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Entypo name="bar-graph" size={20} color="black" />
            <Text>{item.difficulty}</Text>
          </View>
          <Pressable onPress={() => toggleFavorite(item.id)}>
          <Ionicons
          name={favoriteItems.has(item.id) ? 'heart-sharp' : 'heart-outline'}
          size={24}
          color={favoriteItems.has(item.id) ? 'red' : 'black'}
          />
          </Pressable>      
   </View>
      </View>
      </View>
   </Pressable>
    
    
  );

  return (

    <SafeAreaView>
        {mexican.length === 0 ? (
            <Loading size="large" className="mt-20"/>
          ) : (
        <FlatList
        data={mexican}
        renderItem={renderMexicanRecipe}
        keyExtractor={item => item.id.toString()}
      />
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FoodCard: {
    height: 150,
    backgroundColor: Colors.secondary.lightwhite,
    margin: 5,
    borderColor: Colors.primary.color7,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  foodImage: {
    width: 150,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight:5
  },
  body: {
    width: '55%',
    height: '90%',
    padding:5,
    // margin: 10,
    justifyContent: 'space-between'
  },
  icons: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Mexican;
