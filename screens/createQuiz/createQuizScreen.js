import { StyleSheet, Text, View, SafeAreaView, BackHandler, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { Colors, Fonts, Sizes, CommonStyles, Screen } from '../../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../../components/button';

const durationsList = [
    { label: '05 Minutes', value: '1' },
    { label: '10 Minutes', value: '2' },
    { label: '15 Minutes', value: '3' },
    { label: '20 Minutes', value: '4' },
    { label: '25 Minutes', value: '5' },
    { label: '30 Minutes', value: '6' },
    { label: '35 Minutes', value: '7' },
    { label: '40 Minutes', value: '8' },
    { label: '45 Minutes', value: '9' },
    { label: '50 Minutes', value: '10' },
    { label: '55 Minutes', value: '11' },
    { label: '60 Minutes', value: '12' },
];

const CreateQuizScreen = ({ navigation }) => {

    const backAction = () => {
        clearData();
        navigation.goBack();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    const [quizId, setquizId] = useState('');
    const [quizPassword, setquizPassword] = useState('');
    const [quizName, setquizName] = useState('');
    const [questionType, setquestionType] = useState('');
    const [numberOfQuestion, setnumberOfQuestion] = useState('');
    const [quizDuration, setquizDuration] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                    {idAndPasswordInfo()}
                    {quizNameInfo()}
                    {questionTypeInfo()}
                    {numberOfQuestionInfo()}
                    {durationInfo()}
                </ScrollView>
            </View>
            {continueButton()}
        </SafeAreaView>
    )

    function continueButton() {
        return (
            <Button
                btnText={'Continue'}
                onPress={() => { navigation.push('CreateQuizQuestions') }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function clearData() {
        setquizId('');
        setquizPassword('');
        setquizName('');
        setquestionType('');
        setnumberOfQuestion('');
        setquizDuration('');
    }

    function durationInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Quiz Duration
                </Text>
                <Dropdown
                    style={styles.dropdownStyle}
                    placeholderStyle={{ ...Fonts.grayColor16SemiBold }}
                    selectedTextStyle={{ ...Fonts.blackColor16SemiBold }}
                    itemTextStyle={{ ...Fonts.blackColor16SemiBold }}
                    iconStyle={{ width: 27.0, }}
                    iconColor={Colors.primaryColor}
                    data={durationsList}
                    search={false}
                    maxHeight={Screen.height / 2.0}
                    dropdownPosition="top"
                    labelField="label"
                    valueField="value"
                    placeholder={'Select Duration'}
                    value={quizDuration}
                    onChange={item => {
                        setquizDuration(item.value);
                    }}
                    showsVerticalScrollIndicator={false}
                    containerStyle={{ borderRadius: Sizes.fixPadding }}
                />
            </View>
        )
    }

    function numberOfQuestionInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Number of Question
                </Text>
                <View style={{ borderColor: numberOfQuestion ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Number of Question'
                        placeholderTextColor={Colors.grayColor}
                        value={numberOfQuestion}
                        onChangeText={(value) => setnumberOfQuestion(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                        keyboardType="number-pad"
                    />
                </View>
            </View>
        )
    }

    function questionTypeInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Question Type
                </Text>
                <View style={{ borderColor: questionType ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Question Type'
                        placeholderTextColor={Colors.grayColor}
                        value={questionType}
                        onChangeText={(value) => setquestionType(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function quizNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.grayColor16SemiBold }}>
                    Quiz Name
                </Text>
                <View style={{ borderColor: quizName ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Quiz Name'
                        placeholderTextColor={Colors.grayColor}
                        value={quizName}
                        onChangeText={(value) => setquizName(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function idAndPasswordInfo() {
        return (
            <View style={styles.idAndPasswordInfoWrapStyle}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ ...Fonts.blackColor18SemiBold }}>
                        Quiz ID:
                    </Text>
                    <TextInput
                        placeholder='Enter Quiz Id'
                        placeholderTextColor={Colors.grayColor}
                        value={quizId}
                        onChangeText={(value) => setquizId(value)}
                        style={styles.idAndPasswordFieldStyle}
                        cursorColor={Colors.primaryColor}
                        keyboardType="number-pad"
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: Sizes.fixPadding + 2.0 }}>
                    <Text style={{ ...Fonts.blackColor18SemiBold }}>
                        Quiz Password:
                    </Text>
                    <TextInput
                        placeholder='Enter Quiz Password'
                        placeholderTextColor={Colors.grayColor}
                        value={quizPassword}
                        onChangeText={(value) => setquizPassword(value)}
                        style={styles.idAndPasswordFieldStyle}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.headerStyle }}>
                <MaterialCommunityIcons
                    name="keyboard-backspace"
                    size={28}
                    color={Colors.whiteColor}
                    onPress={() => { clearData(), navigation.goBack() }}
                />
                <Text style={{ flex: 1, ...Fonts.whiteColor22ExtraBold, marginLeft: Sizes.fixPadding * 2.0 }}>
                    Create Quiz
                </Text>
            </View>
        )
    }
}

export default CreateQuizScreen

const styles = StyleSheet.create({
    idAndPasswordInfoWrapStyle: {
        backgroundColor: Colors.extraLightPrimaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 8.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding * 3.0
    },
    idAndPasswordFieldStyle: {
        ...Fonts.blackColor16SemiBold,
        flex: 1,
        textAlign: 'right',
        marginLeft: Sizes.fixPadding
    },
    dropdownStyle: {
        backgroundColor: Colors.extraLightPrimaryColor,
        padding: Sizes.fixPadding + 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        marginTop: Sizes.fixPadding,
    }
})