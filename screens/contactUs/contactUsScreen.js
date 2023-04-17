import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import Header from '../../components/header'
import Button from '../../components/button'

const ContactUsScreen = ({ navigation }) => {

    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding * 3.0, paddingBottom: Sizes.fixPadding * 2.0 }}
                >
                    {fullNameInfo()}
                    {emailInfo()}
                    {messageInfo()}
                    {sendButton()}
                </ScrollView>
            </View>
            {getInTouchInfo()}
        </SafeAreaView>
    )

    function getInTouchInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 4.0, alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/icons/support.png')}
                    style={{ width: 40.0, height: 30.0, resizeMode: 'contain' }}
                />
                <Text style={styles.supportTextStyle}>
                    You can <Text style={{ ...Fonts.primaryColor16Bold }}>Get in touch</Text> our 24/7 customer service any time.
                </Text>
            </View>
        )
    }

    function sendButton() {
        return (
            <Button
                btnText={'Send'}
                onPress={() => { navigation.pop() }}
                styles={{ marginTop: Sizes.fixPadding * 5.0, }}
            />
        )
    }

    function messageInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Message
                </Text>
                <View style={{ borderColor: message ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Write here...'
                        placeholderTextColor={Colors.grayColor}
                        value={message}
                        onChangeText={(value) => setmessage(value)}
                        style={{ ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
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

    function fullNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Full Name
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

    function header() {
        return (
            <Header
                headerTitle={'Contact us'}
                navigation={navigation}
            />
        )
    }
}

export default ContactUsScreen

const styles = StyleSheet.create({
    supportTextStyle: {
        lineHeight: 24.0,
        marginTop: Sizes.fixPadding,
        textAlign: 'center',
        ...Fonts.grayColor16SemiBold
    }
})