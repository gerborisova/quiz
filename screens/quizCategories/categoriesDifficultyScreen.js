import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header'


const CategoriesDifficultyScreen = ({ navigation, route }) => {

    const {selectedTopic}= route.params;
   

const navigate=(item)=>{
    console.log(item);
    navigation.navigate('Quiz', {difficulty:item.subject, selectedTopic:selectedTopic});
}
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
        
        const difficultyList = [{
            id:1,
            subject: 'Easy',
            icon: require('../../assets/images/icons/music.png'),
        },
            {
                id:2,
                subject: 'Moderate',
                icon: require('../../assets/images/icons/music.png'),
            },
                {
                    id:3,
                    subject: 'Hard',
                    icon: require('../../assets/images/icons/music.png'),
                }];
       

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigate(item) }}
                style={styles.liveQuizSubjectsInfoWrapStyle}
            >
                {/* <View style={{ ...styles.liveQuizSubjectIconWrapStyle, }}>
                    <Image 
                        source={item.icon}
                        style={{ tintColor: item.color, width: 36.0, height: 36.0, resizeMode: 'contain' }}
                    /> 
                </View> */}
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor20Bold }}>
                        {item.subject}
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
        backgroundColor: Colors.primaryColor,
    },
    liveQuizSubjectsInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding + 8.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    }
})