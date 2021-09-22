/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import Types from '../../components/Types'
import { Title, Container } from './style'


export default ({ pokemon }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Title>{pokemon.name}</Title>
            <Types types={pokemon.types} />
        </View>
    )
}