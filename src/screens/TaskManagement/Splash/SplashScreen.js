import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import color from '../../../styles/color';
import LinearGradient from 'react-native-linear-gradient';
export default SplashScreen = ({ navigation }) => {
    const spashImg = require('../../../assets/images/splash.webp')
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('TaskList');
        }, 1000);
        return () => clearTimeout(timer); 
      }, [navigation]);
    return (
        <SafeAreaView style={commonStyles.container}>
            <LinearGradient colors={[color.mainTheme, color.theme2, color.black]} style={[styles.container, commonStyles.container]}>
                <Image source={spashImg} style={styles.logo}/>
                <Text style={commonStyles.title}>Propacity Proptech</Text>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.mainTheme
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
});