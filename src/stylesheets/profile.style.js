import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width/3;
const height = Dimensions.get('screen').height/7;
export default StyleSheet.create({
    textWrapper:{
        marginTop:20, 
        alignItems: 'center'
      },
      subTitle:{
        fontSize: 23, 
        fontWeight: 'bold'
      },
      title:{
        fontSize: 15
      },
      image:{
        width, 
        height, 
        borderRadius: 150
      },
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop:40
      },
})