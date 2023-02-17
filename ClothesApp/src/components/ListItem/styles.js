import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{

    },
    horizontal_container:{
        marginLeft:16,
        marginTop:12, 
    },
    item:{
        backgroundColor: Colors.white_gray,
        height:90,
        width:119,
        marginRight:16,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:15
    },
    header_list:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:16
    },
    header_list_left:{
        fontSize:14,
        color: Colors.black_text
    },
    header_list_right:{
        fontSize:12,
        color: Colors.purple
    },
    product_item:{
        width:138,
        height:100,
        backgroundColor: Colors.white_gray,
        marginRight:16,
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },
    name:{
        marginTop:8,
        fontSize:14,
        color:Colors.black_text,
        fontWeight:'bold',
        marginLeft:8
    },
    price:{
        marginTop:8,
        marginLeft:8,
        fontSize:14,
        color: Colors.ogran
    },
})