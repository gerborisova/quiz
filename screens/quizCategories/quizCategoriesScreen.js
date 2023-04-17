import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header'

const quizCategoriesList = [
    {
        id: '1',
        color: Colors.pinkColor,
        icon: require('../../assets/images/icons/statistics.png'),
        subject: 'Math and Statistics',
        totalQuiz: 10,
    },
    {
        id: '2',
        color: Colors.tomatoColor,
        icon: require('../../assets/images/icons/science.png'),
        subject: 'Biology and Science',
        totalQuiz: 12,
    },
    {
        id: '3',
        color: Colors.blueColor,
        icon: require('../../assets/images/icons/music.png'),
        subject: 'Art and Music',
        totalQuiz: 9,
    },
    {
        id: '4',
        color: Colors.greenColor,
        icon: require('../../assets/images/icons/math.png'),
        subject: 'Integers',
        totalQuiz: 10,
    },
    {
        id: '5',
        color: Colors.tomatoColor,
        icon: require('../../assets/images/icons/sollar.png'),
        subject: 'Solar System',
        totalQuiz: 9,
    },
    {
        id: '6',
        color: Colors.pinkColor,
        icon: require('../../assets/images/icons/technology.png'),
        subject: 'Technology',
        totalQuiz: 12,
    },
    {
        id: '7',
        color: Colors.blueColor,
        icon: require('../../assets/images/icons/sport.png'),
        subject: 'Sports',
        totalQuiz: 9,
    },
    {
        id: '8',
        color: Colors.greenColor,
        icon: require('../../assets/images/icons/networking.png'),
        subject: 'Networking',
        totalQuiz: 12,
    },
];

const QuizCategoriesScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {cateriesInfo()}
            </View>
        </SafeAreaView>
    )

    function cateriesInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.push('JoinQuiz', { flowFor: 'one' }) }}
                style={styles.liveQuizSubjectsInfoWrapStyle}
            >
                <View style={{ ...styles.liveQuizSubjectIconWrapStyle, }}>
                    <Image
                        source={item.icon}
                        style={{ tintColor: item.color, width: 36.0, height: 36.0, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor18Bold }}>
                        {item.subject}
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding - 6.0 }}>
                        {item.totalQuiz} Quiz
                    </Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={quizCategoriesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function header() {
        return (
            <Header
                headerTitle={'Choose Categories'}
                navigation={navigation}
            />
        )
    }
}

export default QuizCategoriesScreen

const styles = StyleSheet.create({
    liveQuizSubjectIconWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 52.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
    },
    liveQuizSubjectsInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.extraLightPrimaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding + 8.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    }
})