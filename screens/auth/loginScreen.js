import { StyleSheet, Text, View, SafeAreaView, BackHandler, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../../components/button'

const LoginScreen = ({ navigation }) => {

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
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const [rememberPassword, setrememberPassword] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {welcomeInfo()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {emailInfo()}
                    {passwordInfo()}
                    {rememberAndForgetInfo()}
                    {loginButton()}
                </ScrollView>
                {dontAccountInfo()}
            </View>
            {exitInfo()}
        </SafeAreaView>
    )

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

    function dontAccountInfo() {
        return (
            <Text style={{ textAlign: 'center', ...Fonts.grayColor16SemiBold, margin: Sizes.fixPadding * 2.0, }}>
                Don’t have an account? { }
                <Text onPress={() => { navigation.push('Register') }} style={{ ...Fonts.primaryColor16Bold }}>
                    Register now
                </Text>
            </Text>
        )
    }

    function loginButton() {
        return (
            <Button
                btnText={'Login'}
                onPress={() => { navigation.push('Register') }}
                styles={{ marginTop: Sizes.fixPadding * 5.0, marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function rememberAndForgetInfo() {
        return (
            <View style={{ ...styles.rememberAndForgetInfoWrapStyle }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setrememberPassword(!rememberPassword) }}
                        style={{
                            ...styles.checkBoxStyle,
                            backgroundColor: rememberPassword ? Colors.primaryColor : 'transparent',
                            borderColor: rememberPassword ? 'transparent' : Colors.primaryColor,
                        }}
                    >
                        {
                            rememberPassword
                                ?
                                <MaterialCommunityIcons name="check" size={15} color={Colors.whiteColor} />
                                :
                                null
                        }

                    </TouchableOpacity>
                    <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 2.0, ...Fonts.grayColor16SemiBold }}>
                        Remember me
                    </Text>
                </View>
                <Text
                    onPress={() => { navigation.push('ForgetPassword') }}
                    numberOfLines={1}
                    style={{ textDecorationLine: 'underline', ...Fonts.primaryColor16SemiBold }}
                >
                    Forget password?
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
                        ...styles.textfieldWithRowStyle,
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

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
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

    function welcomeInfo() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, paddingVertical: Sizes.fixPadding * 4.0, paddingHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text numberOfLines={1} style={{ textAlign: 'center', ...Fonts.whiteColor26ExtraBold }}>
                    Welcome to Quizx
                </Text>
                <Text numberOfLines={1} style={{ textAlign: 'center', ...Fonts.whiteColor16SemiBold }}>
                    Login to continue
                </Text>
            </View>
        )
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    checkBoxStyle: {
        width: 18.0,
        height: 18.0,
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 6.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rememberAndForgetInfoWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center'
    },
    exitInfoWrapStyle: {
        backgroundColor: Colors.grayColor,
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    textfieldWithRowStyle: {
        ...CommonStyles.authTextFieldWrapStyle,
        flexDirection: 'row',
        alignItems: 'center'
    }
})