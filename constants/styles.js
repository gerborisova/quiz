import { Dimensions } from "react-native"

export const Colors = {
    primaryColor: '#28235c',
    buttonColor:'#ffffff',
    lightPrimaryColor: 'rgba(106, 90, 224, 0.1)',
    extraLightPrimaryColor: 'white',
    whiteColor: '#FFFFFF',
    offWhiteColor: 'rgba(255,255,255,0.5)',
    extraOffWhiteColor: 'rgba(255,255,255,0.3)',
    purpleColor:'#08203e',
    blackColor: '#000000',
    grayColor: '#8A9CBF',
    lightPurple:'#634975',
    lightGrayColor: 'rgba(138, 156, 191, 0.5)',
    redColor: '#FF0000',
    yellowColor: '#f3c402',
    pinkColor: '#F06292',
    tomatoColor: '#E57373',
    blueColor: '#64B5F6',
    greenColor: '#4DB6AC',
    hightLightGreenColor: '#00D209',
}

export const Sizes = {
    fixPadding: 10.0,
}

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

export const Screen = {
    width: screenWidth,
    height: screenHeight,
}

export const Fonts = {

    blackColor16SemiBold: {
        color: Colors.blackColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-SemiBold'
    },

    blackColor18SemiBold: {
        color: Colors.blackColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-SemiBold'
    },

    blackColor16Bold: {
        color: Colors.blackColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-Bold'
    },

    blackColor18Bold: {
        color: Colors.blackColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-Bold'
    },

    blackColor20Bold: {
        color: Colors.blackColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-Bold'
    },

    blackColor20ExtraBold: {
        color: Colors.blackColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    blackColor26ExtraBold: {
        color: Colors.blackColor,
        fontSize: 26.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    grayColor14SemiBold: {
        color: Colors.grayColor,
        fontSize: 14.0,
        fontFamily: 'NunitoSans-SemiBold'
    },

    grayColor16SemiBold: {
        color: Colors.grayColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-SemiBold'
    },
    lightpurple16SemiBold:{
        color: Colors.lightPurple,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-SemiBold'
    },
    grayColor14Bold: {
        color: Colors.grayColor,
        fontSize: 14.0,
        fontFamily: 'NunitoSans-Bold'
    },

    grayColor16Bold: {
        color: Colors.grayColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-Bold'
    },

    grayColor12ExtraBold: {
        color: Colors.grayColor,
        fontSize: 12.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },
    grayColor20ExtraBold: {
        color: Colors.grayColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    whiteColor16SemiBold: {
        color: Colors.whiteColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-SemiBold'
    },

    whiteColor18Bold: {
        color: Colors.whiteColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-Bold'
    },

    whiteColor20Bold: {
        color: Colors.whiteColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-Bold'
    },
    purpleColor20Bold: {
        color: Colors.primaryColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },
    purpleColor18Bold: {
        color: Colors.purpleColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-Bold'
    },

    whiteColor19ExtraBold: {
        color: Colors.whiteColor,
        fontSize: 19.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    whiteColor22ExtraBold: {
        color: Colors.whiteColor,
        fontSize: 22.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },
   purpleColor22ExtraBold: {
        color: Colors.purpleColor,
        fontSize: 22.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },
    yellowColor22ExtraBold: {
        color: Colors.yellowColor,
        fontSize: 22.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },
    yellowColor18Bold: {
        color: Colors.yellowColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-Bold'
    },
    yellowColor20Bold: {
        color: Colors.yellowColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-Bold'
    },
    yellowColor26ExtraBold: {
        color: Colors.whiteColor,
        fontSize: 26.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    whiteColor18Black: {
        color: Colors.whiteColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-Black'
    },

    primaryColor16SemiBold: {
        color: Colors.primaryColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-SemiBold'
    },

    primaryColor18SemiBold: {
        color: Colors.primaryColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-SemiBold'
    },

    primaryColor14Bold: {
        color: Colors.primaryColor,
        fontSize: 14.0,
        fontFamily: 'NunitoSans-Bold'
    },

    primaryColor16Bold: {
        color: Colors.primaryColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-Bold'
    },

    primaryColor18Bold: {
        color: Colors.primaryColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-Bold'
    },

    primaryColor20Bold: {
        color: Colors.primaryColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-Bold'
    },

    primaryColor14ExtraBold: {
        color: Colors.primaryColor,
        fontSize: 14.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    primaryColor20ExtraBold: {
        color: Colors.primaryColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    primaryColor24ExtraBold: {
        color: Colors.primaryColor,
        fontSize: 24.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    primaryColor36Black: {
        color: Colors.primaryColor,
        fontSize: 36.0,
        fontFamily: 'NunitoSans-Black'
    },

    pinkColor18ExtraBold: {
        color: Colors.pinkColor,
        fontSize: 18.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    blueColor16Bold: {
        color: Colors.blueColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-Bold'
    },

    blueColor20ExtraBold: {
        color: Colors.blueColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    greenColor16Bold: {
        color: Colors.greenColor,
        fontSize: 16.0,
        fontFamily: 'NunitoSans-Bold'
    },

    greenColor20ExtraBold: {
        color: Colors.greenColor,
        fontSize: 20.0,
        fontFamily: 'NunitoSans-ExtraBold'
    },

    blackColor48bebas: {
        color: Colors.blackColor,
        fontSize: 48.0,
        fontFamily: 'BebasNeue-Regular'
    },

    whiteColor30Bebas: {
        color: Colors.whiteColor,
        fontSize: 30.0,
        fontFamily: 'BebasNeue-Regular'
    },

    whiteColor36Bebas: {
        color: Colors.whiteColor,
        fontSize: 36.0,
        fontFamily: 'BebasNeue-Regular'
    }
}

export const CommonStyles = {
    nextButton:{
        backgroundColor: Colors.buttonColor,
        display:'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        width:'90%',
        marginTop:'20%',
        padding: '4%',
        marginHorizontal: Sizes.fixPadding * 4.0,
        elevation: 2.0,
        shadowColor: Colors.primaryColor
    },
    initialButton: {
        backgroundColor: '#f3c402',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width:'70%',
        marginTop:'20%',
        padding: '4%',
        marginHorizontal: Sizes.fixPadding * 4.0,
        elevation: 2.0,
        shadowColor: Colors.primaryColor
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        padding: Sizes.fixPadding * 1.6,
        marginHorizontal: Sizes.fixPadding * 4.0,
        elevation: 2.0,
        shadowColor: Colors.primaryColor
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding * 3.0,
    },
    authTextFieldWrapStyle: {
        marginTop: Sizes.fixPadding,
        backgroundColor: Colors.extraLightPrimaryColor,
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding + 2.0,
        paddingVertical: Sizes.fixPadding * 1.8,
    }
}