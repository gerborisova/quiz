import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from '../../components/header'
import Button from "../../components/button"

const CreatePasswordScreen = ({ navigation }) => {

    const [password, setpassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState('');
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {newPasswordInstruction()}
                    {passwordInfo()}
                    {confirmPasswordInfo()}
                    {resetPasswordButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function resetPasswordButton() {
        return (
            <Button
                btnText={'Reset Password'}
                onPress={() => { navigation.push('Login') }}
                styles={{ marginTop: Sizes.fixPadding * 5.0, marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function confirmPasswordInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Confirm Password <Text style={{ color: Colors.redColor }}>*</Text>
                </Text>
                <View
                    style={{
                        borderColor: confirmPassword ? Colors.primaryColor : 'transparent',
                        ...styles.textFieldStyle
                    }}
                >
                    <TextInput
                        placeholder='Your confirm password'
                        placeholderTextColor={Colors.grayColor}
                        value={confirmPassword}
                        onChangeText={(value) => setconfirmPassword(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold, flex: 1 }}
                        cursorColor={Colors.primaryColor}
                        secureTextEntry={!showConfirmPassword}
                    />
                    <MaterialCommunityIcons
                        name={showConfirmPassword ? "eye-off" : "eye"}
                        size={20}
                        color={Colors.lightGrayColor}
                        onPress={() => { setshowConfirmPassword(!showConfirmPassword) }}
                    />
                </View>
                <Text style={{ ...Fonts.primaryColor16SemiBold, marginTop: Sizes.fixPadding }}>
                    Both password must match.
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
                        ...styles.textFieldStyle
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
                    <MaterialCommunityIcons
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color={Colors.lightGrayColor}
                        onPress={() => { setshowPassword(!showPassword) }}
                    />
                </View>
                <Text style={{ ...Fonts.primaryColor16SemiBold, marginTop: Sizes.fixPadding }}>
                    Must be at least 8 characters
                </Text>
            </View>
        )
    }

    function newPasswordInstruction() {
        return (
            <Text style={styles.passwordInstructionTextStyle}>
                Your new password must be different form previous used passwords.
            </Text>
        )
    }

    function header() {
        return (
            <Header
                headerTitle={'Create new password'}
                navigation={navigation}
            />
        )
    }
}

export default CreatePasswordScreen

const styles = StyleSheet.create({
    passwordInstructionTextStyle: {
        lineHeight: 24.0,
        ...Fonts.grayColor16SemiBold,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding * 3.0,
    },
    textFieldStyle: {
        ...CommonStyles.authTextFieldWrapStyle,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
