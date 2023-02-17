import React, { useEffect, useRef, useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, Animated, Modal, TouchableWithoutFeedback } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Colors from "../../themes/Colors";
import Images from "../../themes/Images";
import Icons from "../../themes/Icons";
import ListItem from "../../components/ListItem";
import Rating from "../../components/Rating";

var { height, width } = Dimensions.get('window')

const dataCarousel = [
    {
        id: 0,
        bg: Colors.blue_cs,
        title_color: Colors.white,
        text_color: Colors.white,
        img: Images.details
    },
    {
        id: 1,
        bg: Colors.white_gray,
        title_color: Colors.black_text,
        text_color: Colors.gray_text,
        img: Images.details
    },
    {
        id: 2,
        bg: Colors.white_gray,
        title_color: Colors.black_text,
        text_color: Colors.gray_text,
        img: Images.details
    },
]

const productData = [
    {
        id: 0,
        img: Images.product1,
        name: "NMD_R1 SHOES",
        price: 130
    },
    {
        id: 1,
        img: Images.product2,
        name: "NMD_R1 SHOES",
        price: 130
    },
    {
        id: 2,
        img: Images.product1,
        name: "NMD_R1 SHOES",
        price: 130
    },
    {
        id: 3,
        img: Images.product2,
        name: "NMD_R1 SHOES",
        price: 130
    },
]

const colorData = [
    {
        id: 0,
        color: "#BFC5C8"
    },
    {
        id: 1,
        color: "#3F4BBF"
    },
    {
        id: 2,
        color: "#0094FE"
    },
    {
        id: 3,
        color: "#AC00B8"
    },
    {
        id: 4,
        color: "#00B439"
    },
    {
        id: 5,
        color: "#FFE100"
    },
]

export default function Details({ navigation }) {
    const [indexCarousel, setIndexCarousel] = useState(0)
    const [toggleBottomBar, setToggleBottomBar] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [colorSelected, setColorSelected] = useState(0)

    const bottomBar = useRef(new Animated.Value(100)).current

    useEffect(() => {
        if (toggleBottomBar) {
            Animated.timing(bottomBar, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(bottomBar, {
                toValue: 80,
                duration: 500,
                useNativeDriver: true
            }).start()
        }
    }, [toggleBottomBar])

    const scrollHandle = (event) => {
        if (event.nativeEvent.contentOffset.y > 30) {
            if (toggleBottomBar === false) {
                setToggleBottomBar(true)
            }
        } else {
            if (toggleBottomBar === true) {
                setToggleBottomBar(false)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={showModal}
                transparent={true}
                animationType='fade'
            >
                <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                    <View style={styles.modal_container}>
                        <TouchableWithoutFeedback>
                            <View style={styles.content}>
                                <Text style={styles.title}>SPECIAL OFFER</Text>
                                <View style={styles.row_container}>
                                    <View style={styles.left_row}>
                                        {Icons.Icons({ name: 'plane', height: 16, width: 14 })}
                                        <Text style={styles.left_text}>Free Delivery</Text>
                                    </View>
                                    <View style={[styles.border_check, { backgroundColor: Colors.yellow }]}>
                                        {Icons.Icons({ name: "checked", height: 11, width: 13 })}
                                    </View>
                                </View>
                                <View style={styles.row_container}>
                                    <View style={styles.left_row}>
                                        {Icons.Icons({ name: 'ticket', height: 16, width: 14 })}
                                        <Text style={styles.left_text}>Free Delivery</Text>
                                    </View>
                                    <View style={[styles.border_check, { borderWidth: 1 }]}></View>
                                </View>
                                <View style={styles.row_container}>
                                    <View style={styles.left_row}>
                                        {Icons.Icons({ name: 'badge', height: 16, width: 14 })}
                                        <Text style={styles.left_text}>Free Delivery</Text>
                                    </View>
                                    <View style={[styles.border_check, { borderWidth: 1 }]}></View>
                                </View>

                                <Text style={[styles.title, { marginTop: 50 }]}>CHOOSE COLOR</Text>
                                <View style={styles.color_container}>
                                    {colorData.map((item, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={[styles.border_container, {
                                                borderWidth: colorSelected === item.id ? 1 : 0, borderColor: item.color
                                            }]}
                                                onPress={() => setColorSelected(item.id)}
                                            >
                                                <View style={[styles.color_border, { backgroundColor: item.color }]}>
                                                    {colorSelected === item.id ? Icons.Icons({ name: 'checked1', height: 16, width: 11 }) : <></>}
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                                <TouchableOpacity style={styles.apply} onPress={()=>setShowModal(false)}>
                                    <Text style={styles.apply_text}>Apply now</Text>
                                </TouchableOpacity>

                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
            <Animated.View style={[styles.bottom_container, { transform: [{ translateY: bottomBar }] }]}>
                <TouchableOpacity style={[styles.button, {}]} onPress={() => setShowModal(true)}>
                    <Text>ADD TO CART</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.yellow }]} onPress={() => setShowModal(true)}>
                    <Text>BUY NOW</Text>
                </TouchableOpacity>
            </Animated.View>
            <ScrollView
                onScroll={(event) => scrollHandle(event)}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <View style={styles.top_content}>
                    <View style={styles.top_bar}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {Icons.Icons({ name: 'back', height: 24, width: 24 })}
                        </TouchableOpacity>
                        <View style={styles.top_bar_right}>
                            <TouchableOpacity onPress={() => { }}>
                                {Icons.Icons({ name: 'ic_heart', height: 24, width: 24 })}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.share} onPress={() => { }}>
                                {Icons.Icons({ name: 'ic_share', height: 24, width: 24 })}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Carousel
                        loop
                        width={width - 32}
                        height={height * 0.225}
                        data={dataCarousel}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => setIndexCarousel(index)}
                        renderItem={({ item, index }) => (
                            <View style={styles.item}>
                                <Image source={item.img} />
                            </View>
                        )}
                    />
                    <View style={styles.dot_container}>
                        {dataCarousel.map((item, index) => {
                            return (
                                <View key={index} style={[styles.dot, {
                                    backgroundColor: index === indexCarousel ? Colors.dot_focus : Colors.dot
                                }]} />
                            )
                        })}
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>ULTRABOOST 20 SHOES NMD_R1 </Text>
                    <View style={styles.star_container}>
                        <Rating />
                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                            <Text style={styles.text_review}>SEE REVIEW</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.price}>$ 130</Text>
                </View>
                <TouchableOpacity style={styles.description} onPress={() => navigation.navigate('Description')}>
                    <Text style={styles.description_text}>See Description</Text>
                    {Icons.Icons({ name: 'next', height: 18, width: 18 })}
                </TouchableOpacity>
                <ListItem data={productData} title="RELATED PRODUCT" style={styles.list} />
                <ListItem data={productData} title="RELATED PRODUCT" style={styles.list} />
                <ListItem data={productData} title="RELATED PRODUCT" style={styles.list} />
            </ScrollView>
        </View>
    )
}