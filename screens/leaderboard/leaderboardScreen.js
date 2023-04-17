import { StyleSheet, Text, View, SafeAreaView, StatusBar, BackHandler, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'
import React, { useState, useCallback } from 'react'
import { Colors, Fonts, Sizes, Screen } from '../../constants/styles'
import { FontAwesome } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'

const tabOptionsList = [
    'All Time', 'This Week', 'This Month'
];

const usersList = [
    {
        id: '1',
        profilePic: require('../../assets/images/momojies/momoji2.png'),
        name: 'Antonia Mcdaniel',
        bgColor: Colors.tomatoColor,
        score: 479,
    },
    {
        id: '2',
        profilePic: require('../../assets/images/momojies/momoji5.png'),
        name: 'Ginger Williamson',
        bgColor: Colors.pinkColor,
        score: 475,
    },
    {
        id: '3',
        profilePic: require('../../assets/images/momojies/momoji6.png'),
        name: 'Mario Fleming',
        bgColor: Colors.greenColor,
        score: 450,
    },
    {
        id: '4',
        profilePic: require('../../assets/images/momojies/momoji2.png'),
        name: 'Debra Lester',
        bgColor: Colors.blueColor,
        score: 420,
    },
    {
        id: '5',
        profilePic: require('../../assets/images/momojies/momoji7.png'),
        name: 'Brad Dawson',
        bgColor: Colors.tomatoColor,
        score: 400,
    },
];

const allTimeTop3Player = [
    {
        playerName: 'Antonia',
        score: '598',
        profile: require('../../assets/images/momojies/momoji10.png')
    },
    {
        playerName: 'Mario',
        score: '496',
        profile: require('../../assets/images/momojies/momoji6.png')
    },
    {
        playerName: 'Michael',
        score: '480',
        profile: require('../../assets/images/momojies/momoji9.png')
    },
];

const thisWeekTop3Player = [
    {
        playerName: 'Mario',
        score: '496',
        profile: require('../../assets/images/momojies/momoji6.png')
    },
    {
        playerName: 'Michael',
        score: '480',
        profile: require('../../assets/images/momojies/momoji9.png')
    },
    {
        playerName: 'Antonia',
        score: '598',
        profile: require('../../assets/images/momojies/momoji10.png')
    },
];

const thisMonthTop3Player = [
    {
        playerName: 'Michael',
        score: '480',
        profile: require('../../assets/images/momojies/momoji9.png')
    },
    {
        playerName: 'Antonia',
        score: '598',
        profile: require('../../assets/images/momojies/momoji10.png')
    },
    {
        playerName: 'Mario',
        score: '496',
        profile: require('../../assets/images/momojies/momoji6.png')
    },
];

const LeaderboardScreen = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0)
        }, 1000)
    }

    const [backClickCount, setBackClickCount] = useState(0);
    const [selectedTabIndex, setselectedTabIndex] = useState(0);

    const top3Players = selectedTabIndex == 0 ? allTimeTop3Player : selectedTabIndex == 1 ? thisWeekTop3Player : thisMonthTop3Player

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {tabOptions()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {top3PlayerInfo()}
                            {allTopUsersInfo()}
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {exitInfo()}
        </SafeAreaView>
    )

    function allTopUsersInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.friendsInfoWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <View style={{ ...styles.friendProfilePicWrapStyle, backgroundColor: item.bgColor }}>
                        <Image
                            source={item.profilePic}
                            style={{ width: 40.0, height: 40.0, resizeMode: 'contain' }}
                        />
                    </View>
                    <Text numberOfLines={1} style={{ marginHorizontal: Sizes.fixPadding + 3.0, flex: 1, ...Fonts.blackColor18SemiBold }}>
                        {item.name}
                    </Text>
                </View>
                <Text style={{ ...Fonts.primaryColor18Bold }}>
                    {item.score}
                </Text>
            </View>
        )
        return (
            <View style={{ marginVertical: Sizes.fixPadding * 2.0, }}>
                <FlatList
                    data={usersList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function top3PlayerInfo() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, paddingVertical: Sizes.fixPadding * 3.5, flexDirection: 'row', }}>
                {rank2PlayerInfo()}
                {rank1PlayerInfo()}
                {rank3PlayerInfo()}
            </View>
        )
    }

    function rank1PlayerInfo() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ ...styles.userImageWrapStyle, ...styles.rank1UserImageWrapStyle }}>
                    <Image
                        source={top3Players[0].profile}
                        style={{ width: Screen.width / 6.0, height: Screen.width / 6.0, resizeMode: 'contain' }}
                    />
                    <Image
                        source={require('../../assets/images/icons/winningCap.png')}
                        style={styles.winningCapStyle}
                    />
                </View>
                <ImageBackground
                    source={require('../../assets/images/scoreflags/scoreFlag1.png')}
                    style={{ ...styles.flagStyle, width: (Screen.width / 3.8) - 30 }}
                    resizeMode="stretch"
                >
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor36Bebas }}>
                        {top3Players[0].score}
                    </Text>
                </ImageBackground>
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding + 2.0, ...Fonts.whiteColor18Bold }}>
                    {top3Players[0].playerName}
                </Text>
            </View>
        )
    }

    function rank3PlayerInfo() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ ...Fonts.whiteColor18Black }}>
                    3
                </Text>
                <FontAwesome name="caret-down" size={18} color={Colors.greenColor} style={{ marginVertical: -(Sizes.fixPadding - 5.0) }} />
                <View style={{ ...styles.userImageWrapStyle, borderColor: Colors.greenColor, ...styles.rank2And3UserImageWrapStyle, }} >
                    <Image
                        source={top3Players[2].profile}
                        style={{ width: Screen.width / 8.0, height: Screen.width / 8.0, resizeMode: 'contain' }}
                    />
                </View>
                <ImageBackground
                    source={require('../../assets/images/scoreflags/scoreFlag2.png')}
                    style={{ ...styles.flagStyle, width: (Screen.width / 5.3) - 25.0, height: 75.0, }}
                    resizeMode="stretch"
                >
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor30Bebas }}>
                        {top3Players[2].score}
                    </Text>
                </ImageBackground>
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding + 2.0, ...Fonts.whiteColor18Bold }}>
                    {top3Players[2].playerName}
                </Text>
            </View>
        )
    }

    function rank2PlayerInfo() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ ...Fonts.whiteColor18Black }}>
                    2
                </Text>
                <FontAwesome name="caret-up" size={18} color={Colors.pinkColor} style={{ marginVertical: -(Sizes.fixPadding - 5.0) }} />
                <View style={{ ...styles.userImageWrapStyle, borderColor: Colors.pinkColor, ...styles.rank2And3UserImageWrapStyle, }} >
                    <Image
                        source={top3Players[1].profile}
                        style={{ width: Screen.width / 8.0, height: Screen.width / 8.0, resizeMode: 'contain' }}
                    />
                </View>
                <ImageBackground
                    source={require('../../assets/images/scoreflags/scoreFlag3.png')}
                    style={{ ...styles.flagStyle, width: (Screen.width / 5.3) - 25.0, height: 75.0, }}
                    resizeMode="stretch"
                >
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor30Bebas }}>
                        {top3Players[1].score}
                    </Text>
                </ImageBackground>
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding + 2.0, ...Fonts.whiteColor18Bold }}>
                    {top3Players[1].playerName}
                </Text>
            </View>
        )
    }

    function tabOptions() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, }}>
                <View style={styles.tabWrapStyle}>
                    {
                        tabOptionsList.map((item, index) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { setselectedTabIndex(index) }}
                                key={`${index}`}
                                style={{
                                    ...styles.tabStyle,
                                    backgroundColor: selectedTabIndex == index ? Colors.primaryColor : 'transparent',
                                }}
                            >
                                <Text numberOfLines={1} style={selectedTabIndex == index ? { ...Fonts.whiteColor16SemiBold } : { ...Fonts.grayColor16Bold }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, paddingHorizontal: Sizes.fixPadding * 2.0, paddingVertical: Sizes.fixPadding * 3.0, }}>
                <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                    Leaderboard
                </Text>
            </View>
        )
    }

    function exitInfo() {
        return (
            backClickCount == 1
                ?
                <View style={styles.exitInfoWrapStyle}>
                    <Text style={{ ...Fonts.whiteColor16SemiBold }}>
                        Press Back Once Again To Exit!
                    </Text>
                </View>
                :
                null
        )
    }
}

export default LeaderboardScreen

const styles = StyleSheet.create({
    exitInfoWrapStyle: {
        backgroundColor: Colors.grayColor,
        position: "absolute",
        bottom: 30,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    tabStyle: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding - 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    tabWrapStyle: {
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding - 8.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    userImageWrapStyle: {
        borderWidth: 6.0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100.0,
        elevation: 3.0,
        backgroundColor: Colors.whiteColor,
    },
    flagStyle: {
        marginTop: -20.0,
        zIndex: 0,
        height: 95.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    winningCapStyle: {
        position: 'absolute',
        top: -20.0,
        width: Screen.width / 8.0,
        height: Screen.width / 8.0,
        resizeMode: 'contain'
    },
    rank2And3UserImageWrapStyle: {
        width: (Screen.width / 5.3),
        height: (Screen.width / 5.3),
        borderRadius: (Screen.width / 5.3) / 2.0,
        borderWidth: 5.0,
        marginTop: Sizes.fixPadding - 5.0,
    },
    rank1UserImageWrapStyle: {
        width: (Screen.width / 3.8),
        height: (Screen.width / 3.8),
        borderRadius: (Screen.width / 3.8) / 2.0,
        borderColor: Colors.blueColor,
    },
    friendsInfoWrapStyle: {
        backgroundColor: Colors.extraLightPrimaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    friendProfilePicWrapStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
})