import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {Student} from '../../assets';
import styles from '../stylesheets/profile.style';

let profile = [
  {
    key: 1,
    title: 'Nama :',
    subTitle: 'Ketik nama anda disini'
  },
  {
    key: 2,
    title: 'NIM :',
    subTitle: 'Ketik NIM anda disini'
  },
  {
    key: 3,
    title: 'Kelompok :',
    subTitle: 'ketik kelompok anda disini'
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
