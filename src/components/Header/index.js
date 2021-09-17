import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../components/CardPokemon/Colors'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'




export default props => {
    return (
        <PokemonBackground background={color}>
            <Header>
                <Headerleft>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Arrow resizeMode="contain" source={require('../../assets/ArrowLeft.png')} />
                    </TouchableOpacity>
                    <Pokedex>Pokedex</Pokedex>
                </Headerleft>
                <Id>#{pokemon.id}</Id>
            </Header>

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