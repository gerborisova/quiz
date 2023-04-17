import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import Header from "../../components/header"
import Button from "../../components/button"
import * as Animatable from 'react-native-animatable';

const StartQuizWithFriendScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    {twoFriendsInfo()}
                </ScrollView>
            </View>
            {continueButton()}
        </SafeAreaView>
    )

    function continueButton() {
        return (
            <Button
                btnText={'Continue'}
                onPress={() => { navigation.push('JoinQuiz', { flowFor: 'two' }) }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function twoFriendsInfo() {
        const width = Screen.width
        return (
            <View style={{ alignItems: 'center', marginTop: Sizes.fixPadding * 4.0, }}>
                <Animatable.View
                    animation="pulse" iterationCount="infinite"
                    style={{
                        width: width, height: width, borderRadius: (width) / 2.0,
                        ...styles.searchingDeviceCircleStyle,
                    }}>
                    <Animatable.View
                        animation="pulse" iterationCount="infinite"
                        style={{
                            width: width / 1.3, height: width / 1.3, borderRadius: (width / 1.3) / 2.0,
                            ...styles.searchingDeviceCircleStyle,
                        }}>
                        <Animatable.View
                            animation="pulse" iterationCount="infinite"
                            style={{
                                width: width / 1.8, height: width / 1.8, borderRadius: (width / 1.8) / 2.0,
                                ...styles.searchingDeviceCircleStyle,
                            }}>
                            <Animatable.View
                                animation="pulse" iterationCount="infinite"
                                style={{
                                    width: width / 3.0, height: width / 3.0, borderRadius: (width / 3.0) / 2.0,
                                    ...styles.searchingDeviceCircleStyle,
                                }}>
                                <Image
                                    source={require('../../assets/images/vs/vs1.png')}
                                    style={{ width: width / 4.0, height: width / 4.0, resizeMode: 'contain' }}
                                />
                            </Animatable.View>
                        </Animatable.View>
                    </Animatable.View>
                </Animatable.View>
                <View style={{ ...styles.userInfoStyle, left: width - (width - 50), top: width / 7.0, }}>
                    <Text style={{ ...Fonts.blueColor20ExtraBold }}>
                        You
                    </Text>
                    <View style={{ ...styles.userWapCircleStyle, borderColor: Colors.blueColor, }}>
                        <Image
                            source={require('../../assets/images/momojies/momoji1.png')}
                            style={{ width: width / 8.0, height: width / 8.0, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
                <View style={{ ...styles.userInfoStyle, right: width - (width - 50), bottom: width / 7.0, }}>
                    <Text style={{ ...Fonts.greenColor20ExtraBold }}>
                        Michael
                    </Text>
                    <View style={{ ...styles.userWapCircleStyle, borderColor: Colors.greenColor, }}>
                        <Image
                            source={require('../../assets/images/momojies/momoji9.png')}
                            style={{ width: width / 8.0, height: width / 8.0, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <Header
                headerTitle="Start Quiz"
                navigation={navigation}
            />
        )
    }
}

export default StartQuizWithFriendScreen

const styles = StyleSheet.create({
    searchingDeviceCircleStyle: {
        backgroundColor: Colors.extraLightPrimaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userWapCircleStyle: {
        width: Screen.width / 5.0,
        height: Screen.width / 5.0,
        borderRadius: (Screen.width / 5.0) / 2.0,
        borderWidth: 4.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding
    },
    userInfoStyle: {
        alignItems: 'center',
        position: 'absolute',
    }
})
