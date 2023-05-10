import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Button from '../../components/button';
  
const QuizScreen = ({ navigation,route }) => {
const {difficulty}= route.params;
const {selectedTopic}= route.params;
const [questionsList, setQuestionsList]=useState([]);
const [userAnswer, setUserAnswer]=useState('')
const [userAnswers, setUserAnswers]=useState([])
const [disabled,setDisabled]= useState();
const [correct,setCorrect]=useState('');
const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
const [numberOfCorrect,setNumberOfCorrect]=useState(0);
const [displayNextButton, setDisplayNextButton]= useState('none');
 
    useEffect(() => {
    setDisabled(false);
    setUserAnswer('');
       fetch(`https://quiz-app-api.herokuapp.com/v1/questions?categoryId=${selectedTopic.toLowerCase()}&difficulty=${difficulty.toLowerCase()}&size=10`)
       .then(response => response.json())
        .then(response => setQuestionsList(response))
            .catch (error => {
                console.error(error);
              })     
     }, []);
   
    useEffect(() => {
        setDisabled(false);
        setDisplayNextButton('none');
     }, [currentQuestionIndex]);
     
     const validateAnswer=(()=>{
         if(userAnswer!='' && userAnswer === correct){
             console.log('here');
            setNumberOfCorrect(numberOfCorrect+1);
         }
     })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor}}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{  paddingBottom: Sizes.fixPadding * 2.0 }}>
                    {questionWithOptions()}
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexDirection:'row', width:'100%', justifyContent:'space-between', margin:0 }}>
                    {currentQuestionIndex == 0 ? backInactive() : back()}
                    {nextButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function back() {
        return (
            <Text onPress={() => { currentQuestionIndex == 0 ? navigation.push('QuizCategories') : setcurrentQuestionIndex(currentQuestionIndex - 1) }} style={{ margin: Sizes.fixPadding * 2.0, textAlign: 'center', ...Fonts.grayColor20ExtraBold }}>
                Back
            </Text>
        )
    }
    function backInactive() {
        return (
            <Text>
                
            </Text>
        )
    }

    function nextButton() {
        return (
            <TouchableOpacity
                onPress={() => {                        validateAnswer();
                    currentQuestionIndex == questionsList.length - 1 ? setTimeout(() => {
                        navigation.navigate('QuizResult', {correct:numberOfCorrect,all:questionsList.length})},2000) : setcurrentQuestionIndex(currentQuestionIndex + 1) }}
                style={{margin:0, paddingRight:0, display:'flex', margin: Sizes.fixPadding * 2.0, textAlign: 'center'}}
                >
                    {currentQuestionIndex == questionsList.length - 1 ?
                    <Text style={{ ...Fonts.whiteColor20Bold }}>Finish</Text>  
                    :

                    <Text style={{ ...Fonts.whiteColor20Bold, display:displayNextButton }}>Next</Text>
    }
                </TouchableOpacity>
        )
    }

    function closeIcon() {
        return (
            <MaterialIcons
                name="close"
                size={24}
                color={Colors.whiteColor}
                style={{ position: 'absolute', top: 20.0, left: 350.0, zIndex: 1 }}
                onPress={() => { navigation.navigate('QuizCategories') }}
            />
        )
    }

    function stylingSort(item) {
        return (userAnswer !='')
            ?
            (userAnswer === correct)
                ?
                userAnswer == item.text
                    ?
                    Colors.hightLightGreenColor
                    :
                    Colors.extraLightPrimaryColor
                :
                userAnswer == item.text
                    ?
                    Colors.redColor
                    :
                    correct == item.text
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
                <Text style={{ ...Fonts.whiteColor18Bold, marginTop: Sizes.fixPadding - 2.0 }}>
                    {questionsList[currentQuestionIndex] ? questionsList[currentQuestionIndex].q : 'text'}
                </Text>
                { questionsList[currentQuestionIndex] ? 
                questionsList[currentQuestionIndex].answers.map((item,index) => (
                            <TouchableOpacity
                            disabled={disabled}
                    activeOpacity={0.5}
                    key={`${index}`}
                    onPress={() => {
                        setUserAnswer(item.text);
                        setCorrect(questionsList[currentQuestionIndex].correctAnswer)
                        setUserAnswers([...userAnswers, item.text]);
                        setDisabled(true);
                        setDisplayNextButton('flex');

                    }}
                    style={{ ...styles.optionWrapStyle, borderColor: stylingSort(item) }}
                >
                    
                    <Text
                        style={{
                            flex: 1, ...Fonts.whiteColor16SemiBold,
                            color: stylingSort(item) == Colors.extraLightPrimaryColor ? Colors.grayColor : stylingSort(item)
                        }}
                    >
                    {item.text}
                    </Text>
                    {
                                stylingSort(item) == Colors.extraLightPrimaryColor ?
                                    null
                                    :
                                    <View style={{ ...styles.correctWrongIndicatorStyle, borderColor: stylingSort(item), }}>
                                        {
                                            stylingSort(item) == Colors.hightLightGreenColor
                                                ?
                                                <MaterialIcons name="done" size={15} color={stylingSort(item)} />
                                                :
                                                <MaterialIcons name="close" size={15} color={stylingSort(item)} />
                                        }
                                    </View>
                            }
                    </TouchableOpacity>
                )) : null }
            </View>
        )
    }

    function header() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor, padding: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ flex: 1, ...Fonts.yellowColor22ExtraBold }}>
                        Question {currentQuestionIndex + 1}
                    </Text>
                    {/* <View style={styles.timeInfoWrapStyle}>
                        <MaterialCommunityIcons name="alarm" size={20} color={Colors.whiteColor} />
                        <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.whiteColor16SemiBold }}>
                            {minute.toString().length == 1 ? `0${minute}` : minute}:{second.toString().length == 1 ? `0${second}` : second}
                        </Text>
                    </View> */}
                </View>
                {closeIcon()}
                <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding * 2.0 }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        {
                            questionsList.map((item, index) => (
                                <View
                                    key={`${item._id}`}
                                    style={{backgroundColor:
                                        currentQuestionIndex == index
                                        ?
                                        Colors.whiteColor
                                        :
                                        userAnswers[index]
                                            ?
                                            userAnswers[index]
                                            == questionsList[index].correctAnswer
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
            </View>
        )
    }
}

export default QuizScreen

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
    }
})