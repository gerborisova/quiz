import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../../components/button'

const GroupQuizResultScreen = ({ navigation }) => {

    const [currentFlagIndex, setcurrentFlagIndex] = useState(1);

    setTimeout(() => {
        currentFlagIndex == 3
            ?
            setcurrentFlagIndex(1)
            :
            setcurrentFlagIndex(currentFlagIndex + 1)
    }, 500);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {closeIcon()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingTop: (Screen.height / 4.5), justifyContent: 'center', }}
                >
                    {scoreInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function scoreInfo() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, marginHorizontal: Sizes.fixPadding * 2.0, borderRadius: Sizes.fixPadding + 5.0, }}>
                <Image
                    source={require('../../assets/images/thumb.png')}
                    style={styles.thumbImageStyle}
                />
                <Image
                    source={require('../../assets/images/goodJob.png')}
                    style={{ width: '100%', height: 50.0, resizeMode: 'contain' }}
                />
                {resultInfo()}
                {leaderBoardButton()}
            </View>
        )
    }

    function resultInfo() {
        return (
            <View style={styles.resultInfoWrapStyle}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    {userInfo({
                        userImage: require('../../assets/images/momojies/momoji1.png'),
                        userScore: 90.0,
                        userName: 'You',
                        isWinning: true,
                        backgroundColor: Colors.blueColor,
                        flag: require('../../assets/images/scoreflags/scoreFlag1.png')
                    })}
                </View>
                <Image
                    source={
                        currentFlagIndex == 1
                            ?
                            require('../../assets/images/vs/vs2.png')
                            :
                            currentFlagIndex == 2
                                ?
                                require('../../assets/images/vs/vs3.png')
                                :
                                require('../../assets/images/vs/vs4.png')
                    }
                    style={styles.vsImageStyle}
                />
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    {userInfo({
                        userImage: require('../../assets/images/momojies/momoji9.png'),
                        userScore: 80.0,
                        userName: 'Michael',
                        isWinning: false,
                        backgroundColor: Colors.greenColor,
                        flag: require('../../assets/images/scoreflags/scoreFlag2.png')
                    })}
                </View>
            </View>
        )
    }

    function userInfo({ userImage, userName, userScore, isWinning, backgroundColor, flag }) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.userOuterBorderStyle} />
                <View style={{ ...styles.userImageWrapStyle, borderColor: backgroundColor, }}>
                    <Image
                        source={userImage}
                        style={{ width: Screen.width / 8.0, height: Screen.width / 8.0, resizeMode: 'contain' }}
                    />
                    {
                        isWinning
                            ?
                            <Image
                                source={require('../../assets/images/icons/winningCap.png')}
                                style={styles.winningCapStyle}
                            />
                            :
                            null
                    }
                </View>
                <ImageBackground
                    source={flag}
                    style={styles.flagStyle}
                    resizeMode="stretch"
                >
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor36Bebas }}>
                        {userScore}
                    </Text>
                </ImageBackground>
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding + 2.0, ...Fonts.blackColor20ExtraBold, color: backgroundColor }}>
                    {userName}
                </Text>
            </View>
        )
    }

    function leaderBoardButton() {
        return (
            <Button
                btnText={'Leaderboard'}
                onPress={() => { navigation.navigate('Leaderboard') }}
                styles={{ marginTop: Sizes.fixPadding * 3.0, marginBottom: Sizes.fixPadding * 3.0 }}
            />
        )
    }

    function closeIcon() {
        return (
            <MaterialIcons
                name="close"
                size={24}
                color={Colors.whiteColor}
                style={{ position: 'absolute', top: 20.0, left: 20.0, zIndex: 1 }}
                onPress={() => { navigation.navigate('Home') }}
            />
        )
    }
}

export default GroupQuizResultScreen

const styles = StyleSheet.create({
    thumbImageStyle: {
        marginTop: -(Screen.height / 4.5),
        width: '100%',
        height: Screen.height / 3.2,
        resizeMode: 'contain',
    },
    userImageWrapStyle: {
        width: (Screen.width / 4.5) - 8.0,
        height: (Screen.width / 4.5) - 8.0,
        borderRadius: (Screen.width / 4.5) / 2.0,
        borderWidth: 4.0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100.0,
        position: 'absolute',
        top: 4.0,
        elevation: 3.0,
        backgroundColor: Colors.whiteColor,
    },
    winningCapStyle: {
        position: 'absolute',
        top: -10.0,
        width: Screen.width / 10.0,
        height: Screen.width / 10.0,
        resizeMode: 'contain'
    },
    flagStyle: {
        marginTop: -20.0,
        zIndex: 0,
        width: (Screen.width / 4.8) - 20,
        height: 85.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userOuterBorderStyle: {
        width: Screen.width / 4.5,
        height: Screen.width / 4.5,
        borderRadius: (Screen.width / 4.5) / 2.0,
        borderColor: Colors.primaryColor,
        borderWidth: 4.0,
    },
    vsImageStyle: {
        marginTop: Sizes.fixPadding + 2.0,
        width: Screen.width / 4.0,
        height: Screen.width / 4.0,
        resizeMode: 'contain'
    },
    resultInfoWrapStyle: {
        marginTop: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})