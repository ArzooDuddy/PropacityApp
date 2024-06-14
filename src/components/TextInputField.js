import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputField = ({ value, onChangeText, placeholder,label }) => (
  <TextInput
    mode='outlined'
    label={placeholder}
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
   width:'85%',
   alignSelf:'center',
   marginBottom:20
  },
});

export default TextInputField;
