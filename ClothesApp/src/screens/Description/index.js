import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Description({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {Icons.Icons({ name: 'back', height: 24, width: 24 })}
                </TouchableOpacity>
            </View>
            <ScrollView style={{}}>
                <Text style={styles.content}>
                    The history of fashion design refers specifically to the development of the purpose and intention behind garments, shoes and accessories, and their design and construction. The modern industry, based around firms or fashion houses run by individual designers, started in the 19th century with Charles Frederick Worth who, beginning in 1858, was the first designer to have his label sewn into the garments he created
                </Text>
                <Text style={[styles.content, { marginTop: 20 }]}>
                    Before the mid-19th century the division between haute couture and ready-to-wear did not really exist. All but the most basic pieces of female clothing were made-to-measure by dressmakers and seamstresses dealing directly with the client. Most often, clothing was patterned, sewn and tailored in the household.
                </Text>
            </ScrollView>

        </View>
    )
}