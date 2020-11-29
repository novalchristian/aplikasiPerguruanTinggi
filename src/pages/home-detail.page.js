import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert, Image, TouchableOpacity } from 'react-native'
import styles from '../stylesheets/home-detail.style';

export default function HomeDetail({route}) {
    const {name, image, caption, keterangan} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={image} style={styles.image}/> 
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{caption}</Text>
                <Text style={styles.subTitle}>{keterangan}</Text>
            </View>
        </View>
    )
}

