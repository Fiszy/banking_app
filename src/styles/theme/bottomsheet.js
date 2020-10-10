import {StyleSheet} from 'react-native';
import {colors} from "../misc/settings";

export const bottomSheet = StyleSheet.create({
    // styles go here
    container: {
        backgroundColor:colors.white,
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    header: {
        backgroundColor: '#fff',
        shadowColor: '#000000',
        paddingTop: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    status:{

        justifyContent:'center',
        alignSelf:'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
    },
    spaceItem :{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lightButton:{
        backgroundColor:'#EDEFF3',
        justifyContent:'center',
        alignItems: 'center',
        padding:20,
        borderRadius: 5,

    },
    darkButton:{
        backgroundColor:colors.secondary,
        justifyContent:'center',
        alignItems: 'center',
        padding:15,
        borderRadius: 5,
    },
    cancelButton:{

        justifyContent:'center',
        alignItems: 'center',
        padding:20,
        borderRadius: 5,

    }
});
