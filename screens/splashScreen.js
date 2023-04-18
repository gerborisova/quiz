import { View, SafeAreaView, StatusBar, Image, BackHandler, TouchableOpacity,Text,StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { Colors, CommonStyles,Fonts } from '../constants/styles'
import { useFocusEffect } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';


const SplashScreen = ({ navigation }) => {

    const backAction = () => {
        BackHandler.exitApp();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );


    return (
       <LinearGradient
       style={styles.container}
       colors={["#FF6D60","#F7D060"]}
       start={{x:0.1, y:0.3}}
       end={{x:0.4,y:0.9}}
       >
        {/* <SafeAreaView style={{ flex: 1, backgroundImage: `linear-gradient(to bottom, #ffffff} 0%, #000000 100%)`}}> */}
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/images/appLogo.png')}
                    style={{ width: '100%', height: 50.0, resizeMode: 'contain' }}
                />
                  <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('QuizCategories') }}
                style={CommonStyles.initialButton}
            >
                <Text style={{ ...Fonts.whiteColor20Bold }}>
                 GET STARTED
                </Text>
            </TouchableOpacity>
            </View>
        {/* </SafeAreaView> */}
        </LinearGradient>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})

export default SplashScreen