import { StyleSheet, Text, View, SafeAreaView, BackHandler, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Overlay } from '@rneui/themed'
import { useFocusEffect } from '@react-navigation/native'

const ProfileScreen = ({ navigation }) => {

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
    const [showLogoutDialog, setshowLogoutDialog] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
                >
                    {profileInfo()}
                    {rateRankAndPointInfo()}
                    {profileOptions()}
                </ScrollView>
            </View>
            {logoutDialog()}
            {exitInfo()}
        </SafeAreaView>
    )

    function logoutDialog() {
        return (
            <Overlay
                isVisible={showLogoutDialog}
                overlayStyle={styles.dialogStyle}
                onBackdropPress={() => { setshowLogoutDialog(false) }}
            >
                <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 3.0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/images/icons/question.png')}
                            style={{ width: 30.0, height: 30.0, resizeMode: 'contain' }}
                        />
                        <Text style={{ marginLeft: Sizes.fixPadding, flex: 1, ...Fonts.blackColor20ExtraBold }}>
                            Confirm Exit...!!!
                        </Text>
                    </View>
                    <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.blackColor16SemiBold }}>
                        Are you sure, You want to exit
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding * 4.0, flexDirection: 'row', alignItems: 'center', }}>
                        <Text onPress={() => { setshowLogoutDialog(false) }} style={{ flex: 1, ...Fonts.primaryColor14ExtraBold }}>
                            CANCEL
                        </Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text onPress={() => { setshowLogoutDialog(false) }} style={{ ...Fonts.primaryColor14ExtraBold }}>
                                NO
                            </Text>
                            <Text
                                onPress={() => { setshowLogoutDialog(false), navigation.push('Login') }}
                                style={{ marginLeft: Sizes.fixPadding * 3.0, ...Fonts.primaryColor14ExtraBold }}
                            >
                                YES
                            </Text>
                        </View>
                    </View>
                </View>
            </Overlay>
        )
    }

    function profileOptions() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 4.0, }}>
                {profileOptionSort({
                    icon: 'trophy',
                    color: Colors.greenColor,
                    option: 'Leaderboard',
                    onPress: () => { navigation.navigate('Leaderboard') }
                })}
                {profileOptionSort({
                    icon: 'bell',
                    color: Colors.blueColor,
                    option: 'Notification',
                    onPress: () => { navigation.push('Notification') }
                })}
                {profileOptionSort({
                    icon: 'account-group',
                    color: Colors.tomatoColor,
                    option: 'Refer a Friend',
                    onPress: () => { navigation.push('ReferFriend') }
                })}
                {profileOptionSort({
                    icon: 'help-circle',
                    color: Colors.pinkColor,
                    option: 'FAQs',
                    onPress: () => { navigation.push('Faqs') }
                })}
                {profileOptionSort({
                    icon: 'headphones',
                    color: Colors.greenColor,
                    option: 'Contact us',
                    onPress: () => { navigation.push('ContactUs') }
                })}
                {profileOptionSort({
                    icon: 'logout',
                    color: Colors.blueColor,
                    option: 'Logout',
                    onPress: () => { setshowLogoutDialog(true) }
                })}
            </View>
        )
    }

    function profileOptionSort({ icon, color, option, onPress }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.profileOptionWrapStyle}
            >
                <MaterialCommunityIcons name={icon} size={24} color={color} />
                <Text numberOfLines={1} style={{ marginLeft: Sizes.fixPadding + 5.0, flex: 1, ...Fonts.blackColor18SemiBold }}>
                    {option}
                </Text>
            </TouchableOpacity>
        )
    }

    function rateRankAndPointInfo() {
        return (
            <View style={styles.rateRankAndPointInfoWrapStyle}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    {rateRankAndPointSort({ icon: require('../../assets/images/icons/rate.png'), title: 'POINTS', value: '590' })}
                </View>
                {rateRankAndPointSort({ icon: require('../../assets/images/icons/world.png'), title: 'WORLD RANK', value: '#1,480' })}
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    {rateRankAndPointSort({ icon: require('../../assets/images/icons/rank.png'), title: 'LOCAL RANK', value: '#46' })}
                </View>
            </View>
        )
    }

    function rateRankAndPointSort({ icon, title, value }) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={icon}
                    style={{ width: 22.0, height: 22.0, resizeMode: 'contain' }}
                />
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 2.0, ...Fonts.grayColor12ExtraBold }}>
                    {title}
                </Text>
                <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 6.0, ...Fonts.primaryColor20ExtraBold }}>
                    {value}
                </Text>
            </View>
        )
    }

    function profileInfo() {
        return (
            <View style={styles.profileInfoWrapStyle}>
                <View style={styles.profilePicWrapStyle}>
                    <Image
                        source={require('../../assets/images/momojies/momoji1.png')}
                        style={{ width: Screen.width / 6.0, height: Screen.width / 6.0, resizeMode: 'contain' }}
                    />
                </View>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.whiteColor22ExtraBold }}>
                    Antonia Mcdaniel
                </Text>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerStyle}>
                <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                    Profile
                </Text>
                <MaterialIcons
                    name="edit"
                    size={24}
                    color={Colors.whiteColor}
                    onPress={() => { navigation.push('EditProfile') }}
                />
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

export default ProfileScreen

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
    headerStyle: {
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 3.0,
        paddingBottom: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rateRankAndPointInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        borderRadius: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding * 3.0,
        elevation: 2.0,
        marginTop: -(Sizes.fixPadding * 6.0),
    },
    profileInfoWrapStyle: {
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        paddingBottom: Sizes.fixPadding * 9.0,
    },
    profilePicWrapStyle: {
        width: Screen.width / 4.0,
        height: Screen.width / 4.0,
        borderRadius: (Screen.width / 4.0) / 2.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        marginBottom: Sizes.fixPadding + 2.0,
    },
    profileOptionWrapStyle: {
        marginBottom: Sizes.fixPadding * 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dialogStyle: {
        padding: 0.0,
        backgroundColor: Colors.whiteColor,
        width: '90%',
        borderRadius: Sizes.fixPadding + 5.0,
    }
})