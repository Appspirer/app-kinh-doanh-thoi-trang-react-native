import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    top_content: {
        marginHorizontal: 16,
        backgroundColor: Colors.white_gray,
        borderRadius: 15
    },
    item: {
        alignSelf: 'center'
    },
    top_bar: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width - 64,
        marginHorizontal: 16,
        top: 18,
        zIndex: 2
    },
    top_bar_right: {
        flexDirection: 'row'
    },
    share: {
        marginLeft: 16
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
    details: {
        marginTop: 20,
        marginHorizontal: 16
    },
    star_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    star: {
        marginHorizontal: 1
    },
    rating: {
        flexDirection: 'row'
    },
    text_review: {
        fontSize: 14,
        color: Colors.purple,
        marginLeft: 15
    },
    price: {
        fontSize: 18,
        color: Colors.ogran,
        marginTop: 20
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 10,
        marginHorizontal: 16,
        marginTop: 30
    },
    list: {
        marginTop: 30
    },
    bottom_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: Colors.white,
        paddingTop: 12,
        shadowColor: Colors.black,
        shadowOffset: {
            height: -2
        },
        shadowOpacity: 0.2,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        width: width
    },
    button: {
        borderRadius: 3,
        paddingVertical: 16,
        alignItems: 'center',
        width: width * 0.43
    },
    modal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        backgroundColor: Colors.white,
        width: width,
        height: height * 0.6,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 24,
        paddingTop: 40
    },
    row_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    left_row: {
        flexDirection: 'row'
    },
    left_text: {
        fontSize: 12,
        color: Colors.gray_5f,
        marginLeft: 10
    },
    title: {
        fontSize: 16,
        color: Colors.text,
        fontWeight: 'bold'
    },
    border_check: {
        height: 20,
        width: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.border_check
    },
    color_container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 30
    },
    color_border: {
        height: 32,
        width: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_container: {
        height: 44,
        borderRadius: 10,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    apply_text: {
        color: Colors.black_text,
        fontSize: 16
    },
    apply: {
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        width: width - 48,
        alignSelf:'center',
        paddingVertical:16,
        borderRadius:10
    }
})