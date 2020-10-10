import { StyleSheet, Platform } from 'react-native';
import { colors } from '../misc/settings';
const color = require('color');

export const card = StyleSheet.create({
    container: {
        borderRadius: 3,
        borderWidth: 0,
        borderStyle: 'solid',
        overflow: 'hidden',
    },
    elevated: {
        elevation        : Platform.select({ios: 0, android: 2}),
        marginBottom     : Platform.select({ios: 0, android: 4}),
    },
    image: {
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    block: {
        paddingTop: 10,
        paddingBottom: 6,
        paddingHorizontal: 15
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: colors.gray200,
        borderStyle: 'solid',
    },
    darkDivider: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.3)',
        borderStyle: 'solid',
    },
    withBorder: {
        borderWidth: 1
    },
    withBorderV: {
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    withBorderH: {
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    default: {
        backgroundColor: colors.white,
        borderColor: colors.neutral40
    },
    primary: {
        backgroundColor: colors.primary,
        borderColor: color(colors.primary).darken(0.1).hex().toString()
    },
    secondary: {
        backgroundColor: colors.secondaryLight,
        borderColor: color(colors.secondaryLight).darken(0.1).hex().toString()
    },
    success: {
        backgroundColor: colors.success,
        borderColor: color(colors.success).darken(0.1).hex().toString()
    },
    warning: {
        backgroundColor: colors.warning,
        borderColor: color(colors.warning).darken(0.1).hex().toString()
    },
    danger: {
        backgroundColor: colors.danger,
        borderColor: color(colors.danger).darken(0.1).hex().toString()
    },
    light: {
        backgroundColor: colors.light,
        borderColor: color(colors.light).darken(0.1).hex().toString()
    },
    dark: {
        backgroundColor: colors.dark,
        borderColor: color(colors.dark).darken(0.1).hex().toString()
    }
});