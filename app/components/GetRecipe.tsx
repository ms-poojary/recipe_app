import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const GetRecipe = () => {
 
    // const [recipeList,setRecipeList]=useState([])

  // async  function fetchData(){

  //       const options = {
  //         method: 'GET',
  //         url: 'https://tasty.p.rapidapi.com/recipes/list',
  //         params: {
  //           from: '0',
  //           size: '20',
  //           tags: 'under_30_minutes',
  //           q: 'american'
  //         },
  //         headers: {
  //           'x-rapidapi-key': '469c087769mshc6a737c2e32227bp1844cajsn45906e9527d3',
  //           'x-rapidapi-host': 'tasty.p.rapidapi.com'
  //         }
  //       };
        
  //       try {
  //           const response = await axios.request(options);
  //           // const data= await response.json();
  //           setRecipeList(response.data.result)
  //           // console.log(response.data);
            
  //       } catch (error) {
  //           console.error(error);
  //       }
  //   }
  //   useEffect(() => {
  //       fetchData();
  //     }, []);
      

  return (
    <SafeAreaView>
       <View >
       <View style={styles.Card} >
            <Image source={require('@/assets/images/food3.jpg')} 
            style={styles.CardImage}
            />
            <View>
                <View style={styles.CardName}>
                    <Text style={{textAlign:'center', fontSize:18,color:'white'}} >Chicken Pastha</Text>
                </View>
                <View  style={styles.CardBody}><Text>Lorem, ipsum dolor sit  Omnis, illo  eum per sapiente quaerat sunt inventore impedit.</Text></View>
            </View>
        </View> 
        <View style={styles.Card} >
            <Image source={require('@/assets/images/food3.jpg')} 
            style={styles.CardImage}
            />
            <View>
                <View style={styles.CardName}>
                    <Text style={{textAlign:'center', fontSize:18,color:'white'}} >Chicken Pastha</Text>
                </View>
                <View  style={styles.CardBody}><Text>Lorem, ipsum dolor sit  Omnis, illo  eum per sapiente quaerat sunt inventore impedit.</Text></View>
            </View>
        </View> 
       </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    Card:{
        // width:'100%',
        // height:150,
        backgroundColor:'grey',
        padding:10,
        // marginHorizontal:5,
        flexDirection:'row'
    },
    CardImage:{
        width:120,
        height:120,
        borderRadius:12,
        resizeMode:'cover',
    },
    CardName:{
        padding:6,
        backgroundColor:'green',
        marginHorizontal:10,
        width:200,
        borderRadius:12
    },
    CardBody:{
        width:'75%',
        padding:10,
        backgroundColor:'blue',
        margin:10,
        borderRadius:8
    }

})

 export default GetRecipe


// working fine codes

// import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import axios from 'axios';

// const GetRecipe = () => {
//   const [recipeList, setRecipeList] = useState([]);

//   async function fetchData() {
//     const options = {
//       method: 'GET',
//       url: 'https://tasty.p.rapidapi.com/recipes/list',
//       params: {
//         from: '0',
//         size: '20',
//         tags: 'under_30_minutes',
//         q: 'american'
//       },
//       headers: {
//         'x-rapidapi-key': '469c087769mshc6a737c2e32227bp1844cajsn45906e9527d3',
//         'x-rapidapi-host': 'tasty.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setRecipeList(response.data.results);  // Update state with the fetched data
//     //   console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);  // Use effect to fetch data on component mount

//   const renderRecipe = ({ item }: { item: any }) => (
//     <View style={styles.Card}>
//       <Image source={{ uri: item.thumbnail_url }} style={styles.CardImage} />
//       <View>
//         <View style={styles.CardName}>
//           <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>{item.name}</Text>
//         </View>
//         <View style={styles.CardBody}>
//           <Text>{item.description}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView>
//       <FlatList
//         data={recipeList}
//         renderItem={renderRecipe}
//         keyExtractor={item => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   Card: {
//     backgroundColor: 'grey',
//     padding: 10,
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   CardImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 12,
//     resizeMode: 'cover',
//   },
//   CardName: {
//     padding: 6,
//     backgroundColor: 'green',
//     marginHorizontal: 10,
//     width: 200,
//     borderRadius: 12,
//   },
//   CardBody: {
//     width: '75%',
//     padding: 10,
//     backgroundColor: 'blue',
//     margin: 10,
//     borderRadius: 8,
//   }
// });

// export default GetRecipe
