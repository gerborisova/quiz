import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header'

    
const QuizCategoriesScreen = ({ navigation }) => {

    const [categories, setCategoriesList]= useState([]);

    useEffect(() => {
        fetch(`https://quiz-app-api.herokuapp.com/v1/categories`)
        .then(response => response.json())
         .then(response => setCategoriesList(response))
             .catch (error => {
                 console.error(error);
               })     
      }, []);

      const imageGenerator=(category)=>{
        switch (category) {
            case 'General Knowledge':
                return require('../../assets/images/icons/general.png');
            case 'History':
                return require('../../assets/images/icons/history.png');
            case 'Geography':
                return require('../../assets/images/icons/geography.png');
            case 'Nature':
                return require('../../assets/images/icons/nature.png');
            case 'Art':
                return require('../../assets/images/icons/art.png');

            default:
                return require('../../assets/images/icons/general.png');

        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor='black' />
            <View style={{ flex: 1 }}>
                {header()}
                {cateriesInfo()}
            </View>
        </SafeAreaView>
    )

    function cateriesInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { navigation.navigate('CategoriesDifficulty', { selectedTopic: item.name}) }}
                style={styles.liveQuizSubjectsInfoWrapStyle}
            > 
                <View style={{ ...styles.liveQuizSubjectIconWrapStyle, }}>
                    <Image
                        source={imageGenerator(item.name)}
                        style={{ width: 100.0, height: 70.0, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor20Bold, marginLeft:10 }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={categories}
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
                styles={{backgroundColor:'#ffffff'}}
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
    },
    bottomBanner: {
        position: "absolute",
        bottom: 0
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
})