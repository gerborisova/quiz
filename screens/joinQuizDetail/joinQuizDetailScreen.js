import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header'
import Button from '../../components/button'

const JoinQuizDetailScreen = ({ navigation, route }) => {

    const flowFor = route.params.flowFor;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {quizInfo()}
                    {createdByInfo()}
                    {aboutQuiz()}
                </ScrollView>
            </View>
            {startQuizButton()}
        </SafeAreaView>
    )

    function startQuizButton() {
        return (
            <Button
                btnText={'Start Quiz'}
                onPress={() => { flowFor == 'one' ? navigation.push('Quiz') : navigation.push('GroupQuiz') }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function aboutQuiz() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.6 }}>
                <Text style={{ ...Fonts.grayColor16SemiBold, marginBottom: Sizes.fixPadding }}>
                    About This Quiz
                </Text>
                <View style={{ backgroundColor: Colors.extraLightPrimaryColor, borderRadius: Sizes.fixPadding - 5.0, padding: Sizes.fixPadding + 5.0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={{ flex: 1, ...Fonts.blackColor18SemiBold }}>
                            Quiz Type:
                        </Text>
                        <Text style={{ ...Fonts.grayColor16SemiBold }}>
                            MCQ
                        </Text>
                    </View>
                    <View style={{ marginVertical: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={{ flex: 1, ...Fonts.blackColor18SemiBold }}>
                            Number of Question:
                        </Text>
                        <Text style={{ ...Fonts.grayColor16SemiBold }}>
                            15
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text numberOfLines={1} style={{ flex: 1, ...Fonts.blackColor18SemiBold }}>
                            Quiz Duration:
                        </Text>
                        <Text style={{ ...Fonts.grayColor16SemiBold }}>
                            15 Minutes
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function createdByInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 2.6, }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Created By
                </Text>
                <View style={styles.creatorInfoWraptyle}>
                    <Image
                        source={require('../../assets/images/momojies/momoji4.png')}
                        style={{ width: 50.0, height: 50.0, resizeMode: 'contain' }}
                    />
                    <Text numberOfLines={1} style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.blackColor18SemiBold, flex: 1 }}>
                        Marti Lufkin
                    </Text>
                </View>
            </View>
        )
    }

    function quizInfo() {
        return (
            <View style={{ alignItems: 'center', marginTop: Sizes.fixPadding * 3.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.primaryColor20ExtraBold }}>
                    Quiz Found!
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, textAlign: 'center', ...Fonts.grayColor16SemiBold }}>
                    Biology and Science Quiz 2022
                </Text>
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

export default JoinQuizDetailScreen

const styles = StyleSheet.create({
    creatorInfoWraptyle: {
        marginTop: Sizes.fixPadding,
        backgroundColor: Colors.extraLightPrimaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        padding: Sizes.fixPadding - 4.0,
        flexDirection: 'row',
        alignItems: 'center'
    }
})