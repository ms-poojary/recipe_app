
import { View, Text, Image, StyleSheet, Pressable,FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './loading';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../(tabs)/Explore'

type MexicanProps=NativeStackScreenProps<RootStackParamList,'Mexican'>;

const Mexican = ({navigation}:MexicanProps) => {
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
    const url = 'https://the-mexican-food-db.p.rapidapi.com/';     
           const options = {
      method: 'GET',
      // old key
    //   headers: {
    //   	'x-rapidapi-key': 'f4067ac23dmshb21fc863d9d6345p105c8ejsnfa2872eb4ce3',
		// 'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com'
    //   }


    // new Key
    headers: {
      'x-rapidapi-key': '36dab04c92mshdf61430d47f24fcp14b243jsn5cc8a50ad87f',
      'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com'
    }
    };
    

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parsing JSON directly
      // console.log('API Result:', result); 
    //  const result=[{
    //     id:"1",
    //   title:"Pressure cooker refried beans",
    //   difficulty:"Easy",
    //   image:"https://apipics.s3.amazonaws.com/mexican_api/1.jpg",
    //   },
    //   {
    //     id:"2",
    //   title:"Black bean chilli soup with corn dumplings",
    //   difficulty:"Easy",
    //   image:"https://apipics.s3.amazonaws.com/mexican_api/2.jpg"
    //   },
    //   {
    //     id:"8",
    //     title:"Chilaquiles with fresh tomatillo salsa",
    //     difficulty:"Medium",
    //     image:"https://apipics.s3.amazonaws.com/mexican_api/8.jpg"

    //   },
    //   {
    //     id:"9",
    //     title:"Chipotle baked eggs",
    //     difficulty:"Easy",
    //     image:"https://apipics.s3.amazonaws.com/mexican_api/9.jpg"

    //   },
    //   {
    //     id:"10",
    //     title:"Venison tacos with grilled spring onions and peanut salsa",
    //     difficulty:"Easy",
    //     image:"https://apipics.s3.amazonaws.com/mexican_api/10.jpg"
    //   }
  
    // ]

      setMexican(result); // Updating the state
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMexican();
  }, []);  // Corrected dependency array placement

  const renderMexicanRecipe = ({ item }: { item: any }) => (
    // console.log(item.id)
    

   <TouchableOpacity  onPress={()=>{
{navigation.navigate('MexicanDetails',{MexicanId:item.id})}
   }}>
     <View style={styles.FoodCard}>
     <Image
        source={{ uri: item.image }}
        style={styles.foodImage}
      />
      <View style={styles.body}>
        <Text style={{ fontFamily:'font5',color:Colors.secondary.darkgrey2, fontSize: 16 }}>{item.title}</Text>
        <View style={styles.icons}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Entypo name="bar-graph" size={20} color={Colors.secondary.darkgrey2} />
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
   </TouchableOpacity>
    
    
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
