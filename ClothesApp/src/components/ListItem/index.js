import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from "./styles";

export default function ListItem({ title = "", data = [], type = 1, style, onPress }) {
    return (
        <View style={style}>
            <View style={styles.header_list}>
                <Text style={styles.header_list_left}>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.header_list_right}>SEE ALL</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.horizontal_container} showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => {
                    return (
                        <View key={index}>
                            {type === 1 ?
                                <TouchableOpacity style={{}} onPress={onPress ? onPress : null}>
                                    <View style={styles.product_item}>
                                        <Image source={item.img} />
                                    </View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>${item.price}</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.item}>
                                    <Image source={item.img} />
                                </TouchableOpacity>
                            }
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}