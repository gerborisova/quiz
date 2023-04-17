import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import Header from '../../components/header';
import { MaterialIcons } from '@expo/vector-icons';

const faqsList = [
    {
        id: '1',
        question: 'How to carete account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: true,
    },
    {
        id: '2',
        question: 'How to play?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '3',
        question: 'How share refere code?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '4',
        question: 'Can i exit during the quiz?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '5',
        question: 'How to play with random users?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '6',
        question: 'How to play?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '7',
        question: 'How share refere code?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '8',
        question: 'Can i exit during the quiz?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
    {
        id: '9',
        question: 'How to play with random users?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Eget vitae at est mauris, purus euismod tellusfaucibus.',
        expanded: false,
    },
];

const FaqsScreen = ({ navigation }) => {

    const [faqs, setFaqs] = useState(faqsList);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {faqsInfo()}
            </View>
        </SafeAreaView>
    )

    function changeFaqs({ id }) {
        const copyFaqs = faqs;
        const newFaqs = copyFaqs.map((item) => {
            if (item.id == id) {
                return { ...item, expanded: !item.expanded }
            }
            else {
                return item
            }
        })
        setFaqs(newFaqs);
    }

    function faqsInfo() {
        const renderItem = ({ item, index }) => (
            <View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => { changeFaqs({ id: item.id }) }}
                    style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text numberOfLines={1} style={{ flex: 1, ...Fonts.blackColor18SemiBold }}>
                            {index + 1}. {item.question}
                        </Text>
                        <MaterialIcons
                            name={item.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                            size={24}
                            color={Colors.grayColor}
                            style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                    {
                        item.expanded
                            ?
                            <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.grayColor16SemiBold }}>
                                {item.answer}
                            </Text>
                            :
                            null
                    }
                </TouchableOpacity>
                <View style={styles.dividerStyle} />
            </View>
        )
        return (
            <FlatList
                data={faqs}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 3.0 }}
            />
        )
    }

    function header() {
        return (
            <Header
                headerTitle={'FAQs'}
                navigation={navigation}
            />
        )
    }
}

export default FaqsScreen

const styles = StyleSheet.create({
    dividerStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding * 2.5,
        height: 1.0,
        backgroundColor: Colors.lightGrayColor,
    }
})