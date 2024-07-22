import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";


const ingredients = [
  "1 tbsp vegetable oil",
  "Bunch spring onions, finely chopped",
  "2 garlic cloves, finely chopped",
  "1 tsp cumin seeds",
  "400g tin black beans in water, rinsed and drained",
  "2 tsp smoked paprika",
  "100g cooked rice",
  "1 large avocado",
  "Juice 1 lime",
  "1 red chilli, finely chopped",
  "150g ripe cherry tomatoes, roughly chopped",
  "Bunch fresh coriander, roughly chopped, reserving a few whole leaves to serve",
  "4 large flour tortillas",
  "125g cooked chicken, shredded",
  "100g mild cheddar, grated",
  "Hot sauce such as Tabasco or Cholula to serve (optional)"
];

const MexicanDetails = ({route}) => {

  const {name}=route.params
  return (
    <Text>hello  {name}</Text>
    // <SafeAreaView>
  //   <View>
  //     <View>
  //       <View>
  //         <Image
  //           source={{
  //             uri: "https://apipics.s3.amazonaws.com/vegan_api/45.jpg",
  //           }}
  //           style={{ width: "100%", height: 320, resizeMode: "cover" }}
  //         />
  //       </View>
  //     </View>
  //     <View style={styles.Container}>
  //       <View style={styles.topHead}>
  //         <Text
  //           style={{
  //             fontSize: 18,
  //             fontWeight: "bold",
  //             color: Colors.primary.color8,
  //           }}
  //         >
  //           Smoky chipotle tofu with tomatoes and avocado
  //         </Text>
  //         <Ionicons name="fast-food" size={26} color={Colors.primary.color7} />
  //       </View>
  //       <ScrollView>
  //         <View>
  //         <View>
  //           <Text style={{ fontSize: 12, color: Colors.secondary.grey }}>
  //             Use leftover roast chicken to make these thrifty and delicious
  //             chicken burritos. These filling burritos are packed with black
  //             beans, rice and guacamole.
  //           </Text>
  //           <View
  //             style={styles.Iconbox} >
  //             <Text style={{ fontSize: 16, margin: 5,color:Colors.primary.color10 }}>Serves 4</Text>
  //             <View style={{ flexDirection: "row", gap: 2 }}>
  //               <FontAwesome name="star" size={20} color="yellow" />
  //               <FontAwesome name="star" size={20} color="yellow" />
  //               <FontAwesome name="star" size={20} color="yellow" />
  //               <FontAwesome name="star" size={20} color="yellow" />
  //               <FontAwesome name="star-half" size={20} color="yellow" />
  //             </View>
  //           </View>
  //             <View style={styles.IngredientBox}>
  //           <Text style={{ fontSize: 17, textAlign: 'center', marginTop: 10 }}>Ingredients</Text>
  //           {ingredients.map((item, index) => (
  //             <View key={index} style={styles.itemContainer}>
  //               <Text style={styles.itemText}>{item}</Text>
  //             </View>
  //           ))}
  //         </View>
            
  //         </View>
  //         </View>
  //       </ScrollView>
  //     </View>
  //   </View>
  //   // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    // backgroundColor:Colors.primary.color9
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    position: "relative",
    top: -27,
    margin: 0,
  },
  topHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingBottom: 5,
    // backgroundColor:Colors.primary.color10,
    // opacity:0.8,

    width: "100%",
  },
  Iconbox:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  IngredientBox:{

    backgroundColor:'yellow'
  },
  itemContainer:{
    padding:10
  },
  itemText:{

  }
  
});

export default MexicanDetails;
