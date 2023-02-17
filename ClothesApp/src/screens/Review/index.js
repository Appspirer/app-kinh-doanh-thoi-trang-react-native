import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import Rating from "../../components/Rating";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import Filter from "./Filter";
import styles from "./styles";

const filterData = [
    {
        id: 0,
        star: 0
    },
    {
        id: 1,
        star: 1
    },
    {
        id: 2,
        star: 2
    },
    {
        id: 3,
        star: 3
    },
    {
        id: 4,
        star: 4
    },
    {
        id: 5,
        star: 5
    }
]

const data = [
    {
        id: 0,
        avatar: Images.avatar1,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 5
    },
    {
        id: 1,
        avatar: Images.avatar2,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 5
    },
    {
        id: 2,
        avatar: Images.avatar3,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 5
    },
    {
        id: 3,
        avatar: Images.avatar4,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 5
    },
    {
        id: 4,
        avatar: Images.avatar4,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 1
    },
    {
        id: 5,
        avatar: Images.avatar4,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 2
    },
    {
        id: 6,
        avatar: Images.avatar4,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 3
    },
    {
        id: 7,
        avatar: Images.avatar4,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 4
    },
    {
        id: 8,
        avatar: Images.avatar4,
        content: "Its good service from, the packing nice and delivery on time … ",
        rating: 2
    }

]

export default function Review({ navigation }) {

    const [dataFilter, setDataFilter] = useState(data)

    const onChangeFilter = (index) => {
        let tempData = data
        if (index === 0) {
            tempData = data
        } else {
            tempData = tempData.filter((item) => item.rating === index)
        }
        setDataFilter(tempData)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                {Icons.Icons({ name: 'back', height: 18, width: 18 })}
                <Text style={styles.header_text}>All Review</Text>
            </TouchableOpacity>
            <Filter data={filterData} onPress={(index) => onChangeFilter(index)} />
            <FlatList
                data={dataFilter}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item}>
                            <Image source={item.avatar} style={styles.avatar} />
                            <View style={styles.content_container}>
                                <Text style={styles.content}>{item.content}</Text>
                                <Rating rate={item.rating} />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}