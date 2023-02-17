import { StyleSheet } from 'react-native'
import Colors from '../../../themes/Colors'

export default StyleSheet.create({
    container: {
        paddingLeft:16,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:10
    },
    list:{
        marginLeft:16
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:22,
        borderRadius:5,
        backgroundColor:Colors.white,
        marginRight:16,
        shadowColor:Colors.black,
        shadowOpacity:0.2,
        shadowOffset:{
            height:10
        }
    },
    text_star:{
        fontSize:12,
        color:Colors.text,
        marginLeft:5
    }
})