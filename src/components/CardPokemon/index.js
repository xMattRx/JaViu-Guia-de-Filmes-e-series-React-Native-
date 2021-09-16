/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { styles } from './style'
import styled from 'styled-components'
import Colors from './Colors'

const Container = styled.View`
border-Radius: 20px;
padding: 12px;
margin: 11px;
background-color: ${props => Colors[props.color]};
`

export default ({ pokemon }) => {
    let color = pokemon.data.types[0].type.name;
    return (
        <Container color={color}>
            <Image
                style={styles.image}
                source={{
                    uri: `${pokemon.data.sprites.other['official-artwork'].front_default}`,
                }}
            />
            <Text style={styles.name}>{pokemon.data.name}</Text>
        </Container>
    )
}

