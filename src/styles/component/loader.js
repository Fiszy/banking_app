import {StyleSheet} from 'react-native';

export const loader = StyleSheet.create({
   
    container: 
    {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    light: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },

    dark: {},

    transparent: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },

    main: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
});