import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../styles/color'
const {height}= Dimensions.get('window')
const Button = ({ onPress,title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btn_txt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.black,
        borderRadius: 10,
        marginBottom: 10,
        height:height*0.06,
        width:'85%',
        justifyContent:'center',
        alignSelf:'center'
    },
    btn_txt:{
        fontSize:height/45,
        color:color.white,
        textAlign:'center',
        fontWeight:'bold'
    }
})