// Main starting page


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
        <Text style={styles.heading}>Wanna Cook <Text style={{color:Colors.primary.color9}}>Easy</Text> and <Text style={{color:Colors.primary.color9}}>Breezy</Text> ?</Text>
        <Text style={{marginTop:10,color:Colors.primary.color7,fontFamily:'font2',fontSize:22}}>Welcome to CookZy</Text>

        <Text style={styles.para}>
        <Text style={styles.orange}>Good food</Text>  and a warm kitchen are what make a house a <Text style={styles.orange}>home.</Text>
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
    width: '100%',
    height: 300,
    position: "absolute",
    bottom: 0,
    zIndex: 9,
    backgroundColor:'white',
    alignItems: "center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  heading: {
    color: "black",
    fontSize: 18,
    fontFamily:'font3',
    marginTop: 30,
    marginBottom:20,
    textAlign: "center",
    fontWeight: "900",
  },
  orange:{
    color:Colors.primary.color8
  },
  para: {
    margin: 10,
    paddingHorizontal:20,
    fontFamily:'font5',
    textAlign: "center",
  },
  shadow: {
    // position: "absolute",
    // width: "100%",
    // height: "95%",
    // backgroundColor: Colors.secondary.lightwhite,
    // opacity: 0.2,
    // borderRadius: 16,
  },
  btn: {
    position: "absolute",
    bottom: 60,
    // backgroundColor: "#96031a",
    backgroundColor:Colors.primary.color7,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    color: "white",
    fontFamily:'font5'
  },
});

export default Home;
