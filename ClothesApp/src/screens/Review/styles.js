import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        paddingHorizontal:16,
        paddingBottom: 16
    },
    header_text: {
        fontSize: 14,
        color: Colors.header_title,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    item:{
        backgroundColor:Colors.white,
        flexDirection:'row',
        marginHorizontal:16,
        padding:16,
        marginTop:16,
        borderRadius:10
    },
    avatar:{
        height:32,
        width:32
    },
    content:{
        width:'70%',
        marginBottom:10
    },
    content_container:{
        marginLeft:10
    }
})