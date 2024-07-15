
import { View, Text, Image, StyleSheet, FlatList,Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Mexican = () => {

const [iconColor,setIconColor]= useState('black')
const [icons , setIcons]=useState('heart-outline');
function changeIcon(){{
if(icons=='heart-outline'){
  setIcons('heart-sharp')
  setIconColor('red')
}
else{
  setIcons('heart-outline')
  setIconColor('black')
}
}}

  return (

    <SafeAreaView>
      <View style={styles.FoodCard}>
      <Image
        source={require('@/assets/images/food0.jpg')}
        style={styles.foodImage}
      />
      <View style={styles.body}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Some food</Text>
        <View style={styles.icons}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Entypo name="bar-graph" size={20} color="black" />
            <Text>difficult</Text>
          </View>
          <Pressable onPress={changeIcon}>
        <Ionicons name={icons} size={24} color={iconColor} />     
          </Pressable>
        </View>
      </View>
    </View>
    
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
    justifyContent: 'space-between'
  },
  icons: {
    padding: 10,
    // marginRight:12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Mexican;












// Hello Raaz.., this is the working API code. if you want to do any kind of experiment then please use the above codes.
// Running the following code multiple times may cross the request limit. 
// SO kindly minimize the use of following code and try do the final test only


// import { View, Text, Image, StyleSheet, Pressable,FlatList } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { Entypo } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { Colors } from '@/constants/Colors';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Mexican = () => {
//   const [mexican, setMexican] = useState([]);
// const [iconColor,setIconColor]= useState('black')
// const [icons , setIcons]=useState('heart-outline');
// function changeIcon(){{
// if(icons=='heart-outline'){
//   setIcons('heart-sharp')
//   setIconColor('red')
// }
// else{
//   setIcons('heart-outline')
//   setIconColor('black')
// }
// }}

//   async function fetchMexican() {
//     const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '469c087769mshc6a737c2e32227bp1844cajsn45906e9527d3',
//         'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
//       }
//     };
    

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json(); // Parsing JSON directly
//       // console.log('API Result:', result); 

//       setMexican(result); // Updating the state
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchMexican();
//   }, []); // Corrected dependency array placement

//   const renderMexicanRecipe = ({ item }: { item: any }) => (
//     // console.log(item.id)
//     <View style={styles.FoodCard}>
//       <Image
//         source={{ uri: item.image }}
//         style={styles.foodImage}
//       />
//       <View style={styles.body}>
//         <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
//         <View style={styles.icons}>
//           <View style={{ flexDirection: 'row', gap: 10 }}>
//             <Entypo name="bar-graph" size={20} color="black" />
//             <Text>{item.difficulty}</Text>
//           </View>
//           <Pressable onPress={changeIcon}>
//          <Ionicons name ={icons} size={24} color={iconColor} />     
//            </Pressable>       
//    </View>
//       </View>
//     </View>
//   );

//   return (

//     <SafeAreaView>
//       <FlatList
//         data={mexican}
//         renderItem={renderMexicanRecipe}
//         keyExtractor={item => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   FoodCard: {
//     height: 150,
//     backgroundColor: Colors.secondary.lightwhite,
//     margin: 5,
//     borderColor: Colors.primary.color7,
//     borderWidth: 1,
//     padding: 10,
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     borderRadius: 10
//   },
//   foodImage: {
//     width: 150,
//     height: 120,
//     resizeMode: 'cover',
//     borderRadius: 8,
//     marginRight:5
//   },
//   body: {
//     width: '55%',
//     height: '90%',
//     padding:5,
//     // margin: 10,
//     justifyContent: 'space-between'
//   },
//   icons: {
//     padding: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   }
// });

// export default Mexican;
