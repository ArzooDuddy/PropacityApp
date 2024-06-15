import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import color from '../styles/color';
import commonStyles from '../styles/commonStyles';
export default TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <View>
    <Text style={commonStyles.regular_txt}>{`Title : ${task?.title}`}</Text>
    <Text style={commonStyles.sm_txt}>{`Date : ${task?.dueDate}`}</Text>
    </View>
    <Text style={styles.vw_txt}>{'View Details'}</Text>
  </View>
);

const styles = StyleSheet.create({
  taskItem: {
    paddingVertical:10,
    paddingHorizontal:10,
    shadowColor:color.theme2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    width:'85%',
    alignSelf:'center',
    marginBottom:20,
    backgroundColor:color.white,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  vw_txt:{
    color:color.theme2,
    textDecorationLine:'underline',
  }
  
});
