/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { StatusBar } from 'react-native'
import Colors from '../../components/CardPokemon/Colors'
import styled from 'styled-components'
import Header from '../../components/Header'
import TitleTypes from '../../components/TitleTypes'
import WeightHeight from '../../components/WeightHeight'
import State from '../../components/State'
import Stats from '../../util/Stats'
import { Background, ContainerInformations, Informations, BaseStats } from './style'

export default ({ route }) => {
    const pokemon = { ...route.params.item }
    const color = Colors[pokemon.types[0].type.name]

    return (

        <Background>
            <StatusBar barStyle='light-content' backgroundColor={`${color}`} />
            <Header color={color} pokemon={pokemon} />

            <TitleTypes pokemon={pokemon} />

            <ContainerInformations>
                <Informations>
                    <WeightHeight weightHeight={pokemon.weight} title="Weight" unit="KG" />
                    <WeightHeight weightHeight={pokemon.height} title="Height" unit="M" />
                </Informations>

                <BaseStats>Base Stats</BaseStats>

                {Stats.map((element, index) => {
                    return <State key={index} color={`${element.color}`} base={pokemon.stats[index].base_stat * 300 / 100} name={`${element.attribute}`} />
                })
                }
            </ContainerInformations>
        </Background>
    )
}