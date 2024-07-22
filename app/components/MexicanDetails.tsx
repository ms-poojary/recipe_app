import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Loading from "./loading"; // Ensure this path is correct
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "./../(tabs)/explore";
import { FontAwesome } from "@expo/vector-icons";

type MexicanDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "MexicanDetails"
>;

const MexicanDetails = ({ route }: MexicanDetailsProps) => {
  const { MexicanId } = route.params;
  // const MexicanId =route.params

  const [MexicanData, setMexicanData] = useState<any | null>(null);


  async function fetchMexicanDetails() {
    // const url = `https://the-mexican-food-db.p.rapidapi.com/${MexicanId}`;
    

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f4067ac23dmshb21fc863d9d6345p105c8ejsnfa2872eb4ce3",
        "x-rapidapi-host": "the-mexican-food-db.p.rapidapi.com",
      },
    };

    try {
      // const response = await fetch(url, options);
      // const result = await response.json();

      const result = {
        description:
          "Tommi Miers’ chipotle baked eggs are a simple way to start the day, with all the sweetly smoky flavours of a tomato-chipotle sauce. Mop up with tortillas or flatbreads.",
        difficulty: "Easy",
        id: "9",
        image: "https://apipics.s3.amazonaws.com/mexican_api/9.jpg",
        ingredients: [
          "3 tbsp olive oil",
          "1 onion, finely sliced",
          "2 garlic cloves, finely sliced",
          "1 small red pepper, deseeded and finely sliced",
          "1 red chilli, finely chopped",
          "1 tsp ground cumin",
          "1 tsp ground cinnamon",
          "1 tsp allspice",
          "A few large pinches of Mexican oregano or hoja santa (optional; see Know How)",
          "1 tbsp chipotles in adobo (or more to taste; see Know How)",
          "2 x 400g tins chopped tomatoes or 700g fresh tomatoes, chopped",
          "2-3 tsp brown sugar",
          "1 tbsp red wine vinegar",
          "8 medium free-range egg",
          "8 corn or flour tortillas",
          "Sliced avocado",
          "Handful coriander leaves or chervil, torn",
        ],
        method: [
          {
            "Step 1":
              "Heat the oven to 170°C fan/gas 5. Warm the olive oil in a large ovenproof frying pan over a medium heat – or use a regular pan and transfer to a baking dish for step 3. Add the onion, garlic, pepper and chilli. Season with a few pinches of salt and fry gently for 20 minutes until the pepper is soft and sweet.",
          },
          {
            "Step 2":
              "Add the spices and oregano/hoja santa, if using, Cook for 30 seconds more, then add the chipotles, tomatoes, sugar and vinegar with another big pinch of salt. The amount of sugar needed to season this will depend on whether you’re using tinned or fresh tomatoes and their ripeness. Pour in 250ml water, then simmer for 15 minutes until the sauce has reduced a little but is still loose enough to envelop the eggs. Taste to check the seasoning.",
          },
          {
            "Step 3":
              "Make 8 small indents in the sauce and crack in the eggs. Bake in the oven for 12-15 minutes until the whites are just set. While the eggs are cooking, warm the tortillas, then serve with the avocado and a sprinkle of fresh herbs.",
          },
        ],
        portion: "Serves 4",
        time: "Hands-on time 25 min, plus simmering time 10 min ",
        title: "Chipotle baked eggs",
      };
      console.log("result ", result);
      console.log("Mexican ", MexicanData);
      setMexicanData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMexicanDetails();
    console.log("Mexican ", MexicanData);
  }, []);

  if (!MexicanData) {
    return <Loading />; // Ensure proper return in the loading state
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <View>
              <Image
                source={{ uri: MexicanData.image }}
                style={{ width: "100%", height: 320, resizeMode: "cover" }}
              />
            </View>
          </View>
          <View style={styles.Container}>
            <View style={styles.topHead}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  marginVertical: 10,
                  color: Colors.primary.color8,
                }}
              >
                {MexicanData.title}{" "}
              </Text>
              <Ionicons
                name="fast-food"
                size={26}
                color={Colors.primary.color7}
              />
            </View>
            <View>
              <View>
                <Text style={{ fontSize: 12, color: Colors.secondary.grey }}>
                  {MexicanData.description}
                </Text>
                <View style={styles.Iconbox}>
                  <Text
                    style={{
                      fontSize: 16,
                      margin: 5,
                      color: Colors.primary.color8,
                    }}
                  >
                    {MexicanData.portion}
                  </Text>
                  <View style={{ flexDirection: "row", gap: 2 }}>
                    <FontAwesome name="star" size={20} color="yellow" />
                    <FontAwesome name="star" size={20} color="yellow" />
                    <FontAwesome name="star" size={20} color="yellow" />
                    <FontAwesome name="star" size={20} color="yellow" />
                    <FontAwesome name="star-half" size={20} color="yellow" />
                  </View>
                </View>
                <View style={styles.IngredientBox}>
                  <Text
                    style={{
                      color: Colors.primary.color8,
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: "bold",
                      margin: 20,
                    }}
                  >
                    Ingredients
                  </Text>
                  {MexicanData.ingredients.map(
                    (ingredient: string, index: number) => (
                      <View key={index} style={styles.itemContainer}>
                        <Text style={{ color: Colors.secondary.darkgrey1 }}>
                          {index + 1} .
                        </Text>
                        <Text style={styles.itemText}>{ingredient}</Text>
                      </View>
                    )
                  )}
                </View>
                <View style={styles.methodBox}>
                  <View
                    style={{
                      paddingVertical: 20,
                      borderRadius: 20,
                      marginVertical: 30,
                    }}
                  >
                    <Text style={styles.heading}>
                      A recipe is a story that ends with a good meal.
                    </Text>
                    <Text style={styles.begin}>
                      Let's begin this tale of flavors
                    </Text>
                    <Image
                      source={{ uri: MexicanData.image }}
                      style={{
                        width: "100%",
                        height: 400,
                        resizeMode: "contain",
                        marginTop: 10,
                      }}
                    />
                  </View>
                  {MexicanData.method.map((step: any, index: number) => (
                    <View key={index} style={styles.methoditemContainer}>
                      <Text style={{ color: Colors.secondary.darkgrey1 }}>
                        Step: {index + 1}
                      </Text>
                      <Text style={styles.itemText}>
                        {" "}
                        {step[Object.keys(step)[0]]}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    // backgroundColor:Colors.primary.color9
    // backgroundColor:'white',
    backgroundColor: Colors.secondary.lightwhite,
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
  Iconbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  IngredientBox: {
    // backgroundColor:'yellow'
  },
  itemContainer: {
    width: "100%",
    height: 45,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
  },
  methoditemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  methodBox: {
    // backgroundColor:'red'
  },
  heading: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
    color: Colors.primary.color9,
    fontWeight: "bold",
  },
  begin: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    color: Colors.primary.color7,
    fontWeight: "bold",
  },
  itemText: {
    marginLeft: 15,
    fontSize: 12,
    color: Colors.secondary.darkgrey1,
    // color:'black'
  },
});

export default MexicanDetails;
