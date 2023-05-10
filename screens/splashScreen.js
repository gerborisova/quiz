import { View, SafeAreaView, StatusBar, Image, BackHandler, TouchableOpacity,Text,StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { Colors, CommonStyles,Fonts } from '../constants/styles'
import { useFocusEffect } from '@react-navigation/native'

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
     
     <SafeAreaView style={{ flex: 1, backgroundColor: '#28235c'}}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/images/appLogo.png')}
                    style={{ width: '100%', height: 400.0, resizeMode: 'contain' }}
                />
                  <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('QuizCategories') }}
                style={CommonStyles.initialButton}
            >
                <Text style={{ ...Fonts.purpleColor20Bold }}>
                 GET STARTED
                </Text>
            </TouchableOpacity>

            </View>
    </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})

export default SplashScreen