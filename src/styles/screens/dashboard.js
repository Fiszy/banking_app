import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../misc/settings';
const {height} = Dimensions.get('window');

export const dashboard = StyleSheet.create({
  firstsection:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: colors.primary,
      paddingHorizontal:20,
      paddingVertical:15,
  },
    swiper:{
      height:250,
        marginTop:20,
    },
    secondsection:{

    },
    thirdsection:{
        flex:3
    },
    subheading:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        marginHorizontal:20,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,

        paddingBottom:10,
        paddingTop:30
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    slideinner:{
flex:1, backgroundColor:colors.primary, width:'100%'

    }
    ,
    slidetop:{
      paddingHorizontal:20,
        paddingVertical: 10,
        backgroundColor:'#0A63AE', flex:2
    },
    swipericon:{
        flex:1, justifyContent:'center',alignItems:'center',
    },
    secondIcon:{
        borderLeftWidth:0.5, borderLeftColor:colors.gray500, paddingHorizontal:5,
        borderRightWidth:0.5, borderRightColor:colors.gray500,
    },
    transactionlist: {
        backgroundColor: "#ffffff",
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.42,
        shadowRadius: 2.92,
        elevation: 3,
        borderRadius: 10,
        paddingHorizontal:20,
        paddingVertical:15,
    },

});
