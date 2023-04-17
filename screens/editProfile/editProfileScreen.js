import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Screen, Sizes, CommonStyles } from '../../constants/styles'
import Header from "../../components/header"
import Button from "../../components/button"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheet } from '@rneui/themed';

const avatarsList = [
    {
        id: '1',
        icon: require('../../assets/images/momojies/momoji12.png'),
        bgColor: Colors.greenColor,
    },
    {
        id: '2',
        icon: require('../../assets/images/momojies/momoji13.png'),
        bgColor: Colors.blueColor,
    },
    {
        id: '3',
        icon: require('../../assets/images/momojies/momoji1.png'),
        bgColor: Colors.tomatoColor,
    },
    {
        id: '4',
        icon: require('../../assets/images/momojies/momoji14.png'),
        bgColor: Colors.pinkColor,
    },
    {
        id: '5',
        icon: require('../../assets/images/momojies/momoji11.png'),
        bgColor: Colors.pinkColor,
    },
    {
        id: '6',
        icon: require('../../assets/images/momojies/momoji15.png'),
        bgColor: Colors.tomatoColor,
    },
    {
        id: '7',
        icon: require('../../assets/images/momojies/momoji16.png'),
        bgColor: Colors.blueColor,
    },
    {
        id: '8',
        icon: require('../../assets/images/momojies/momoji17.png'),
        bgColor: Colors.greenColor,
    },
];

const EditProfileScreen = ({ navigation }) => {

    const [fullName, setfullName] = useState('Antonia Mcdaniel');
    const [email, setemail] = useState('antoniamcdaniel@gmail.com');
    const [mobileNumber, setmobileNumber] = useState('+(444) 123-4859');
    const [password, setpassword] = useState('1235469857');
    const [showAvatarSheet, setshowAvatarSheet] = useState(false);
    const [selectedIconIndex, setselectedIconIndex] = useState(2);
    const [currentSelectedIconIndex, setcurrentSelectedIconIndex] = useState(2);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {profilePicWithChangeIcon()}
                    {fullNameInfo()}
                    {emailInfo()}
                    {mobileNumberInfo()}
                    {passwordInfo()}
                </ScrollView>
            </View>
            {updateButton()}
            {avatarSheet()}
        </SafeAreaView>
    )

    function avatarSheet() {
        return (
            <BottomSheet
                isVisible={showAvatarSheet}
                onBackdropPress={() => setshowAvatarSheet(false)}
            >
                <View style={{ backgroundColor: Colors.whiteColor, }}>
                    <View style={styles.sheetHeaderStyle}>
                        <Text style={{ flex: 1, ...Fonts.blackColor20ExtraBold }}>
                            Choose Avatar
                        </Text>
                        <Text
                            onPress={() => { setshowAvatarSheet(false), setselectedIconIndex(currentSelectedIconIndex) }}
                            style={{ ...Fonts.primaryColor16Bold }}
                        >
                            Done
                        </Text>
                    </View>
                    <View style={styles.allAvatarsWrapStyle}>
                        {
                            avatarsList.map((item, index) => (
                                <TouchableOpacity
                                    key={`${item.id}`}
                                    activeOpacity={0.8}
                                    onPress={() => { setcurrentSelectedIconIndex(index) }}
                                    style={{ ...styles.avatarsWrapStyle, backgroundColor: item.bgColor, }}
                                >
                                    <Image
                                        source={item.icon}
                                        style={{ width: Screen.width / 7.0, height: Screen.width / 7.0, resizeMode: 'contain' }}
                                    />
                                    {
                                        currentSelectedIconIndex == index
                                            ?
                                            <View style={styles.selectedAvatarIndicatorStyle}>
                                                <MaterialCommunityIcons name="check" size={18} color={Colors.whiteColor} />
                                            </View>
                                            :
                                            null
                                    }
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </BottomSheet>
        )
    }

    function updateButton() {
        return (
            <Button
                btnText={'Update'}
                onPress={() => { navigation.pop() }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function passwordInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Password
                </Text>
                <View style={{ borderColor: password ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Password'
                        placeholderTextColor={Colors.grayColor}
                        value={password}
                        onChangeText={(value) => setpassword(value)}
                        style={{ height: 20.0, ...Fonts.blackColor18SemiBold }}
                        cursorColor={Colors.primaryColor}
                        secureTextEntry
                    />
                </View>
            </View>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Mobile Number
                </Text>
                <View style={{ borderColor: mobileNumber ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Mobile Number'
                        placeholderTextColor={Colors.grayColor}
                        value={mobileNumber}
                        onChangeText={(value) => setmobileNumber(value)}
                        style={{ height: 20.0, ...Fonts.blackColor18SemiBold }}
                        cursorColor={Colors.primaryColor}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Email Address
                </Text>
                <View style={{ borderColor: email ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Email Address'
                        placeholderTextColor={Colors.grayColor}
                        value={email}
                        onChangeText={(value) => setemail(value)}
                        style={{ height: 20.0, ...Fonts.blackColor18SemiBold }}
                        cursorColor={Colors.primaryColor}
                        keyboardType="email-address"
                    />
                </View>
            </View>
        )
    }

    function fullNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Full Name
                </Text>
                <View style={{ borderColor: fullName ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Full Name'
                        placeholderTextColor={Colors.grayColor}
                        value={fullName}
                        onChangeText={(value) => setfullName(value)}
                        style={{ height: 20.0, ...Fonts.blackColor18SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function profilePicWithChangeIcon() {
        return (
            <View style={{ alignSelf: 'center', margin: Sizes.fixPadding * 2.0, }}>
                <View style={styles.profilePicWrapStyle}>
                    <Image
                        source={avatarsList[selectedIconIndex].icon}
                        style={{ width: Screen.width / 5.0, height: Screen.width / 5.0, resizeMode: 'contain' }}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { setshowAvatarSheet(true) }}
                    style={styles.editProfileIconWrapStyle}
                >
                    <MaterialCommunityIcons name="camera" size={18} color={Colors.whiteColor} />
                </TouchableOpacity>
            </View>
        )
    }

    function header() {
        return (
            <Header
                headerTitle={'Edit Profile'}
                navigation={navigation}
            />
        )
    }
}

export default EditProfileScreen

const styles = StyleSheet.create({
    editProfileIconWrapStyle: {
        width: 32.0, height: 32.0,
        borderRadius: 16.0,
        backgroundColor: Colors.primaryColor,
        position: 'absolute',
        bottom: -5.0,
        right: 0.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicWrapStyle: {
        width: Screen.width / 3.5,
        height: Screen.width / 3.5,
        borderRadius: (Screen.width / 3.5) / 2.0,
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        alignItems: 'center', justifyContent: 'center'
    },
    sheetHeaderStyle: {
        marginVertical: Sizes.fixPadding * 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarsWrapStyle: {
        width: Screen.width / 5.5,
        height: Screen.width / 5.5,
        borderRadius: (Screen.width / 5.5) / 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedAvatarIndicatorStyle: {
        width: 24.0, height: 24.0,
        borderRadius: 12.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0.0,
        right: 0.0
    },
    allAvatarsWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
})