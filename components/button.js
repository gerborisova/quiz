import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonStyles, Fonts } from '../constants/styles'

const Button = ({ onPress, btnText, styles }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ ...CommonStyles.buttonStyle, ...styles }}
        >
            <Text style={{ ...Fonts.whiteColor20Bold }}>
                {btnText}
            </Text>
        </TouchableOpacity>
    )
}

export default Button