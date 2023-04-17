import { Text, View, SafeAreaView, StatusBar, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import Header from '../../components/header'
import Button from '../../components/button'

const JoinQuizScreen = ({ navigation, route }) => {

    const flowFor = route.params.flowFor;

    const [quizId, setquizId] = useState('');
    const [quizPassword, setquizPassword] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                    {quizIdInfo()}
                    {quizPasswordInfo()}
                </ScrollView>
            </View>
            {nextButton()}
        </SafeAreaView>
    )

    function nextButton() {
        return (
            <Button
                btnText={'Next'}
                onPress={() => { navigation.push('JoinQuizDetail', { flowFor: flowFor }) }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function quizPasswordInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Quiz Password
                </Text>
                <View style={{ borderColor: quizPassword ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter quiz password'
                        placeholderTextColor={Colors.grayColor}
                        value={quizPassword}
                        onChangeText={(value) => setquizPassword(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function quizIdInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Quiz ID
                </Text>
                <View style={{ borderColor: quizId ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter quiz id'
                        placeholderTextColor={Colors.grayColor}
                        value={quizId}
                        onChangeText={(value) => setquizId(value)}
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
                headerTitle={'Join Quiz'}
                navigation={navigation}
            />
        )
    }
}

export default JoinQuizScreen