/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../components/CardPokemon/Colors'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { PokemonBackground, HeaderContainer, Headerleft, Arrow, Pokedex, Id, ContainerImage, PokemonImage } from './style'


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