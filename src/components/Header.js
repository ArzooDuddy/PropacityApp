import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../styles/color'
const { height } = Dimensions.get('window')
export default Header = ({ title, back, onPress }) => {
    return (
        <View style={styles.header_wrap}>
            {back &&
                <TouchableOpacity style={styles.back_img} onPress={onPress}>
                    <Image source={require('../assets/images/back.png')} style={styles.img} />
                </TouchableOpacity>
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header_wrap: {
        height: height * 0.12,
        justifyContent: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: height / 40,
        color: color.black,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    img: {
        height: 40,
        width: 40,
        marginLeft:20
    }
})