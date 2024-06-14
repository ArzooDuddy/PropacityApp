import { Dimensions, StyleSheet } from 'react-native';
import color from './color';
const {height}= Dimensions.get('window')
const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  title: {
    fontSize: height/35,
    fontWeight: 'bold',
    color:color.white
  },
  w_9:{
    width:'85%',
    alignSelf:'center'
  },
  regular_txt:{
    fontSize:height/50,
    fontWeight:'bold',
    color:color.black,
    marginBottom:10
  },
  sm_txt:{
    fontWeight:'400',
    color:color.graytxt,
    fontSize:height/60,
    marginBottom:10
  },
  emptyContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  datePicker: {
    width: '100%',
    marginTop: 20,
  },
});

export default commonStyles;
