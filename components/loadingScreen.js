
import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Colors } from "../constants/styles";

const LoadingScreen = ({ navigation }) => {

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'NunitoSans-Light': require('../assets/fonts/NunitoSans-Light.ttf'),
                'NunitoSans-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
                'NunitoSans-SemiBold': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
                'NunitoSans-Bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
                'NunitoSans-ExtraBold': require('../assets/fonts/NunitoSans-ExtraBold.ttf'),
                'NunitoSans-Black': require('../assets/fonts/NunitoSans-Black.ttf'),
                'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
            });
            navigation.navigate('Splash');
        }
        loadFont();
    }, [])

    return (
        <View style={styles.pageStyle}>
            <ActivityIndicator
                size={50}
                color={Colors.primaryColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pageStyle: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoadingScreen;