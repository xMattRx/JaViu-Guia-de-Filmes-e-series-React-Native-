/* eslint-disable prettier/prettier */
import React from 'react'
import { Container, Img, Name } from './style'


export default ({ pokemon }) => {
    let color = pokemon.types[0].type.name;
    return (
        <Container color={color}>
            <Img
                source={{
                    uri: `${pokemon.sprites.other['official-artwork'].front_default}`,
                }}
            />
            <Name>{pokemon.name}</Name>
        </Container>
    )
}

