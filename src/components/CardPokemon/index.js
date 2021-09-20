/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import Colors from './Colors'

const Container = styled.View`
border-Radius: 20px;
padding: 12px;
margin: 11px;
justify-content: center;
align-items: center;
background-color: ${props => Colors[props.color]};
`

const Img = styled.Image`
height: 150px;
width: 150px;
`
const Name = styled.Text`
text-Align: center;
color: #FFF;
font-Weight: bold;
font-family: 'Lato-Regular';
`


export default ({ pokemon }) => {
    console.log(pokemon)
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

