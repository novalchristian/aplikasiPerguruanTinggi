import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import {HomeImage, ITB, UGM, IPB, ITS, Undip} from '../../assets';
import styles from '../stylesheets/home.style';

let data=[
    {
        key:1,
        name: 'Universitas Diponegoro',
        image:Undip,
        caption: "UNDIP atau Universitas Diponegoro terletak di kota Semarang",
        keterangan: "Undip didirikan pada tahun 1956 sebagai Perguruan Tinggi Swasta dan baru mendapat status sebagai Perguruan Tinggi Negeri pada tahun 1961. Kata Diponegoro diambil dari nama pahlawan nasional, yaitu Pangeran Diponegoro yang merupakan seorang pangeran pengobar semangat kemerdekaan dari tindakan kolonialisme Belanda di awal abad ke-18."
    },
    {
        key:2,
        name: 'Institut Teknologi Bandung',
        image:ITB,
        caption: "ITB kini telah berusia lebih dari 50 tahun dan masih berkontribusi aktif untuk mendukung pendidikan",
        keterangan: "PTN di Bandung ini layak menjadi institut terbaik di Indonesia yang bergerak di bidang pengembangan teknik dan sains. ITB didirikan sejak tahun 1959 dan mampu mempertahankan kualitas sebagai salah satu yang termasuk daftar PTN terbaik di Indonesia."
    },
    {
        key:3,
        name: 'Universitas Gadjah Mada',
        image:UGM,
        caption: "Merupakan universitas pertama yang didirikan oleh Pemerintah Republik Indonesia setelah Indonesia merdeka.",
        keterangan: "Kampus UGM terletak di Yogyakarta dan sudah didirikan sejak tahun 1949. UGM memang konsisten menempati posisi 1 daftar universitas terbaik di Indonesia. Dengan statusnya sebagai PTN."
    },
    {
        key:4,
        name: 'Institut Pertanian Bogor',
        image:IPB,
        caption: "Institut Pertanian Bogor adalah perguruan tinggi berbentuk institut yang berada di provinsi Jawa Barat.",
        keterangan: "IPB lebih berfokus di bidang pertanian, meski banyak juga jurusan non-agragris. IPB konsisten masuk dalam daftar universitas terbaik di Indonesia di peringkat 10 besar."
    },
    {
        key:5,
        name: 'Institut Teknologi Sepuluh November',
        image:ITS,
        caption: "Institut Teknologi Sepuluh Nopember terletak di daerah Sukolilo, Surabaya.",
        keterangan: "Pertama didirikan di tahun 1957, ITS berfokus untuk mengembangkan bidang teknologi dan maritim Indonesia."
    },
]

export default function Home({navigation}) {
    const onPressed = (data) => {
        navigation.navigate('HomeDetail', data);
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" translucent/>
            <View style={styles.wrapper}>
                <View style={styles.headerWrapper}>
                    <View style={styles.headerTextWrapper}>
                        <Text style={styles.headerText}>Choose</Text>
                        <Text style={styles.headerText}>Your</Text>
                        <Text style={styles.headerText}>University</Text>
                    </View>
                    <Image source={HomeImage} style={styles.image}/>
                </View>


                <View style={styles.sessionWrapper}>
                    <Text style={styles.sessionTitle}>University's</Text>
                </View>


                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {data.map((data) => (
                        <View key={data.key} style={styles.listWrapper}>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.listImage} source={data.image}/> 
                                </View>
                                <View style={styles.listMidWrapper}>
                                    <Text style={styles.midTextName}>{data.name}</Text>
                                    <Text style={styles.midTextCaption}>{data.caption}</Text>
                                </View>
                                <TouchableOpacity style={styles.button} onPress={() => onPressed(data)}>
                                    <Text style={styles.buttonText}>Detail</Text>
                                </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                
            </View>
        </View>
    )
}
