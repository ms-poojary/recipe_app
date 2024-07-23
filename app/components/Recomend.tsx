// used in (tabs)/home


import { View, Text, StyleSheet, Image,Pressable ,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'

const Recomend = () => {

    const recomedPress=()=>{
        console.log("recommend pressed")
    }

  return (
    <SafeAreaView>
        <View style={styles.RecomendBg}>
            <Text style={styles.RecomendText}>Recommended Recipes</Text>
        </View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <View style={styles.Recomends}>
          
          
            <Pressable onPress={recomedPress} style={styles.RecomendsCard}>
                <Image source={require('@/assets/images/food13.jpg')}
                style={styles.RecomendsImage}
                />
                <View>
                    <Text style={styles.CardText}>recipee</Text>
                    <Text style={{color:Colors.secondary.darkgrey1}}>Indian Cuisine</Text>
                </View>
            </Pressable>
            <Pressable onPress={recomedPress} style={styles.RecomendsCard}>
                <Image source={require('@/assets/images/food22.jpg')}
                style={styles.RecomendsImage}
                />
                <View>
                    <Text style={styles.CardText}>recipee</Text>
                    <Text style={{color:Colors.secondary.darkgrey1}}>-Americans Cuisine</Text>
                </View>
            </Pressable>
            <Pressable onPress={recomedPress} style={styles.RecomendsCard}>
                <Image source={require('@/assets/images/food6.jpg')}
                style={styles.RecomendsImage}
                />
                <View>
                    <Text style={styles.CardText}>recipee</Text>
                    <Text style={{color:Colors.secondary.darkgrey1}}>-Chinese Cuisine</Text>
                </View>
            </Pressable>
            <Pressable onPress={recomedPress} style={styles.RecomendsCard}>
                <Image source={require('@/assets/images/food4.jpg')}
                style={styles.RecomendsImage}
                />
                <View>
                    <Text style={styles.CardText}>recipee</Text>
                    <Text style={{color:Colors.secondary.darkgrey1}}>-Italian Cuisine</Text>
                </View>
            </Pressable>
          

        </View>
       </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    Recomends:{
        width:'100%',
        backgroundColor:Colors.secondary.lightwhite,
        flexDirection:'row',
        paddingVertical:10
    },
    RecomendsCard:{
        // width:120,
        // height:120,
        backgroundColor:Colors.secondary.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        margin:5,
        paddingVertical:10
    },
    RecomendsImage:{
        width:150,
        height:150,
        borderRadius:8, 
        padding:10,
        objectFit:'cover',
        margin:10
    },
    CardText:{
        fontSize:12,
        color:Colors.primary.color2,
        fontFamily:'font6',
    },
    RecomendBg:{
      paddingHorizontal:10
    },
    RecomendText:{
        fontSize:16,
        color:Colors.primary.color7,
        fontFamily:'font5'
    }
})


export default Recomend