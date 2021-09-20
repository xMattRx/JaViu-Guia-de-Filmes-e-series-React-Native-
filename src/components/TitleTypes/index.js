/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import Types from '../../components/Types'

const Title = styled.Text`
color: #FFF; 
font-size: 22px; 
margin-top: 30px;
margin-bottom: 30px; 
font-weight: bold;
`

export default ({ pokemon }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Title>{pokemon.name}</Title>
            <Types types={pokemon.types} />
        </View>
    )
}