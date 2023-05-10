import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView, BackHandler } from 'react-native'
import React, { useCallback } from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../../components/button'
import { useFocusEffect } from '@react-navigation/native'

const QuizResultScreen = ({ navigation,route }) => {

    const {correct, all}=route.params;
    const incorrect = all-correct;
    const backAction = () => {
        navigation.navigate('Home');
        return true;
    }

    console.log(all,correct);
    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {closeIcon()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingTop: (Screen.height / 4.5), justifyContent: 'center', }}
                >
                    {scoreInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function scoreInfo() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, marginHorizontal: Sizes.fixPadding * 2.0, borderRadius: Sizes.fixPadding + 5.0, }}>
                <Image
                    source={require('../../assets/images/thumb.png')}
                    style={styles.thumbImageStyle}
                />
                <Image
                    source={require('../../assets/images/goodJob.png')}
                    style={{ width: '100%', height: 50.0, resizeMode: 'contain' }}
                />
                <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ ...styles.scroreBoxStyle, backgroundColor: Colors.grayColor }}>
                        <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                            {all}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor16SemiBold }}>
                            Question
                        </Text>
                    </View>
                    <View style={{ ...styles.scroreBoxStyle, backgroundColor: Colors.hightLightGreenColor }}>
                        <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                            {correct}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor16SemiBold }}>
                            Correct
                        </Text>
                    </View>
                    <View style={{ ...styles.scroreBoxStyle, backgroundColor: Colors.redColor }}>
                        <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                            {incorrect}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor16SemiBold }}>
                            Incorrect
                        </Text>
                    </View>
                </View>
                {leaderBoardButton()}
            </View>
        )
    }

    function leaderBoardButton() {
        return (
            <Button
                btnText={'More Quizes'}
                onPress={() => { navigation.navigate('QuizCategories') }}
                styles={{ marginTop: Sizes.fixPadding * 5.0, marginBottom: Sizes.fixPadding * 3.0 }}
            />
        )
    }

    function closeIcon() {
        return (
            <MaterialIcons
                name="close"
                size={24}
                color={Colors.whiteColor}
                style={{ position: 'absolute', top: 20.0, left: 20.0, zIndex: 1 }}
                onPress={() => { navigation.navigate('QuizCategories') }}
            />
        )
    }
}

export default QuizResultScreen

const styles = StyleSheet.create({
    scroreBoxStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 2.0,
        paddingHorizontal: Sizes.fixPadding + 4.0,
        flex: 1,
        marginHorizontal: Sizes.fixPadding,
        alignItems: 'center',
    },
    thumbImageStyle: {
        marginTop: -(Screen.height / 4.5),
        width: '100%',
        height: Screen.height / 3.2,
        resizeMode: 'contain',
    }
})