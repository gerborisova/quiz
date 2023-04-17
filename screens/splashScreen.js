import { View, SafeAreaView, StatusBar, Image, BackHandler } from 'react-native'
import React, { useCallback } from 'react'
import { Colors } from '../constants/styles'
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

    setTimeout(() => {
        navigation.push('Onboarding')
    }, 2000);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/images/appLogo.png')}
                    style={{ width: '100%', height: 50.0, resizeMode: 'contain' }}
                />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen