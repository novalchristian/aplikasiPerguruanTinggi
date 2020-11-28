import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert, Image, TouchableOpacity } from 'react-native'

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

const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    buttonText:{
        color: '#fff', 
        fontWeight: 'bold'
    },
    subTitle:{
        fontSize: 18, 
        marginTop: 10,
        textAlign: 'center'

    },
    title:{
        fontSize: 25, 
        fontWeight: 'bold',
        textAlign: 'center'

    },
    textWrapper:{
        padding: 20,
        alignItems: 'center',
    },
    image:{
        height: 250, 
        width:412
    },
    imageWrapper:{
        alignItems: 'center', 
    },
    container: {
      flex:1,
      backgroundColor: 'white',
    },
  });