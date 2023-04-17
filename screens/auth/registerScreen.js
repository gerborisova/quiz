import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../components/button'

const RegisterScreen = ({ navigation }) => {

    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setshowPassword] = useState(false)
    const [agreeWithTerms, setagreeWithTerms] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {welcomeInfo()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {fullNameInfo()}
                    {emailInfo()}
                    {mobileNumberInfo()}
                    {passwordInfo()}
                    {agreeWithTermsAndConditionInfo()}
                    {registerButton()}
                </ScrollView>
            </View>
            {alreadyAccountInfo()}
        </SafeAreaView>
    )

    function alreadyAccountInfo() {
        return (
            <Text style={{ textAlign: 'center', ...Fonts.grayColor16SemiBold, margin: Sizes.fixPadding * 2.0, }}>
                Already have an account? { }
                <Text onPress={() => { navigation.push('Login') }} style={{ ...Fonts.primaryColor16Bold }}>
                    Login now
                </Text>
            </Text>
        )
    }

    function registerButton() {
        return (
            <Button
                btnText={'Register'}
                onPress={() => { navigation.push('Verification') }}
                styles={{ marginTop: Sizes.fixPadding * 5.0, marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function agreeWithTermsAndConditionInfo() {
        return (
            <View style={styles.agreeWithTermsAndConditionInfoWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { setagreeWithTerms(!agreeWithTerms) }}
                    style={{
                        ...styles.checkBoxStyle,
                        backgroundColor: agreeWithTerms ? Colors.primaryColor : 'transparent',
                        borderColor: agreeWithTerms ? 'transparent' : Colors.primaryColor,
                    }}
                >
                    {
                        agreeWithTerms
                            ?
                            <MaterialCommunityIcons name="check" size={15} color={Colors.whiteColor} />
                            :
                            null
                    }
                </TouchableOpacity>
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 2.0, ...Fonts.grayColor16SemiBold }}>
                    I agree with { }
                    <Text style={{ ...Fonts.primaryColor16Bold }}>
                        Terms & Conditions
                    </Text>
                </Text>
            </View>
        )
    }

    function passwordInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Password <Text style={{ color: Colors.redColor }}>*</Text>
                </Text>
                <View
                    style={{
                        borderColor: password ? Colors.primaryColor : 'transparent',
                        ...styles.textFieldWithRowStyle,
                    }}
                >
                    <TextInput
                        placeholder='Your password'
                        placeholderTextColor={Colors.grayColor}
                        value={password}
                        onChangeText={(value) => setpassword(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold, flex: 1 }}
                        cursorColor={Colors.primaryColor}
                        secureTextEntry={!showPassword}
                    />
                    <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={20} color={Colors.lightGrayColor} onPress={() => { setshowPassword(!showPassword) }} />
                </View>
            </View>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Mobile Number <Text style={{ color: Colors.redColor }}>*</Text>
                </Text>
                <View style={{ borderColor: mobileNumber ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Your mobile number'
                        placeholderTextColor={Colors.grayColor}
                        value={mobileNumber}
                        onChangeText={(value) => setmobileNumber(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Email <Text style={{ color: Colors.redColor }}>*</Text>
                </Text>
                <View style={{ borderColor: email ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Your email'
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

    function fullNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Full Name <Text style={{ color: Colors.redColor }}>*</Text>
                </Text>
                <View style={{ borderColor: fullName ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Your full name'
                        placeholderTextColor={Colors.grayColor}
                        value={fullName}
                        onChangeText={(value) => setfullName(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function welcomeInfo() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, paddingVertical: Sizes.fixPadding * 4.0, paddingHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text numberOfLines={1} style={{ textAlign: 'center', ...Fonts.whiteColor26ExtraBold }}>
                    Welcome to Quizx
                </Text>
                <Text numberOfLines={1} style={{ textAlign: 'center', ...Fonts.whiteColor16SemiBold }}>
                    Create an account to continue
                </Text>
                <MaterialCommunityIcons
                    name="keyboard-backspace"
                    size={26}
                    color={Colors.whiteColor}
                    style={{ position: 'absolute', left: 20.0, top: 40.0, }}
                    onPress={() => { navigation.pop() }}
                />
            </View>
        )
    }
}

export default RegisterScreen

const styles = StyleSheet.create({
    checkBoxStyle: {
        width: 18.0,
        height: 18.0,
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 6.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textFieldWithRowStyle: {
        ...CommonStyles.authTextFieldWrapStyle,
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeWithTermsAndConditionInfoWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.fixPadding
    }
})