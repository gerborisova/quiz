import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from "../../components/header"

const friendsList = [
    {
        id: '1',
        profilePic: require('../../assets/images/momojies/momoji2.png'),
        name: 'Antonia Mcdaniel',
        bgColor: Colors.tomatoColor,
    },
    {
        id: '2',
        profilePic: require('../../assets/images/momojies/momoji5.png'),
        name: 'Ginger Williamson',
        bgColor: Colors.pinkColor,
    },
    {
        id: '3',
        profilePic: require('../../assets/images/momojies/momoji6.png'),
        name: 'Mario Fleming',
        bgColor: Colors.greenColor,
    },
    {
        id: '4',
        profilePic: require('../../assets/images/momojies/momoji2.png'),
        name: 'Debra Lester',
        bgColor: Colors.blueColor,
    },
    {
        id: '5',
        profilePic: require('../../assets/images/momojies/momoji7.png'),
        name: 'Brad Dawson',
        bgColor: Colors.tomatoColor,
    },
    {
        id: '6',
        profilePic: require('../../assets/images/momojies/momoji8.png'),
        name: 'Clara Nichols',
        bgColor: Colors.pinkColor,
    },
    {
        id: '7',
        profilePic: require('../../assets/images/momojies/momoji9.png'),
        name: 'Michael Rhodes',
        bgColor: Colors.greenColor,
    },
    {
        id: '8',
        profilePic: require('../../assets/images/momojies/momoji11.png'),
        name: 'Emma Cunningham',
        bgColor: Colors.blueColor,
    },
    {
        id: '9',
        profilePic: require('../../assets/images/momojies/momoji10.png'),
        name: 'Kelsey Fritz',
        bgColor: Colors.tomatoColor,
    },
];

const SelectFriendScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {friends()}
            </View>
        </SafeAreaView>
    )

    function friends() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.push('StartQuizWithFriend') }}
                style={styles.friendsInfoWrapStyle}
            >
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
                <View style={styles.inviteButtonStyle}>
                    <Text style={{ ...Fonts.primaryColor16Bold }}>
                        Invite
                    </Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={friendsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function header() {
        return (
            <Header
                headerTitle="Select Friend"
                navigation={navigation}
            />
        )
    }
}

export default SelectFriendScreen

const styles = StyleSheet.create({
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
    inviteButtonStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding - 4.0,
        backgroundColor: 'rgba(106, 90, 224, 0.2)',
    }
})