// Main starting page


import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";


const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('(tabs)');
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <Image
      style={{ resizeMode: "cover", height: 500, width: 400 }}
    source={require('@/assets/images/food27.jpg')}
      />
      <View style={styles.content}>
        <View style={styles.shadow}></View>
        <Text style={styles.heading}>Let's Cook  VacchjuDelicious</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
          asperiores.
        </Text>
        <Pressable style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor:Colors.secondary.lightwhite
  },
  content: {
    width: 320,
    height: 200,
    position: "absolute",
    bottom: 30,
    zIndex: 9,
    alignItems: "center",
  },
  heading: {
    color: "black",
    fontSize: 28,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "900",
  },
  para: {
    margin: 10,
    color: Colors.primary.color8,
    textAlign: "center",
  },
  shadow: {
    position: "absolute",
    width: "100%",
    height: "95%",
    backgroundColor: Colors.secondary.lightwhite,
    opacity: 0.2,
    borderRadius: 16,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    // backgroundColor: "#96031a",
    backgroundColor:Colors.primary.color7,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
});

export default Home;
