import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Initial');
        }, 2000);
    }, [navigation]);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>APLIKASI</Text>
            <Text style={styles.text}>PERGURUAN</Text>
            <Text style={styles.text}>TINGGI</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})