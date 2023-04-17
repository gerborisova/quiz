import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList, ScrollView, } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes, Screen, CommonStyles } from '../../constants/styles'
import Button from '../../components/button'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const socialMediaOptionsList = [
    {
        id: '1',
        icon: require('../../assets/images/socialMedia/facebook.png'),
    },
    {
        id: '2',
        icon: require('../../assets/images/socialMedia/gmail.png'),
    },
    {
        id: '3',
        icon: require('../../assets/images/socialMedia/instagram.png'),
    },
    {
        id: '4',
        icon: require('../../assets/images/socialMedia/twitter.png'),
    },
    {
        id: '5',
        icon: require('../../assets/images/socialMedia/whatsapp.png'),
    },
    {
        id: '6',
        icon: require('../../assets/images/socialMedia/snapchat.png'),
    },
];

const ReferFriendScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <View style={{ flex: 1, marginTop: -60.0, }}>
                    <ScrollView contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                        {referFriendInfo()}
                        {shareInfo()}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )

    function shareInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.socialMediaOptionWrapStyle}>
                <Image
                    source={item.icon}
                    style={{ width: 26.0, height: 26.0, resizeMode: 'contain' }}
                />
            </View>
        )
        return (
            <View style={{ paddingTop: Sizes.fixPadding * 3.0 }}>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor20ExtraBold }}>
                    Share
                </Text>
                <FlatList
                    horizontal
                    data={socialMediaOptionsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingLeft: Sizes.fixPadding * 2.0, }}
                />
            </View>
        )
    }

    function referFriendInfo() {
        return (
            <View style={styles.referFriendInfoWrapStyle}>
                <Image
                    source={require('../../assets/images/gift.png')}
                    style={{ width: '100%', height: Screen.width / 1.5, resizeMode: 'contain' }}
                />
                <View style={styles.referCodeWrapStyle}>
                    <Text style={{ ...Fonts.primaryColor24ExtraBold }}>
                        SADJK170S
                    </Text>
                </View>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 4.0, textAlign: 'center', ...Fonts.grayColor16SemiBold }}>
                    Share your code with your friends and get exciting bonus points
                </Text>
                <Button
                    btnText={'Refer'}
                    onPress={() => { navigation.pop() }}
                    styles={{ marginVertical: Sizes.fixPadding * 3.0, marginBottom: Sizes.fixPadding * 2.5, }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.headerStyle, paddingBottom: Sizes.fixPadding * 9.0, }}>
                <MaterialCommunityIcons
                    name="keyboard-backspace"
                    size={28}
                    color={Colors.whiteColor}
                    onPress={() => { navigation.pop() }}
                />
                <Text style={{ flex: 1, ...Fonts.whiteColor22ExtraBold, marginLeft: Sizes.fixPadding * 2.0 }}>
                    Refer a Friend
                </Text>
            </View>
        )
    }
}

export default ReferFriendScreen

const styles = StyleSheet.create({
    socialMediaOptionWrapStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding - 5.0,
        marginRight: Sizes.fixPadding * 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.extraLightPrimaryColor
    },
    referFriendInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        elevation: 2.0,
    },
    referCodeWrapStyle: {
        borderColor: Colors.primaryColor,
        borderStyle: 'dashed',
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        alignSelf: 'center',
        marginVertical: Sizes.fixPadding * 2.0,
    }
})