/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import Colors from '../../components/CardPokemon/Colors'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import Types from '../../components/Types'
import State from '../../components/State'

const Background = styled.View`
background-color: #2B292C;
flex: 1;
`

const PokemonBackground = styled.View`
height: 200;
border-Bottom-Left-Radius: 50;
border-Bottom-Right-Radius: 50;
flex-Direction: column;
background-color:${props => props.background} ;
`

const Header = styled.View`
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
 font-size: 18; 
 color: white;
`
const Id = styled.Text`
font-size: 18; 
color: white; 
padding-Right: 10;
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

export default ({ route }) => {

    const pokemon = { ...route.params.item.data }
    const color = Colors[pokemon.types[0].type.name]
    console.log(pokemon)
    const navigation = useNavigation()

    return (
        <Background>
            <StatusBar barStyle='light-content' backgroundColor={`${color}`} />
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


            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 22, marginTop: 30, marginBottom: 30, fontWeight: 'bold' }}>{pokemon.name}</Text>
                <Types types={pokemon.types} />
            </View>

            <View style={{ alignItems: 'center', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 220, marginTop: 30 }}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#FFF', marginBottom: 13, fontSize: 20, fontWeight: 'bold' }}>{pokemon.weight / 10} KG</Text>
                        <Text style={{ color: '#BAB4BC', fontSize: 14 }}>Weight</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#FFF', marginBottom: 13, fontSize: 20, fontWeight: 'bold' }}>{pokemon.height / 10} M</Text>
                        <Text style={{ color: '#BAB4BC', fontSize: 14 }}>Height</Text>
                    </View>
                </View>

                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Base Stats</Text>

                <State name="HP" />
            </View>




        </Background>


    )
}