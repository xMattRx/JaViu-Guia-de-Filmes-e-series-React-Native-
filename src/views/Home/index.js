/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { StatusBar, TouchableOpacity, FlatList } from 'react-native'
import axios from 'axios'
import CardPokemon from '../../components/CardPokemon';
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Header = styled.View`
    background-Color: #d53b47;
    height: 50px;
    width: 100%;
    justify-content: center;
    padding-Left: 30px;
    padding-Bottom: 10px;
`
const TextHeader = styled.Text`
    color: #FFF;
    font-Weight: bold;
    font-Size: 23px;
`

const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
`
const List = styled.View`

flex-Direction: ${props => props.search ? 'row' : 'row'};
width: 100%;
height: 100000px;
background-color: #2e292d;
flex-Wrap: wrap;
justify-Content: center;
align-items: center;
`


const HomeScreen = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState('');
    const [booleanSearch, setBooleanSearch] = useState(false);


    const catchPokemons = async (path = url) => {
        axios
            .get(path)
            .then(async (response) => {
                let array = await mapPokemons(response.data.results);
                setPokemon(array);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const mapPokemons = async (props) => {
        let response = await Promise.all(
            props.map(async (pokemonData) => {
                let registroPokemon = await axios.get(pokemonData.url);
                let registerPokemon = registroPokemon.data;
                return registerPokemon;
            })
        );
        return response;
    };

    const framgment = (element) => {
        return element.name === search
    }

    const navigation = useNavigation()

    useEffect(catchPokemons, [pokemon]);

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#d53b47' />
            <Container>
                <Header>
                    <TextHeader>Pokedex</TextHeader>
                </Header>
                <TextInput
                    placeholder='Busca'
                    value={search}
                    onChangeText={(e) => {
                        setSearch(e)
                    }}
                    onPress={() => {
                        setBooleanSearch(true)
                    }}
                    onBlur={() => {
                        setBooleanSearch(false)
                    }}
                />
                <Scroll>
                    <List search={booleanSearch}>
                        {
                            (booleanSearch === false && search === '') ?

                                (pokemon.map((item, index) => {
                                    return <TouchableOpacity key={index} onPress={() => navigation.push('Details', {
                                        item,
                                    })}
                                    >
                                        <CardPokemon pokemon={item} />
                                    </TouchableOpacity>
                                })) : (pokemon.filter((element) => framgment(element)).map((item, index) => {
                                    return <TouchableOpacity key={index} onPress={() => navigation.push('Details', {
                                        item,
                                    })}
                                    >
                                        <CardPokemon pokemon={item} />
                                    </TouchableOpacity>
                                }))
                        }
                    </List>
                </Scroll>
            </Container>
        </ >
    )
}

export default HomeScreen


