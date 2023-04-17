import { StyleSheet, Text, View, SafeAreaView, StatusBar, Animated, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors, Fonts, Sizes, Screen } from '../../constants/styles'
import Header from '../../components/header'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const notificatiosList = [
    {
        key: '1',
        title: 'Quiz Invitation',
        description: 'Ginger Williamson Challenged you for Biology Quiz',
        time: '35 min ago',
        icon: require('../../assets/images/momojies/momoji5.png'),
    },
    {
        key: '2',
        type: 'system',
        title: 'Quizx',
        description: 'Your Quiz for Data Science-II is Created successfully. Share link with your Friends.',
        time: '1 hour ago',
    },
    {
        key: '3',
        type: 'system',
        title: 'Quizx',
        description: 'Your Score in Biology and Science Quiz is 15 out of 20.',
        time: '1 hour ago',
    },
    {
        key: '4',
        title: 'Michael Rhodes',
        description: 'Michael Rhodes Challenged you for Math Quiz',
        time: '1 hour ago',
        icon: require('../../assets/images/momojies/momoji9.png'),
    },
    {
        key: '5',
        type: 'system',
        title: 'Quizx',
        description: 'Your Quiz for Data Science-II is Created successfully. Share link with your Friends.',
        time: '2 hour ago',
    },
    {
        key: '6',
        title: 'Clara Nichols',
        description: 'Clara Nichols Challenged you for Math Quiz',
        time: '2 days ago',
        icon: require('../../assets/images/momojies/momoji13.png'),
    },
];

const rowTranslateAnimatedValues = {};

const NotificationScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [listData, setListData] = useState(notificatiosList);

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {notifications()}
            </View>
            {snackBar()}
        </SafeAreaView>
    )

    function notifications() {
        return (
            listData.length == 0
                ?
                noNotoficationInfo()
                :
                notificationsInfo()
        )
    }

    function snackBar() {
        return (
            <Snackbar
                style={styles.snackBarStyle}
                visible={showSnackBar}
                elevation={0.0}
                onDismiss={() => setShowSnackBar(false)}
            >
                <Text style={{ ...Fonts.whiteColor16SemiBold }}>
                    Notification Dismissed!
                </Text>
            </Snackbar>
        )
    }

    function notificationsInfo() {
        const onSwipeValueChange = swipeData => {
            const { key, value } = swipeData;
            if ((value > Screen.width) || (value < -Screen.width) && !animationIsRunning.current) {
                animationIsRunning.current = true;
                Animated.timing(rowTranslateAnimatedValues[key], {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }).start(() => {
                    const newData = [...listData];
                    const prevIndex = listData.findIndex(item => item.key === key);
                    newData.splice(prevIndex, 1);
                    setListData(newData);
                    setShowSnackBar(true);
                    animationIsRunning.current = false;
                });
            }
        };

        const renderItem = (data) => (
            <Animated.View
                style={[
                    {
                        height: rowTranslateAnimatedValues[
                            data.item.key
                        ].interpolate({
                            inputRange: ['0%', '100%'],
                            outputRange: ["0%", "100%"],
                        }),
                    },
                ]}
            >
                <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                    <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View
                                style={{
                                    ...styles.notificationIconWrapStyle,
                                    backgroundColor:
                                        ((data.index + 4) % 4 == 0)
                                            ?
                                            Colors.pinkColor
                                            :
                                            ((data.index + 3) % 4 == 0)
                                                ?
                                                Colors.blueColor
                                                :
                                                ((data.index + 2) % 4 == 0)
                                                    ?
                                                    Colors.tomatoColor
                                                    :
                                                    Colors.greenColor
                                }}
                            >
                                {
                                    data.item.type == 'system'
                                        ?
                                        <MaterialCommunityIcons name="bell" size={27} color={Colors.whiteColor} />
                                        :
                                        <Image
                                            source={data.item.icon}
                                            style={{ width: 40.0, height: 40.0, resizeMode: 'contain' }}
                                        />
                                }
                            </View>
                            <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 5.0, }}>
                                <View style={{ marginBottom: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text numberOfLines={1} style={{ flex: 1, ...Fonts.blackColor18Bold, }}>
                                        {data.item.title}
                                    </Text>
                                    <Text style={{ ...Fonts.grayColor14SemiBold }}>
                                        {data.item.time}
                                    </Text>
                                </View>
                                {
                                    data.item.type == 'system'
                                        ?
                                        <Text numberOfLines={2} style={{ ...Fonts.grayColor16SemiBold }}>
                                            {data.item.description}
                                        </Text>
                                        :
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text numberOfLines={2} style={{ flex: 1, ...Fonts.grayColor16SemiBold }}>
                                                {data.item.description}
                                            </Text>
                                            <View style={styles.acceptButtonStyle}>
                                                <Text style={{ ...Fonts.primaryColor14Bold }}>
                                                    Accept
                                                </Text>
                                            </View>
                                        </View>
                                }
                            </View>
                        </View>
                        <View style={{ backgroundColor: data.index == listData.length - 1 ? Colors.whiteColor : Colors.lightGrayColor, ...styles.dividerStyle }} />
                    </View>
                </View>
            </Animated.View>
        );

        const renderHiddenItem = () => (
            <View style={styles.rowBack} />
        );

        return (
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-Screen.width}
                leftOpenValue={Screen.width}
                onSwipeValueChange={onSwipeValueChange}
                useNativeDriver={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function noNotoficationInfo() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../../assets/images/icons/notification.png')}
                    style={{ tintColor: Colors.grayColor, width: Screen.width / 5.0, height: Screen.width / 5.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding + 10.0 }}>
                    No Notification Here
                </Text>
            </View>
        )
    }

    function header() {
        return (
            <Header
                headerTitle={'Notification'}
                navigation={navigation}
            />
        )
    }
}

export default NotificationScreen

const styles = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        flex: 1,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    notificationIconWrapStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dividerStyle: {
        opacity: 0.3,
        height: 1.0,
        marginVertical: Sizes.fixPadding * 2.0,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0
    },
    acceptButtonStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 4.0,
        paddingHorizontal: Sizes.fixPadding + 8.0,
        backgroundColor: Colors.lightPrimaryColor
    }
})