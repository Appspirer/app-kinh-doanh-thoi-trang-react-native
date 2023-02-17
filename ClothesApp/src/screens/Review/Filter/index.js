import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icons from "../../../themes/Icons";
import styles from "./styles";

export default function Filter({ data, onPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.fitler_text}>Filter</Text>
            <ScrollView horizontal={true} style={styles.list} showsHorizontalScrollIndicator={false}>

                {data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.item} onPress={()=>onPress(item.id)}>
                            {item.id === 0 ? <></> : Icons.Icons({ name: 'star', height: 13, width: 13 })}
                            <Text style={styles.text_star}>{item.id === 0 ? "All" : item.star}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}