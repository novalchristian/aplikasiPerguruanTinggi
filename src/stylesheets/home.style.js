import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width/4.5;
const height = Dimensions.get('window').height/7;
export default StyleSheet.create({
    buttonText:{
        color:'orange', 
        fontWeight:'bold'
    },
    button:{
        flex:0, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft:15
    },
    midTextCaption:{
        color:'grey', 
        textAlign:'justify'
    },
    midTextName:{
        fontSize:17, 
        fontWeight: 'bold'
    },
    listMidWrapper:{
        flex:2, 
        marginLeft:3
    },
    listImage:{
        width, 
        height, 
        borderRadius:10
    },
    imageWrapper:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'baseline'
    },
    scrollView:{
        marginBottom:195
    },
    sessionTitle:{
        fontSize:20, 
        fontWeight: 'bold'
    },
    sessionWrapper:{
        marginTop:15
    },
    image:{
        width: width + 50, 
        height: width + 30,
    },
    headerTextWrapper:{
        padding:10, 
        marginTop:7
    },
    headerWrapper:{
        borderRadius: 20, 
        backgroundColor: '#34ebd8', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding:20
    },
    wrapper:{
        padding: 20
    },
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