import React, { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView, Image } from 'react-native'
import styled from 'styled-components/native';


import Tmdb from '../../api/Tmdb';


export default ({ element }) => {

    const [Movieinformations, setMovieInformations] = useState({})
    const [genres, setGenres] = useState([])

    const info = async () => {
        let chosenInfo = await Tmdb.getMovieInfo(element.id, 'tv');

        setMovieInformations(chosenInfo);
        setGenres(chosenInfo.genres)

    }

    useEffect(() => {
        info()
    }, [])

    const Titulo = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`

    const Descricao = styled.Text`
        color: #9F9E9E;
        font-size: 15px;
        margin-top: 5px;
    `

    const ContainerTitulo = styled.View`
        width: 25%;
        margin-top: 20px;
    `
    const Filme = styled.View`
        flex-direction: row;
        margin-bottom: 20px;
        margin-left: 30px;
    `

    const Informations = styled.View`
        margin-left: 23px;
        width: 100%;
    `


    return (
        <Filme>
            <Image resizeMode="cover" style={{ width: 200, justifyContent: 'center', alignItems: 'center', height: 170, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/original${element.poster_path}` }} />
            <Informations>
                <ContainerTitulo>
                    <Titulo>{element.title}</Titulo>

                    {genres && genres.map((element, id) => {
                        return <Titulo key={id}>{element.name}</Titulo>
                    })

                    }

                    <Titulo>{element.vote_average}</Titulo>
                </ContainerTitulo>
            </Informations>
        </Filme>)
}