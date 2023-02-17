import React from "react";
import { View, Text } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Rating({ rate = 5 }) {
    let rating = [...new Array(rate).keys()]

    return (
        <View style={styles.rating}>
            {rating.map((item, index) => {
                return (
                    <View key={index} style={styles.star}>
                        {Icons.Icons({ name: 'star', height: 13, width: 13 })}
                    </View>
                )
            })}
        </View>
    )
}