import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, Screen, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons'
import Button from '../../components/button'

const CreateQuizSuccessfullyScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {closeIcon()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingTop: (Screen.height / 4.5), justifyContent: 'center', }}
                >
                    {quizInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function quizInfo() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, marginHorizontal: Sizes.fixPadding * 2.0, borderRadius: Sizes.fixPadding + 5.0, }}>
                <Image
                    source={require('../../assets/images/thumb.png')}
                    style={styles.thumbImageStyle}
                />
                <View style={{ alignItems: 'center', marginHorizontal: Sizes.fixPadding * 2.0 }}>
                    <Text style={{ ...Fonts.grayColor16SemiBold }}>
                        Quiz Name
                    </Text>
                    <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor20Bold }}>
                        Biology and Science 2022
                    </Text>
                </View>
                <View style={{ marginTop: Sizes.fixPadding * 5.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text numberOfLines={1} style={{ minWidth: Screen.width / 3.4, ...Fonts.blackColor16SemiBold }}>
                            Quiz ID:
                        </Text>
                        <Text numberOfLines={1} style={styles.valueTextStyle}>
                            444 485 8965
                        </Text>
                    </View>
                    <View style={{ marginVertical: Sizes.fixPadding + 5.0, flexDirection: 'row', alignItems: 'center', }}>
                        <Text numberOfLines={1} style={{ minWidth: Screen.width / 3.4, ...Fonts.blackColor16SemiBold }}>
                            Quiz Password:
                        </Text>
                        <Text numberOfLines={1} style={styles.valueTextStyle}>
                            abc@123
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text numberOfLines={1} style={{ minWidth: Screen.width / 3.4, ...Fonts.blackColor16SemiBold }}>
                            Invite Link
                        </Text>
                        <Text numberOfLines={1} style={styles.valueTextStyle}>
                            quizx.com/kul-khgy-gqz
                        </Text>
                    </View>
                </View>
                {shareLinkButton()}
            </View>
        )
    }

    function shareLinkButton() {
        return (
            <Button
                btnText={'Share Link'}
                onPress={() => { navigation.push('BottomTabBar') }}
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
                onPress={() => { navigation.push('BottomTabBar') }}
            />
        )
    }
}

export default CreateQuizSuccessfullyScreen

const styles = StyleSheet.create({
    thumbImageStyle: {
        marginTop: -(Screen.height / 4.5),
        width: '100%',
        height: Screen.height / 3.2,
        resizeMode: 'contain',
    },
    valueTextStyle: {
        textAlign: 'right',
        flex: 1,
        marginLeft: Sizes.fixPadding,
        ...Fonts.primaryColor18SemiBold
    }
})