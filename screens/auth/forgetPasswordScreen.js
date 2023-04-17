import { Text, View, SafeAreaView, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header';
import Button from '../../components/button'

const ForgetPasswordScreen = ({ navigation }) => {

    const [email, setemail] = useState('')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {instructions()}
                {emailAddressInfo()}
                {sendButton()}
            </View>
        </SafeAreaView>
    )

    function sendButton() {
        return (
            <Button
                btnText={'Send'}
                onPress={() => { navigation.push('CheckForgetPassword') }}
                styles={{ marginTop: Sizes.fixPadding * 5.0, marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function emailAddressInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Email Address
                </Text>
                <View style={{ borderColor: email ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Your email address'
                        placeholderTextColor={Colors.grayColor}
                        value={email}
                        onChangeText={(value) => setemail(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                        keyboardType="email-address"
                    />
                </View>
            </View>
        )
    }

    function instructions() {
        return (
            <Text style={{ ...Fonts.grayColor16SemiBold, marginVertical: Sizes.fixPadding * 3.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                Enter the email associated with your account and we’ll send an email with recover link and instructions to reset your password.
            </Text>
        )
    }

    function header() {
        return (
            <Header
                headerTitle={'Forget Password'}
                navigation={navigation}
            />
        )
    }
}

export default ForgetPasswordScreen