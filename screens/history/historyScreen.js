import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, BackHandler } from 'react-native'
import React, { useState, useCallback } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import { useFocusEffect } from '@react-navigation/native';

const historyList = [
    {
        id: '1',
        bgColor: Colors.tomatoColor,
        icon: require('../../assets/images/icons/science.png'),
        subject: 'Biology and Science',
        description: 'You and your friend participate in this quiz',
        quizType: 'Hard'
    },
    {
        id: '2',
        bgColor: Colors.pinkColor,
        icon: require('../../assets/images/icons/statistics.png'),
        subject: 'Math Quiz',
        description: 'Your score 15 out of 20',
        quizType: 'Easy'
    },
    {
        id: '3',
        bgColor: Colors.greenColor,
        icon: require('../../assets/images/icons/technology.png'),
        subject: 'Radio Technology Part - ||',
        description: 'Your score 20 out of 20',
        quizType: 'Easy'
    },
];

const HistoryScreen = ({ navigation }) => {

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {historyInfo()}
            </View>
            {exitInfo()}
        </SafeAreaView>
    )

    function historyInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.historyInfoWrapStyle}>
                <View style={{ ...styles.subjectIconWrapStyle, backgroundColor: item.bgColor, }}>
                    <Image
                        source={item.icon}
                        style={{ tintColor: Colors.whiteColor, width: 36.0, height: 36.0, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor18Bold }}>
                        {item.subject}
                    </Text>
                    <Text numberOfLines={2} style={{ ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding - 6.0 }}>
                        {item.description}
                    </Text>
                </View>
            </View>
        )
        return (
            <FlatList
                data={historyList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.headerStyle }}>
                <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                    Quiz History
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

export default HistoryScreen

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
    historyInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.extraLightPrimaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 2.0,
        paddingVertical: Sizes.fixPadding + 4.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    subjectIconWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 52.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
})