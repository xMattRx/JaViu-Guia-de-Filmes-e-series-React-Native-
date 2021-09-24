/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { StatusBar, TouchableOpacity, FlatList, Text } from 'react-native'
import axios from 'axios'
import CardPokemon from '../../components/CardPokemon';
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import { Container, Header, TextHeader, List, Closer } from './style'

const HomeScreen = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
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
                {search.length > 0 &&
                    <Closer onPress={() => {
                        setSearch('')
                    }}>X</Closer>
                }
                <List search={booleanSearch}>
                    {
                        (booleanSearch === false && search === '') ?

                            (<FlatList
                                data={pokemon}
                                renderItem={({ item }) => {
                                    return <TouchableOpacity onPress={() => navigation.push('Details', {
                                        item,
                                    })}
                                    >
                                        <CardPokemon pokemon={item} />
                                    </TouchableOpacity>
                                }}
                            />
                            ) : (<FlatList
                                data={pokemon.filter((element) => framgment(element))}
                                renderItem={({ item }) => {
                                    return <TouchableOpacity onPress={() => navigation.push('Details', {
                                        item,
                                    })}
                                    >
                                        <CardPokemon pokemon={item} />
                                    </TouchableOpacity>
                                }}
                            />)
                    }
                </List>
            </Container>
        </ >
    )
}

export default HomeScreen


