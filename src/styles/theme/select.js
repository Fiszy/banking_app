import { StyleSheet, Platform } from 'react-native';
import { colors } from '../misc/settings';
const color = require('color');

export const select = StyleSheet.create({
    container: Object.assign({
        marginBottom: 15
    }, Platform.select({android: {

    }, ios: {
        backgroundColor: "#ffffff",
        paddingVertical: 15
    }})),

    field: {
        paddingBottom  : 10,
        marginTop  : 10,
        backgroundColor  : 'rgba(0,0,0,0)',
        paddingHorizontal: 0,
        borderBottomWidth: 1
    },

    label:{
        color       : colors.white,
        opacity     : 0.7,
        fontSize    : 12,
        textAlign   : 'left',
        fontFamily  : 'Muli-Regular',
        marginBottom: 5
    },

    labelActive: {
        opacity: 1
    },

    fieldContent:{
        color       : colors.white,
        opacity     : 0.7,
    },

    fieldContentActive: {
        opacity: 1,
        fontSize: 16
    },

    // border colors colors
    default: { 
        borderBottomColor: color(colors.white).alpha(0.5).darken(0.1).hsl().string(),
    },
    primary: {
        borderBottomColor: color(colors.primary).alpha(0.5).lighten(0.1).hsl().string(),
    },
    success: { 
        borderBottomColor: color(colors.success).alpha(0.5).lighten(0.1).hsl().string(),
    },
    warning: {
        borderBottomColor: color(colors.warning).alpha(0.5).lighten(0.1).hsl().string(),
    },
    danger : {
        borderBottomColor: color(colors.danger).alpha(0.5).lighten(0.1).hsl().string(),
    },
    solid : {
        borderBottomWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0)',
        backgroundColor: color.white
    },

    // active borders color
    defaultActive: { 
        borderBottomColor: colors.white
    },
    primaryActive: { 
        borderBottomColor: colors.primary
    },
    successActive: {
        borderBottomColor: colors.success
    },
    warningActive: {
        borderBottomColor: colors.warning
    },
    dangerActive : {
        borderBottomColor: colors.danger
    },
    solidActive : {
        borderBottomWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0)',
        backgroundColor: color.white
    },

    // label colors
    labelDefault: { },
    labelPrimary: { color: colors.primary },
    labelSuccess: { color: colors.success },
    labelWarning: { color: colors.warning },
    labelDanger : { color: colors.danger  },

    // field content colors
    fieldContentDefault: { },
    fieldContentPrimary: { },
    fieldContentSuccess: { },
    fieldContentWarning: { },
    fieldContentDanger : { },
    fieldContentSolid : {
        borderBottomWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0)',
        color: colors.gray500,
        backgroundColor: color.white
    },
    fieldContentSolidActive : {
        color: colors.gray900,
    },

});