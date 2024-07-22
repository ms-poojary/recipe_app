import { View,Text,StyleSheet,Button } from "react-native"

export default function HomeScreen({navigation}){
    return(
        <View>
            <Text>
                home screen
            </Text>
            <Button title="about"
            onPress={()=> navigation.navigate("components/RecipeDetail",{
                name:"raaz",
            })}
            ></Button>
        </View>
    )
}