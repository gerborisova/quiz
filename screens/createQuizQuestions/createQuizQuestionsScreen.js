import { Text, View, SafeAreaView, StatusBar, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import Header from '../../components/header'
import Button from '../../components/button'

const CreateQuizQuestionsScreen = ({ navigation }) => {

    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [currentQuestion, setcurrentQuestion] = useState('');
    const [option1, setoption1] = useState('');
    const [option2, setoption2] = useState('');
    const [option3, setoption3] = useState('');
    const [option4, setoption4] = useState('');

    const numberOfQuestions = Array(15)
        .fill()
        .map((_, i) => i)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                    {questionInfo()}
                    {optionsInfo()}
                </ScrollView>
            </View>
            {continueOrFinishButton()}
        </SafeAreaView>
    )

    function clearPreviousInfo() {
        setcurrentQuestion('');
        setoption1('');
        setoption2('');
        setoption3('');
        setoption4('');
    }

    function continueOrFinishButton() {
        return (
            <Button
                btnText={currentQuestionIndex == numberOfQuestions.length - 1 ? 'Finish' : 'Continue'}
                onPress={() => {
                    if (currentQuestionIndex == numberOfQuestions.length - 1) {
                        navigation.push('CreateQuizSuccessfully')
                    }
                    else {
                        clearPreviousInfo()
                        setcurrentQuestionIndex(currentQuestionIndex + 1)
                    }
                }}
                styles={{ marginBottom: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function optionsInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor20ExtraBold }}>
                    Options
                </Text>
                <View style={{ borderColor: option1 ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, marginBottom: Sizes.fixPadding }}>
                    <TextInput
                        placeholder='Enter Option 1'
                        placeholderTextColor={Colors.grayColor}
                        value={option1}
                        onChangeText={(value) => setoption1(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
                <View style={{ borderColor: option2 ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, marginBottom: Sizes.fixPadding }}>
                    <TextInput
                        placeholder='Enter Option 2'
                        placeholderTextColor={Colors.grayColor}
                        value={option2}
                        onChangeText={(value) => setoption2(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
                <View style={{ borderColor: option3 ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, marginBottom: Sizes.fixPadding }}>
                    <TextInput
                        placeholder='Enter Option 3'
                        placeholderTextColor={Colors.grayColor}
                        value={option3}
                        onChangeText={(value) => setoption3(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
                <View style={{ borderColor: option4 ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, marginBottom: Sizes.fixPadding }}>
                    <TextInput
                        placeholder='Enter Option 4'
                        placeholderTextColor={Colors.grayColor}
                        value={option4}
                        onChangeText={(value) => setoption4(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function questionInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 3.0 }}>
                <Text style={{ ...Fonts.blackColor20ExtraBold }}>
                    Question
                </Text>
                <View style={{ borderColor: currentQuestion ? Colors.primaryColor : 'transparent', ...CommonStyles.authTextFieldWrapStyle, }}>
                    <TextInput
                        placeholder='Enter Question'
                        placeholderTextColor={Colors.grayColor}
                        value={currentQuestion}
                        onChangeText={(value) => setcurrentQuestion(value)}
                        style={{ height: 20.0, ...Fonts.blackColor16SemiBold }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View>
                <Header
                    headerTitle={'Create Quiz'}
                    navigation={navigation}
                />
                <View style={{ backgroundColor: Colors.primaryColor, paddingBottom: Sizes.fixPadding * 2.0, paddingHorizontal: Sizes.fixPadding * 2.0, }}>
                    <Text style={{ ...Fonts.whiteColor22ExtraBold }}>
                        Question {currentQuestionIndex + 1}
                    </Text>
                    <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding * 2.0 }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            {
                                numberOfQuestions.map((item, index) => (
                                    <View
                                        key={`${index}`}
                                        style={{
                                            backgroundColor: currentQuestionIndex == index
                                                ?
                                                Colors.whiteColor
                                                :
                                                currentQuestionIndex > index
                                                    ?
                                                    Colors.whiteColor
                                                    :
                                                    Colors.extraOffWhiteColor,
                                            marginHorizontal: Sizes.fixPadding - 8.5,
                                            height: 5.0,
                                            borderRadius: Sizes.fixPadding - 8.0,
                                            flex: 1,
                                        }}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default CreateQuizQuestionsScreen