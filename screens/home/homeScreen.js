import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, FlatList, BackHandler, TouchableOpacity, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import { useFocusEffect } from '@react-navigation/native'
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import CircularProgress from 'react-native-circular-progress-indicator';
import { Overlay } from '@rneui/themed'
import Button from "../../components/button";

const liveQuizList = [
    {
        id: '1',
        bgColor: Colors.tomatoColor,
        icon: require('../../assets/images/icons/science.png'),
        subject: 'Biology and Science',
        totalQuiz: 12,
        quizType: 'Hard'
    },
    {
        id: '2',
        bgColor: Colors.pinkColor,
        icon: require('../../assets/images/icons/statistics.png'),
        subject: 'Math and Statistics',
        totalQuiz: 10,
        quizType: 'Easy'
    },
    {
        id: '3',
        bgColor: Colors.blueColor,
        icon: require('../../assets/images/icons/music.png'),
        subject: 'Art and Music',
        totalQuiz: 9,
        quizType: 'Easy'
    },
    {
        id: '4',
        bgColor: Colors.greenColor,
        icon: require('../../assets/images/icons/math.png'),
        subject: 'Integers quiz',
        totalQuiz: 9,
        quizType: 'Hard'
    },
];

const HomeScreen = ({ navigation }) => {

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
    const [showFindFriendDialog, setshowFindFriendDialog] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {userInfo()}
                {continueQuizInfo()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {findFriendBanner()}
                            {liveQuizInfo()}
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 4.0, }}
                />
            </View>
            {findFriendDialog()}
            {exitInfo()}
        </SafeAreaView>
    )

    function findFriendDialog() {
        return (
            <Overlay
                isVisible={showFindFriendDialog}
                onBackdropPress={() => { setshowFindFriendDialog(false) }}
                overlayStyle={styles.dialogStyle}
            >
                <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 3.0, marginBottom: Sizes.fixPadding * 4.0 }}>
                    <Image
                        source={require('../../assets/images/findFriend.png')}
                        style={styles.dialogImageStyle}
                    />
                    <Button
                        btnText={'Play with Friends'}
                        onPress={() => { setshowFindFriendDialog(false), navigation.push('SelectFriend') }}
                        styles={{ marginHorizontal: 0.0 }}
                    />
                    <Text style={{ textAlign: 'center', marginVertical: Sizes.fixPadding + 7.0, ...Fonts.grayColor16SemiBold }}>
                        OR
                    </Text>
                    <Button
                        btnText={'Play with Random User'}
                        onPress={() => { setshowFindFriendDialog(false), navigation.push('StartQuizWithFriend') }}
                        styles={{ marginHorizontal: 0.0 }}
                    />
                </View>
            </Overlay>
        )
    }

    function liveQuizInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.push('JoinQuiz', { flowFor: 'one' }) }}
                style={styles.liveQuizSubjectsInfoWrapStyle}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <View style={{ backgroundColor: item.bgColor, ...styles.liveQuizSubjectIconWrapStyle, }}>
                        <Image
                            source={item.icon}
                            style={{ tintColor: Colors.whiteColor, width: 36.0, height: 36.0, resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, marginRight: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor18Bold }}>
                            {item.subject}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding - 6.0 }}>
                            {item.totalQuiz} Quiz • {item.quizType}
                        </Text>
                    </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={16} color={Colors.grayColor} />
            </TouchableOpacity>
        )
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 3.5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ flex: 1, ...Fonts.blackColor20ExtraBold }}>
                        Live Quiz
                    </Text>
                    <Text onPress={() => { navigation.push('QuizCategories') }} style={{ ...Fonts.primaryColor16Bold }}>
                        See all
                    </Text>
                </View>
                <FlatList
                    data={liveQuizList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function findFriendBanner() {
        return (
            <ImageBackground
                source={require('../../assets/images/bannerBg.png')}
                style={{ width: Screen.width - 40.0, marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 1.5, }}
                borderRadius={Sizes.fixPadding}
                resizeMode="stretch"
            >
                <Image
                    source={require('../../assets/images/momojies/momoji2.png')}
                    style={{ width: 70.0, height: 70.0, resizeMode: 'contain', position: 'absolute' }}
                />
                <View style={{ margin: Sizes.fixPadding * 4.0, }}>
                    <Text numberOfLines={2} style={{ textAlign: 'center', ...Fonts.whiteColor19ExtraBold }}>
                        Let’s find friends and other players to take part in challenges
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setshowFindFriendDialog(true) }}
                        style={styles.findFriendButtonStyle}
                    >
                        <FontAwesome5
                            name="map-pin"
                            size={22}
                            color={Colors.pinkColor}
                            style={{ transform: [{ rotate: '-50deg' }] }}
                        />
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.pinkColor18ExtraBold }}>
                            Find Friends
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('../../assets/images/momojies/momoji3.png')}
                    style={{ width: 70.0, height: 77.0, alignSelf: 'flex-end', position: 'absolute', bottom: 0.0 }}
                />
            </ImageBackground>
        )
    }

    function continueQuizInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Quiz') }}
                style={styles.quizInfoWrapStyle}
            >
                <View style={{ flex: 1, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor16SemiBold }}>
                        Continue your quiz
                    </Text>
                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 7.0, ...Fonts.blackColor20Bold }}>
                        Math Basic Question
                    </Text>
                </View>
                <View>
                    <CircularProgress
                        value={80}
                        radius={30}
                        maxValue={100}
                        inActiveStrokeColor={Colors.lightGrayColor}
                        activeStrokeColor={Colors.yellowColor}
                        inActiveStrokeOpacity={0.3}
                        progressValueColor={Colors.yellowColor}
                        activeStrokeWidth={6}
                        inActiveStrokeWidth={6}
                        valueSuffix={'%'}
                        progressValueFontSize={14}
                        progressValueStyle={{ fontFamily: 'NunitoSans-ExtraBold', }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    function userInfo() {
        return (
            <View style={styles.userInfoWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="white-balance-sunny" size={20} color={Colors.whiteColor} />
                            <Text style={{ flex: 1, ...Fonts.whiteColor16SemiBold, marginLeft: Sizes.fixPadding }}>
                                Good Morning
                            </Text>
                        </View>
                        <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.whiteColor22ExtraBold }}>
                            Antonia Mcdaniel
                        </Text>
                    </View>
                    <View style={styles.userProfileMomojiWrapStyle}>
                        <Image
                            source={require('../../assets/images/momojies/momoji1.png')}
                            style={{ width: 45.0, height: 40.0, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
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

export default HomeScreen

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
    findFriendButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignSelf: 'center',
        marginTop: Sizes.fixPadding * 2.0,
    },
    quizInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding + 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding * 2.0,
        marginTop: -Sizes.fixPadding * 4.8,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    userInfoWrapStyle: {
        paddingTop: Sizes.fixPadding * 2.0,
        paddingBottom: Sizes.fixPadding * 7.5,
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    userProfileMomojiWrapStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    liveQuizSubjectIconWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 52.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    liveQuizSubjectsInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.extraLightPrimaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginTop: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding + 8.0,
    },
    dialogStyle: {
        padding: 0.0,
        backgroundColor: Colors.whiteColor,
        width: '90%',
        borderRadius: Sizes.fixPadding + 5.0,
    },
    dialogImageStyle: {
        marginBottom: Sizes.fixPadding * 2.6,
        width: '100%',
        height: Screen.height / 5.0,
        resizeMode: 'contain'
    }
})