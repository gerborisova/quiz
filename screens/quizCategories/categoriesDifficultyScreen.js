import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header'

const difficultyList = [
    {
        id: '1',
        color: Colors.pinkColor,
        icon: require('../../assets/images/icons/statistics.png'),
        subject: 'Easy',
        totalQuiz: 10,
    },
    {
        id: '2',
        color: Colors.tomatoColor,
        icon: require('../../assets/images/icons/science.png'),
        subject: 'Intermediate',
        totalQuiz: 12,
    },
    {
        id: '3',
        color: Colors.blueColor,
        icon: require('../../assets/images/icons/music.png'),
        subject: 'Hard',
        totalQuiz: 9,
    }
];

const CategoriesDifficultyScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
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
                onPress={() => { navigation.push('Quiz', { flowFor: 'one' }) }}
                style={styles.liveQuizSubjectsInfoWrapStyle}
            >
                <View style={{ ...styles.liveQuizSubjectIconWrapStyle, }}>
                    <Image
                        source={item.icon}
                        style={{ tintColor: item.color, width: 36.0, height: 36.0, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor18Bold }}>
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
                data={difficultyList}
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

export default CategoriesDifficultyScreen;

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