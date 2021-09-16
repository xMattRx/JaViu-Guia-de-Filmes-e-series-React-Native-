/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, FlatList, Text, View } from 'react-native'
import axios from 'axios'
import { styles } from './Style';
import CardPokemon from '../../components/CardPokemon';

const HomeScreen = () => {
    const [url] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");

    const catchPokemons = async (path = url) => {
        axios
            .get(path)
            .then(async (response) => {
                let array = await mapPokemons(response.data.results);
                setPokemon(array);
                setNext(response.data.next);
                setPrevious(response.data.previous);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const mapPokemons = async (props) => {
        let response = await Promise.all(
            props.map(async (pokemonData) => {
                let registroPokemon = await axios.get(pokemonData.url);
                return registroPokemon;
            })
        );
        return response;
    };

    useEffect(catchPokemons, []);

    return (
        <View style={styles.container}>
            <>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Pokedex</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.list}>
                        {
                            pokemon.map((item, index) => {
                                return <CardPokemon key={index} pokemon={item} />
                            })
                        }
                    </View>
                </ScrollView>
            </>
        </View >
    )
}

export default HomeScreen


