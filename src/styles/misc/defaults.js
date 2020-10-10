import { StyleSheet, Platform } from 'react-native';
import { colors, borderRadius} from './settings';
const colorfn = require('color');

export const misc = StyleSheet.create({
    spanned: {
        flex: 1
    },

    scene:
    {
        flex: 10,
        backgroundColor: colors.white,
        paddingBottom: 20
    },

    section:
    {
        flex: 1,
        // backgroundColor: colors.white,

        marginLeft: 15,
        marginRight: 15,
        marginTop: 0,
        borderRadius: borderRadius
    },

    pullRight: {
        alignSelf: 'flex-end'
    },

    pullLeft: {
        alignSelf: 'flex-start'
    },

    pullCenter: {
        alignSelf: 'center'
    },

    // text color
    bgPrimary: { backgroundColor: colors.primary },
    bgPrimaryLight: { backgroundColor: colors.primaryLight },
    bgWhite: { backgroundColor: colors.white },
    bgLight: { backgroundColor: colors.light },
    bgDark: { backgroundColor: colors.dark },
    bgDanger: { backgroundColor: colors.danger },
    bgSuccess: { backgroundColor: colors.success },
    bgGray: { backgroundColor: colors.gray },
    bgGray100: { backgroundColor: colors.gray100 },
    bgGray200: { backgroundColor: colors.gray200 },
    bgGray300: { backgroundColor: colors.gray300 },
    bgGray400: { backgroundColor: colors.gray400 },
    bgGray500: { backgroundColor: colors.gray500 },
    bgGray600: { backgroundColor: colors.gray600 },
    bgGray700: { backgroundColor: colors.gray700 },
    bgGray800: { backgroundColor: colors.gray800 },
    bgGray900: { backgroundColor: colors.gray900 },

    // border color
    borderPrimary: { borderWidth: 1, borderColor: colors.primary },
    borderPrimaryLight: { borderWidth: 1, borderColor: colors.primaryLight },
    borderWhite: { borderWidth: 1, borderColor: colors.white },
    borderLight: { borderWidth: 1, borderColor: colors.light },
    borderGray: { borderWidth: 1, borderColor: colors.gray },
    borderDark: { borderWidth: 1, borderColor: colors.dark },
    borderDanger: { borderWidth: 1, borderColor: colors.danger },
    borderSuccess: { borderWidth: 1, borderColor: colors.success },

    // form
    formGroup:
    {
        marginBottom: 20,
        paddingRight: 10,
        paddingLeft: 10
    },
    formLabel:
    {
        fontWeight: '500',
        color: '#666666',
        fontSize: 16,
        marginBottom: 2
    },
    formControl:
    {
        backgroundColor: colorfn(colors.gray).darken(0.01),
        paddingVertical: Platform.select({ios: 12, android: 5}),
        paddingHorizontal: Platform.select({ios: 10, android: 5}),
        borderRadius: borderRadius
    },
    button:
    {
        backgroundColor: colors.primary,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: borderRadius
    },
    buttonWhite: { backgroundColor: colors.white },
    buttonLight: { backgroundColor: colors.light },
    buttonGray: { backgroundColor: colors.gray },
    buttonPrimaryLight: { backgroundColor: colors.primaryLight },
    buttonDark: { backgroundColor: colors.dark },
    buttonDanger: { backgroundColor: colors.danger },
    buttonSuccess: { backgroundColor: colors.success },
    buttonDisabled: {opacity: 0.7},

    // position
    left: { left: 0 },
    top: { top: 0 },
    bottom: { bottom: 0 },
    right: { right: 0 },

    // tab bar styles
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: colors.light,
        opacity        : 1
    },

    row: {
        flexDirection: 'row'
    },

    borderRadius: {
        borderRadius: 3
    },

    dropShadow: {
        shadowOffset: {width: -1, height: 2},
        shadowColor: '#666666',
        shadowOpacity: 0.1
    },

    panelBody: {
        borderTopWidth: 1,
        borderTopColor: colors.gray,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        backgroundColor: colors.white
    },
    alignSelfCenter:{
        alignSelf: 'center'
    }
});

export const bg = StyleSheet.create({
    primary  : { backgroundColor: colors.primary },
    secondary: { backgroundColor: colors.secondary },
    white    : { backgroundColor: colors.white },
    black    : { backgroundColor: colors.black },
    gray     : { backgroundColor: colors.gray200 },
    dark     : { backgroundColor: colors.dark },
    danger   : { backgroundColor: colors.danger },
    success  : { backgroundColor: colors.success },
    gray100  : { backgroundColor: colors.gray100 },
    gray200  : { backgroundColor: colors.gray200 },
    gray300  : { backgroundColor: colors.gray300 },
    gray400  : { backgroundColor: colors.gray400 },
    gray500  : { backgroundColor: colors.gray500 },
    gray600  : { backgroundColor: colors.gray600 },
    gray700  : { backgroundColor: colors.gray700 },
    gray800  : { backgroundColor: colors.gray800 },
    gray900  : { backgroundColor: colors.gray900 },
})

export const pt = (amount) => { return {paddingTop: amount}; }
export const pb = (amount) => { return {paddingBottom: amount}; }
export const pl = (amount) => { return {paddingLeft: amount}; }
export const pr = (amount) => { return {paddingRight: amount}; }
export const pv = (amount) => { return {paddingVertical: amount}; }
export const ph = (amount) => { return {paddingHorizontal: amount}; }

export const mt = (amount) => { return {marginTop: amount}; }
export const mb = (amount) => { return {marginBottom: amount}; }
export const ml = (amount) => { return {marginLeft: amount}; }
export const mr = (amount) => { return {marginRight: amount}; }
export const mv = (amount) => { return {marginVertical: amount}; }
export const mh = (amount) => { return {marginHorizontal: amount}; }
