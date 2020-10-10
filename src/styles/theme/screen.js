import { StyleSheet } from 'react-native';
import { colors } from '../misc/settings';

export const screen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray100
    },
    containerWhite: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 64,
        paddingBottom: 60
    },
    containerFullScreen: {
        flex: 1,
        backgroundColor: colors.gray100
    },
    containerFullScreenWhite: {
        flex: 1,
        backgroundColor: colors.white
    }
});