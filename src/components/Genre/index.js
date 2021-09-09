import React, { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import Movie from '../Movie';
import { useNavigation } from '@react-navigation/native';

export default ({ item }) => {

    const Genero = styled.Text`
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    `

    const navigation = useNavigation();

    return (
        <View>
            <Genero>{item.title}</Genero>
            {item.items.results.map((element, index) => {

                return (
                    <TouchableOpacity key={index} onPress={() => { navigation.push('DetalhesFilme') }}>
                        <Movie element={element} />
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}
