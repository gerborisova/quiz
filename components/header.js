import { Text, View } from 'react-native'
import React from 'react'
import { CommonStyles, Fonts, Sizes, Colors } from '../constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({ headerTitle, navigation }) => {
    return (
        <View style={CommonStyles.headerStyle}>
            <MaterialCommunityIcons
                name="keyboard-backspace"
                size={28}
                color={Colors.whiteColor}
                onPress={() => { navigation.pop() }}
            />
            <Text style={{ flex: 1, ...Fonts.whiteColor22ExtraBold, marginLeft: Sizes.fixPadding * 2.0 }}>
                {headerTitle}
            </Text>
        </View>
    )
}

export default Header