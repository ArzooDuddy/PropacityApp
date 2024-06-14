import { Dimensions, StyleSheet} from 'react-native'
import color from '../../../styles/color'
const{height}= Dimensions.get('window')
 export default styles = StyleSheet.create({
    list_vw:{
        height:height*0.1,
        justifyContent:'space-around',
        marginBottom:30,
        borderWidth:1,
        padding:10,
        borderColor:color.theme2,
        borderRadius:8
    },
    date_txt:{
        fontSize:height/55,
        textAlign:'right',
        fontWeight:'400',
        color:color.graytxt
    }
 })