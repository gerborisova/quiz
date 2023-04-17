import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import OTPTextView from 'react-native-otp-textinput';
import { Overlay } from '@rneui/themed';
import Button from '../../components/button';

const VerificationScreen = ({ navigation }) => {

    const [otpInput, setotpInput] = useState('');
    const [showLoadingDialog, setshowLoadingDialog] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {verificationInfo()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {otpInfo()}
                    {continueButton()}
                </ScrollView>
            </View>
            {loadingDialog()}
        </SafeAreaView>
    )

    function loadingDialog() {
        return (
            <Overlay
                isVisible={showLoadingDialog}
                overlayStyle={styles.dialogStyle}
            >
                <View style={{ margin: Sizes.fixPadding * 2.8, }}>
                    <ActivityIndicator
                        size={45}
                        color={Colors.primaryColor}
                    />
                    <Text style={{ textAlign: 'center', ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding + 5.0 }}>
                        Please wait...
                    </Text>
                </View>
            </Overlay>
        )
    }

    function continueButton() {
        return (
            <Button
                btnText={'Continue'}
                onPress={() => {
                    setshowLoadingDialog(true)
                    setTimeout(() => {
                        setshowLoadingDialog(false)
                        navigation.push('BottomTabBar')
                    }, 2000);
                }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function otpInfo() {
        return (
            <OTPTextView
                containerStyle={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 5.0, }}
                handleTextChange={(text) => {
                    setotpInput(text)
                    if (otpInput.length == 3) {
                        setshowLoadingDialog(true)
                        setTimeout(() => {
                            setshowLoadingDialog(false)
                            navigation.push('BottomTabBar')
                        }, 2000);
                    }
                }}
                inputCount={4}
                keyboardType="numeric"
                tintColor={Colors.primaryColor}
                offTintColor={Colors.extraLightPrimaryColor}
                textInputStyle={styles.textFieldStyle}
            />
        )
    }

    function verificationInfo() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, paddingVertical: Sizes.fixPadding * 4.0, paddingHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text numberOfLines={1} style={{ textAlign: 'center', ...Fonts.whiteColor26ExtraBold }}>
                    Verification code
                </Text>
                <Text style={{ lineHeight: 24.0, textAlign: 'center', ...Fonts.whiteColor16SemiBold }}>
                    We have sent the verification code to{`\n`}+(444) 148-7896
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

export default VerificationScreen

const styles = StyleSheet.create({
    dialogStyle: {
        overflow: 'hidden',
        padding: 0.0,
        width: '85%',
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor
    },
    textFieldStyle: {
        borderBottomWidth: null,
        borderRadius: Sizes.fixPadding - 5.0,
        ...Fonts.blackColor18SemiBold,
        backgroundColor: Colors.extraLightPrimaryColor,
        borderWidth: 1.5,
    }
})