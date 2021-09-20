/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../components/CardPokemon/Colors'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

const PokemonBackground = styled.View`
height: 200px;
border-Bottom-Left-Radius: 50px;
border-Bottom-Right-Radius: 50px;
flex-Direction: column;
background-color:${props => props.background} ;
`

const HeaderContainer = styled.View`
flex-direction: row;
justify-content: space-between;
`

const Headerleft = styled.View`
flex-direction: row;
font-weight: bold;
align-items: center;
width: 150px;
justify-content: space-around;
`

const Arrow = styled.Image`
height: 25px;
width: 30px;
`

const Pokedex = styled.Text`
 font-size: 18px; 
 color: white;
`
const Id = styled.Text`
font-size: 18px; 
color: white; 
padding-Right: 10px;
`
const ContainerImage = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
const PokemonImage = styled.Image`
 height: 180px;
 width: 180px;
`


export default ({ pokemon, color }) => {

    const navigation = useNavigation()
    return (
        <PokemonBackground background={color}>
            <HeaderContainer>
                <Headerleft>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Arrow resizeMode="contain" source={require('../../assets/ArrowLeft.png')} />
                    </TouchableOpacity>
                    <Pokedex>Pokedex</Pokedex>
                </Headerleft>
                <Id>#{pokemon.id}</Id>
            </HeaderContainer>

            <ContainerImage>
                <PokemonImage
                    source={{
                        uri: `${pokemon.sprites.other['official-artwork'].front_default}`,
                    }}
                />
            </ContainerImage>
        </PokemonBackground>
    )
}