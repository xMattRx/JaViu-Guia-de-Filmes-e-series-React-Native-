/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import Types from '../../components/Types'

const Title = styled.Text`
color: #FFF; 
font-size: 22; 
margin-top: 30;
margin-bottom: 30; 
font-weight: bold;
`

export default ({ pokemon }) => {
    console.log("pokemon: " + pokemon)
    return (
        <View style={{ alignItems: 'center' }}>
            <Title>{pokemon.name}</Title>
            <Types types={pokemon.types} />
        </View>
    )
}