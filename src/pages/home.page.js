import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import {Student, ITB, UGM, IPB, ITS, Undip} from '../../assets';

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
            <View style={{padding: 20}}>
                <View style={{borderRadius: 20, backgroundColor: '#34ebd8', flexDirection: 'row', justifyContent: 'space-between', padding:20}}>
                    <View style={{padding:10, marginTop:7}}>
                        <Text style={styles.headerText}>Choose</Text>
                        <Text style={styles.headerText}>Your</Text>
                        <Text style={styles.headerText}>University</Text>
                    </View>
                    <Image source={Student} style={{width:130, height:130}}/>
                </View>


                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20, fontWeight: 'bold'}}>University's</Text>
                </View>


                <ScrollView style={{marginBottom:195}} showsVerticalScrollIndicator={false}>
                    {data.map((data) => (
                        <View key={data.key} style={styles.listWrapper}>
                                <View style={{flex:1, justifyContent: 'center', alignItems: 'baseline'}}>
                                    <Image style={{width:90, height: 115, borderRadius:10}} source={data.image}/> 
                                </View>
                                <View style={{flex:2, marginLeft:3}}>
                                    <Text style={{fontSize:17, fontWeight: 'bold'}}>{data.name}</Text>
                                    <Text style={{color:'grey', textAlign:'justify'}}>{data.caption}</Text>
                                </View>
                                <TouchableOpacity style={{flex:0, justifyContent: 'center', alignItems: 'center', marginLeft:15}} onPress={() => onPressed(data)}>
                                    <Text style={{color:'orange', fontWeight:'bold'}}>Detail</Text>
                                </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    headerText:{
        color: '#fcfcfc', 
        fontSize:22, 
        fontWeight: 'bold'
    },
    listWrapper:{
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding:10,
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#d1d1d1',
    }
})
