/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Pokeball_header from '../assets/Images/Pokeball_header.png'
import { height } from '../assets/constants'
import commonStyles from '../assets/styles/commonStyles'

const HomeScreen = () => {
    return (
        <View>
            <ImageBackground
                style={{ width: "100%", height: height / 4 }}
                source={Pokeball_header}
                resizeMode="contain"
            >
                <Text style={commonStyles.heading}>Pokedex</Text>
            </ImageBackground>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
