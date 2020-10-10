import { StyleSheet } from 'react-native';
import { colors } from '../misc/settings';
import {color} from "react-native-reanimated";

export const text = StyleSheet.create({

    // color
    primary  : { color: colors.primary },
    secondary: { color: colors.secondary },
    white    : { color: colors.white },
    black    : { color: colors.black },
    gray     : { color: colors.gray200 },
    dark     : { color: colors.dark },
    danger   : { color: colors.danger },
    success  : { color: colors.success },
    gray100  : { color: colors.gray100 },
    gray200  : { color: colors.gray200 },
    gray300  : { color: colors.gray300 },
    gray400  : { color: colors.gray400 },
    gray500  : { color: colors.gray500 },
    gray600  : { color: colors.gray600 },
    gray700  : { color: colors.gray700 },
    gray800  : { color: colors.gray800 },
    gray900  : { color: colors.gray900 },
    description : {color: colors.description},
    subText : {color: colors.subText},

    // weight
    regular       : { fontFamily: 'Muli-Regular' },
    italic        : { fontFamily: 'Muli-Italic' },
    blackF         : { fontFamily: 'Muli-Black' },
    blackItalic   : { fontFamily: 'Muli-BlackItalic' },
    bold          : { fontFamily: 'Muli-Bold' },
    boldItlic     : { fontFamily: 'Muli-BoldItalic' },
    extraBold     : { fontFamily: 'Muli-ExtraBold' },
    extraBoldItlic: { fontFamily: 'Muli-ExtraBoldItalic' },
    light         : { fontFamily: 'Muli-Light' },
    lightItlic    : { fontFamily: 'Muli-LightItalic' },
    semiBold      : { fontFamily: 'Muli-SemiBold' },
    semiBoldItlic : { fontFamily: 'Muli-SemiBoldItalic' },
    boldFontWeight : { fontWeight: 'bold'},

    // alignment
    center : { textAlign: 'center' },
    left   : { textAlign: 'left' },
    right  : { textAlign: 'right' },
    justify: { textAlign: 'justify' },

    // header fonts
    h1: { fontSize: 32 },
    h2x: { fontSize: 26 },
    h2: { fontSize: 24 },
    h3: { fontSize: 18 },
    h4: { fontSize: 16 },
    h5: { fontSize: 13 },
    h6: { fontSize: 10 },
    sm: { fontSize: 8  },
    h4x: { fontSize: 17 },
    hSub: { fontSize: 15 },
    hHead: { fontSize: 21 },
    h_big: { fontSize: 42 },


    underline: { textDecorationLine:'underline' },
    capitalize: { textTransform: 'capitalize'},
    textArea: {
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: colors.secondary,
        height: 100,
        borderRadius: 5,
        borderStyle: 'solid',
        borderRightWidth: 1.5,
        width:'100%',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 90,
        fontSize: 14,
        color: '#333',
        padding:10,
        width:'100%',
    },
});
