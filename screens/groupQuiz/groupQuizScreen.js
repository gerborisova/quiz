import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Button from '../../components/button';

const questionsList = [
    {
        id: '1',
        question: 'Which Economist divided Economics in two branches of micro and macro on the basis of economic activity?',
        options: [
            'Marshall',
            'Ricardo',
            'Ragnar Frish',
            'None of these'
        ],
        correctAnswer: 'None of these',
        userAnswer: '',
    },
    {
        id: '2',
        question: 'Which of the following is studied under Micro Economics?',
        options: [
            'Individual unit',
            'Economic Aggregate',
            'National Income',
            'None of these'
        ],
        correctAnswer: 'None of these',
        userAnswer: '',
    },
    {
        id: '3',
        question: '‘Micros’, which means ‘Small’ belongs to:',
        options: [
            'Arabian word',
            'Greek word',
            'German word',
            'English worde'
        ],
        correctAnswer: 'Greek word',
        userAnswer: '',
    },
    {
        id: '4',
        question: 'Which of the following statement is true?',
        options: [
            'Human wants are infinite',
            'Resources are limited',
            'Scarcity problem gives birth',
            'All of these'
        ],
        correctAnswer: 'Scarcity problem gives birth',
        userAnswer: '',
    },
    {
        id: '5',
        question: 'Which is a central problem of an economy?',
        options: [
            'Allocation of Resources',
            'Optimum Utilisation of Resources',
            'Economic Development',
            'All of these'
        ],
        correctAnswer: 'All of these',
        userAnswer: '',
    },
    {
        id: '6',
        question: 'Which of the following Is a type of economic activities?',
        options: [
            'Production',
            'Consumption',
            'Exchange and Investment',
            'All of these'
        ],
        correctAnswer: 'All of these',
        userAnswer: '',
    },
    {
        id: '7',
        question: 'To which factor, economic problem is basically related to:',
        options: [
            'Choice',
            'Consumer’s Selection',
            'Firm Selection',
            'None of these'
        ],
        correctAnswer: 'Choice',
        userAnswer: '',
    },
    {
        id: '8',
        question: 'Economy may be classified as:',
        options: [
            'Capitalist',
            'Socialist',
            'Mixed',
            'All of these'
        ],
        correctAnswer: 'All of these',
        userAnswer: '',
    },
    {
        id: '9',
        question: 'Which economy has a co-existence of private and public sectors?',
        options: [
            'Capitalist',
            'Socialist',
            'Mixed',
            'All of these'
        ],
        correctAnswer: 'Mixed',
        userAnswer: '',
    },
    {
        id: '10',
        question: 'A computer assisted method for the recording and analyzing of existing or hypothetical systems...',
        options: [
            'Data transmission',
            'Data flow',
            'Data capture',
            'None of the above'
        ],
        correctAnswer: 'Data flow',
        userAnswer: '',
    },
    {
        id: '11',
        question: 'Any type of storage that is used for holding information between steps in its processing is',
        options: [
            'CPU',
            'Primary storage',
            'Intermediate storage',
            'Internal storage'
        ],
        correctAnswer: 'Intermediate storage',
        userAnswer: '',
    },
    {
        id: '12',
        question: 'Production Possibility Curve is:',
        options: [
            'Concave to the axis',
            'Convex to the axis',
            'Parallel to the axis',
            'Vertical to the axis'
        ],
        correctAnswer: 'Concave to the axis',
        userAnswer: '',
    },
    {
        id: '13',
        question: 'Mention the name of the curve which shows economic problem:',
        options: [
            'Production Curve',
            'Demand Curve',
            'Indifference Curve',
            'Production Possibility Curve'
        ],
        correctAnswer: 'Production Possibility Curve',
        userAnswer: '',
    },
    {
        id: '14',
        question: 'Which of the following is studied under Macro Economics?',
        options: [
            'National Income',
            'Full. Employment',
            'Total Production',
            'All of these'
        ],
        correctAnswer: 'All of these',
        userAnswer: '',
    },
    {
        id: '15',
        question: 'A program component that allows structuring of a program in an unusual way is known as',
        options: [
            'Correlation',
            'Coroutine',
            'Diagonalization',
            'Quene'
        ],
        correctAnswer: 'Correlation',
        userAnswer: '',
    },
];

const GroupQuizScreen = ({ navigation }) => {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [questions, setquestions] = useState(questionsList);

    useEffect(() => {
        setTimeout(() => {
            if (second == 59) {
                setMinute(minute + 1)
                setSecond(0);
            }
            else {
                setSecond(second + 1)
            }
        }, 1000);
        return () => {
            clearTimeout()
        }
    }, [second]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                    {questionWithOptions()}
                    {nextButton()}
                    {currentQuestionIndex == questions.length - 1 ? null : exitText()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function exitText() {
        return (
            <Text onPress={() => { navigation.navigate('Home') }} style={{ margin: Sizes.fixPadding * 2.0, textAlign: 'center', ...Fonts.primaryColor20Bold }}>
                Exit
            </Text>
        )
    }

    function nextButton() {
        return (
            <Button
                onPress={() => { currentQuestionIndex == questions.length - 1 ? navigation.push('GroupQuizResult') : setcurrentQuestionIndex(currentQuestionIndex + 1) }}
                btnText={currentQuestionIndex == questions.length - 1 ? 'Finish' : 'Next'}
                styles={{ marginTop: Sizes.fixPadding * 5.0, }}
            />
        )
    }

    function updateQuestions({ id, userAnswer }) {
        const copyQuestions = questions;
        const newQuestions = copyQuestions.map((item) => {
            if (item.id == id) {
                return { ...item, userAnswer: userAnswer }
            }
            else {
                return item
            }
        });
        setquestions(newQuestions);
    }

    function stylingSort({ item }) {
        return questions[currentQuestionIndex].userAnswer
            ?
            (questions[currentQuestionIndex].userAnswer == questions[currentQuestionIndex].correctAnswer)
                ?
                questions[currentQuestionIndex].userAnswer == item
                    ?
                    Colors.hightLightGreenColor
                    :
                    Colors.extraLightPrimaryColor
                :
                questions[currentQuestionIndex].userAnswer == item
                    ?
                    Colors.redColor
                    :
                    questions[currentQuestionIndex].correctAnswer == item
                        ?
                        Colors.hightLightGreenColor
                        :
                        Colors.extraLightPrimaryColor
            :
            Colors.extraLightPrimaryColor
    }

    function questionWithOptions() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 3.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.grayColor14Bold }}>
                    QUESTION {currentQuestionIndex + 1} OF {questionsList.length}
                </Text>
                <Text style={{ ...Fonts.blackColor20Bold, marginTop: Sizes.fixPadding - 2.0 }}>
                    {questions[currentQuestionIndex].question}
                </Text>
                {
                    questions[currentQuestionIndex].options.map((item, index) => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                questions[currentQuestionIndex].userAnswer
                                    ?
                                    null
                                    :
                                    updateQuestions({ id: questions[currentQuestionIndex].id, userAnswer: item })
                            }}
                            key={`${index}`}
                            style={{ ...styles.optionWrapStyle, borderColor: stylingSort({ item: item }), }}
                        >
                            <Text
                                style={{
                                    flex: 1, ...Fonts.grayColor16SemiBold,
                                    color: stylingSort({ item: item }) == Colors.extraLightPrimaryColor ? Colors.grayColor : stylingSort({ item: item })
                                }}
                            >
                                {item}
                            </Text>
                            {
                                stylingSort({ item: item }) == Colors.extraLightPrimaryColor ?
                                    null
                                    :
                                    <View style={{ ...styles.correctWrongIndicatorStyle, borderColor: stylingSort({ item: item }), }}>
                                        {
                                            stylingSort({ item: item }) == Colors.hightLightGreenColor
                                                ?
                                                <MaterialIcons name="done" size={15} color={stylingSort({ item: item })} />
                                                :
                                                <MaterialIcons name="close" size={15} color={stylingSort({ item: item })} />
                                        }
                                    </View>
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    function header() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, padding: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ flex: 1, ...Fonts.whiteColor22ExtraBold }}>
                        Question {currentQuestionIndex + 1}
                    </Text>
                    <View style={styles.timeInfoWrapStyle}>
                        <MaterialCommunityIcons name="alarm" size={20} color={Colors.whiteColor} />
                        <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.whiteColor16SemiBold }}>
                            {minute.toString().length == 1 ? `0${minute}` : minute}:{second.toString().length == 1 ? `0${second}` : second}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: Sizes.fixPadding * 2.0 }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        {
                            questions.map((item, index) => (
                                <View
                                    key={`${item.id}`}
                                    style={{
                                        backgroundColor: currentQuestionIndex == index
                                            ?
                                            Colors.whiteColor
                                            :
                                            item.userAnswer
                                                ?
                                                item.userAnswer == item.correctAnswer
                                                    ?
                                                    Colors.hightLightGreenColor
                                                    :
                                                    Colors.redColor
                                                :
                                                currentQuestionIndex > index
                                                    ?
                                                    Colors.redColor
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
                {userInfo()}
            </View>
        )
    }

    function userInfo() {
        const count = questions.filter((item) => item.correctAnswer == item.userAnswer)
        return (
            <View style={styles.userInfoWrapStyle}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ ...styles.userImageWrapStyle, borderColor: Colors.blueColor, }}>
                        <Image
                            source={require('../../assets/images/momojies/momoji1.png')}
                            style={{ width: 35.0, height: 35.0, resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 3.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor18Bold }}>
                            You
                        </Text>
                        <Text style={{ ...Fonts.blueColor16Bold }}>
                            {(count.length).toString().length == 1 ? `0${count.length}` : count.length}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ alignItems: 'flex-end', flex: 1, marginRight: Sizes.fixPadding + 3.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor18Bold }}>
                            Michael
                        </Text>
                        <Text style={{ ...Fonts.greenColor16Bold }}>
                            02
                        </Text>
                    </View>
                    <View style={{ ...styles.userImageWrapStyle, borderColor: Colors.greenColor, }}>
                        <Image
                            source={require('../../assets/images/momojies/momoji9.png')}
                            style={{ width: 35.0, height: 35.0, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default GroupQuizScreen

const styles = StyleSheet.create({
    correctWrongIndicatorStyle: {
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
    },
    optionWrapStyle: {
        backgroundColor: Colors.extraLightPrimaryColor,
        paddingVertical: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 2.0,
        marginTop: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeInfoWrapStyle: {
        borderColor: Colors.whiteColor,
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding
    },
    userImageWrapStyle: {
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        borderWidth: 3.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        padding: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding * 2.0,
    }
})