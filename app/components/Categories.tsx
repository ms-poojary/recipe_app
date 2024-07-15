// used in (tabs)/home


import { View, Text, StyleSheet, Image,Pressable ,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'

const Categories = () => {
  return (
    <SafeAreaView>
        <View style={styles.CategoryBg}>
            <Text style={styles.CategoryText}>Recipe Categories</Text>
        </View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <View style={styles.Categories}>
          
            <View style={styles.Container}>
                <Pressable style={styles.CategoriesCard}>
                <Image source={require('@/assets/images/food13.jpg')}
                style={styles.CategoriesImage}
                />
               
                </Pressable>
            <View><Text style={styles.CardText}>imageName</Text></View>
            </View>
            <View style={styles.Container}>
                <Pressable style={styles.CategoriesCard}>
                <Image source={require('@/assets/images/food7.jpg')}
                style={styles.CategoriesImage}
                />
               
                </Pressable>
            <View><Text style={styles.CardText}>imageName</Text></View>
            </View><View style={styles.Container}>
                <Pressable style={styles.CategoriesCard}>
                <Image source={require('@/assets/images/food18.jpg')}
                style={styles.CategoriesImage}
                />
               
                </Pressable>
            <View><Text style={styles.CardText}>imageName</Text></View>
            </View><View style={styles.Container}>
                <Pressable style={styles.CategoriesCard}>
                <Image source={require('@/assets/images/food25.jpg')}
                style={styles.CategoriesImage}
                />
               
                </Pressable>
            <View><Text style={styles.CardText}>imageName</Text></View>
            </View>

        </View>
       </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    Categories:{
        width:'100%',
        backgroundColor:Colors.secondary.lightwhite,
        flexDirection:'row',
        padding:10
    },
    CategoriesCard:{
        width:100,
        height:100,
        backgroundColor:Colors.secondary.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        margin:5,
        paddingVertical:10
    },
    CategoriesImage:{
        width:90,
        height:90,
        borderRadius:45, 
        padding:10,
        objectFit:'cover',
        marginVertical:5,
        
    },
    Container:{
        alignItems:'center'

    },
    CardText:{
        fontSize:12,
        color:Colors.primary.color6,
        width:90,
        textAlign:'center'
    },
    CategoryBg:{
        paddingHorizontal:10
    },
    CategoryText:{
        fontSize:16,
        fontWeight:'semibold',
        color:Colors.primary.color2
        
    }
})

export default Categories