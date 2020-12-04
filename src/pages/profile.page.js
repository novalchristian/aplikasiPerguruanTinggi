import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {Student} from '../../assets';
import styles from '../stylesheets/profile.style';

let profile = [
  {
    key: 1,
    title: 'Nama :',
    subTitle: 'Damarjati Rahmandaru'
  },
  {
    key: 2,
    title: 'NIM :',
    subTitle: '21120118130074'
  },
  {
    key: 3,
    title: 'Kelompok :',
    subTitle: '4'
  },
  {
    key: 4,
    title: 'Base :',
    subTitle: 'React Native'
  },
]
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Student} style={styles.image}/>
        {profile.map((profile) => (
          <View key={profile.key} style={styles.textWrapper}>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.subTitle}>{profile.subTitle}</Text>
          </View>
        ))}
      </View>
    );
  }
}
