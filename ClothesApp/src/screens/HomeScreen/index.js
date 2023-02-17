import React, { useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Dimensions, Image, ScrollView, Animated } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Colors from "../../themes/Colors";
import ListItem from "../../components/ListItem";

const dataCarousel = [
    {
        id: 0,
        bg: Colors.blue_cs,
        title_color: Colors.white,
        text_color: Colors.white,
        img: Images.img1
    },
    {
        id: 1,
        bg: Colors.white_gray,
        title_color: Colors.black_text,
        text_color: Colors.gray_text,
        img: Images.img2
    },
    {
        id: 2,
        bg: Colors.white_gray,
        title_color: Colors.black_text,
        text_color: Colors.gray_text,
        img: Images.img2
    },
]

const categoriesData = [
    {
        id: 0,
        img: Images.category1
    },
    {
        id: 1,
        img: Images.category2
    },
    {
        id: 2,
        img: Images.category3
    },
    {
        id: 3,
        img: Images.category3
    }
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

var { height, width } = Dimensions.get('window')

export default function HomeScreen({ navigation }) {

    const [value, setValue] = useState('')
    const [indexCarousel, setIndexCarousel] = useState(0)
    const [toggleSearchBar, setToggleSearchBar] = useState(false)

    const searchBar = useRef(new Animated.Value(-65)).current

    useEffect(() => {
        if (toggleSearchBar) {
            Animated.timing(searchBar, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(searchBar, {
                toValue: -65,
                duration: 500,
                useNativeDriver: true
            }).start()
        }
    }, [toggleSearchBar])

    const handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > 30) {
            if (toggleSearchBar === false) {
                setToggleSearchBar(true)
            }
        } else {
            if (toggleSearchBar === true) {
                setToggleSearchBar(false)
            }
        }
    }

    return (
        <View style={styles.view_container}>
            <Animated.View style={[styles.searchBar, { transform: [{ translateY: searchBar }] }]}>
                <View style={[styles.search_container, { backgroundColor: Colors.gray_search }]}>
                    {Icons.Icons({ name: 'search_gray', height: 18, width: 18 })}
                    <TextInput
                        style={styles.text_input}
                        placeholder="Cari barang Kamu disini"
                        value={value}
                        onChangeText={setValue}
                    />
                </View>
                <TouchableOpacity>
                    {Icons.Icons({ name: 'cart_black', height: 24, width: 24 })}
                </TouchableOpacity>
            </Animated.View>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                onScroll={(event) => handleScroll(event)}
                scrollEventThrottle={16}
            >

                <ImageBackground source={Images.line_bg} style={styles.line_bg}>
                    <View style={styles.top_container}>
                        <View style={styles.search_container}>
                            {Icons.Icons({ name: 'search', height: 18, width: 18 })}
                            <TextInput
                                style={styles.text_input}
                                placeholder="Cari barang Kamu disini"
                                value={value}
                                onChangeText={setValue}
                                placeholderTextColor={Colors.white}
                            />
                        </View>
                        <TouchableOpacity>
                            {Icons.Icons({ name: 'cart', height: 24, width: 24 })}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.carousel_container}>
                        <Carousel
                            loop
                            width={width}
                            height={height * 0.225}
                            data={dataCarousel}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => setIndexCarousel(index)}
                            renderItem={({ item, index }) => (
                                <View key={index} style={[styles.carousel_item, {
                                    backgroundColor: item.bg
                                }]}>
                                    <View style={styles.carousel_item_left}>
                                        <Text style={[styles.carousel_title, { color: item.title_color }]}>Hoodie Collection</Text>
                                        <Text style={[styles.carousel_content, { color: item.text_color }]}>Latest shoe recommendations which is being hit right now</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={styles.get_now}>
                                                <Text style={styles.text_get_now}>Get Now</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <Image source={item.img} style={styles.carousel_img} />
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
                            )}
                        />
                    </View>
                </ImageBackground>
                <View style={styles.content_container}>
                    <ListItem title="CATEGORIES" data={categoriesData} type={2} />
                    <ListItem title="NEW PRODUCT" data={productData} style={{ marginTop: 20 }} onPress={()=>navigation.navigate('Details')}/>
                    <ListItem title="DISCOUNT" data={productData} style={{ marginTop: 30 }} />
                    <View style={{ height: 50 }} />
                </View>
            </ScrollView>
        </View>
    )
}