import {Platform, StyleSheet} from 'react-native';
import { colors } from '../misc/settings';
import {isIPhoneX} from "../../misc/helpers";

export const earnings = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.select({ios: isIPhoneX() ? 40 : 25, android: 0}),

    },
    withdrawContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        elevation: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    withdrawButton: {
        backgroundColor: '#EDEFF3',
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignSelf: 'flex-end'
    },
    barBottom:{
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        borderTopColor: colors.gray300,
        borderTopWidth: 1,
    }

});
