import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    view_container:{
        flex:1
    },
    container: {
        flex: 1,
        backgroundColor: Colors.blue_bg
    },
    line_bg: {
        height: height * 0.3
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 16
    },
    search_container: {
        flexDirection: 'row',
        backgroundColor: Colors.blue_search,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 7,
        width: width * 0.8
    },
    text_input: {
        marginLeft: 10
    },
    carousel_container: {
        marginTop: 16,
        alignSelf: 'center',
    },
    carousel_item: {
        flexDirection: 'row',
        borderRadius: 15,
        padding: 16,
        marginHorizontal: 16,
        height: 125
    },
    carousel_item_left: {
    },
    carousel_title: {
        width: '65%',
        fontSize: 14,
        fontWeight: 'bold'
    },
    carousel_content: {
        width: '65%',
        fontSize: 10,
        marginTop: 5
    },
    carousel_img: {
        position: 'absolute',
        right: 10
    },
    get_now: {
        borderRadius: 3,
        backgroundColor: Colors.yellow,
        marginTop: 10
    },
    text_get_now: {
        fontSize: 9,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    dot_container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
        width: width - 32,
        justifyContent: 'center'
    },
    dot: {
        height: 7,
        width: 7,
        borderRadius: 4,
        marginHorizontal: 4
    },
    content_container:{
        backgroundColor: Colors.white,
        shadowColor:Colors.blue_bg,
        shadowOffset:{
            height:-20
        },
        shadowRadius:5,
        shadowOpacity:1,
        marginTop:-30,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:16
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
    searchBar:{
        position:'absolute',
        backgroundColor: Colors.white,
        zIndex:1,
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:16
    }
})