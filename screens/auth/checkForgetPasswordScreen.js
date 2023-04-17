import { Text, View, SafeAreaView, StatusBar, Image, ScrollView, } from 'react-native'
import React from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import Button from "../../components/button"

const CheckForgetPasswordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    {checkMailInfo()}
                    {openEmailAppButton()}
                    {skipInfo()}
                </ScrollView>
                {notReceiveEmailInfo()}
            </View>
        </SafeAreaView>
    )

    function notReceiveEmailInfo() {
        return (
            <Text style={{ textAlign: 'center', ...Fonts.grayColor16SemiBold, margin: Sizes.fixPadding * 2.0, }}>
                Did not receive the email? Check your spam filter, or { }
                <Text style={{ ...Fonts.primaryColor16Bold }}>try another email address</Text>
            </Text>
        )
    }

    function skipInfo() {
        return (
            <Text style={{ textAlign: 'center', ...Fonts.grayColor16Bold, marginVertical: Sizes.fixPadding * 2.0, }}>
                Skip, I’ll confirm later
            </Text>
        )
    }

    function openEmailAppButton() {
        return (
            <Button
                btnText={'Open Email app'}
                onPress={() => { navigation.push('CreatePassword') }}
                styles={{}}
            />
        )
    }

    function checkMailInfo() {
        return (
            <View style={{ alignItems: 'center', marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ backgroundColor: Colors.lightPrimaryColor, borderRadius: Sizes.fixPadding + 4.0, padding: Sizes.fixPadding * 2.6, }}>
                    <Image
                        source={require('../../assets/images/icons/email.png')}
                        style={{ width: Screen.width / 10.0, height: Screen.width / 10.0, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ marginVertical: Sizes.fixPadding * 4.0, }}>
                    <Text style={{ textAlign: 'center', ...Fonts.blackColor26ExtraBold }}>
                        Check your mail
                    </Text>
                    <Text style={{ textAlign: 'center', lineHeight: 24.0, ...Fonts.grayColor16SemiBold }}>
                        We have sent a password recover link and instructions to your email.
                    </Text>
                </View>
            </View>
        )
    }
}

export default CheckForgetPasswordScreen