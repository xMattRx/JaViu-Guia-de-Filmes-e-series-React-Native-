import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import Tmdb from '../../api/Tmdb'
import Genre from '../../components/Genre';


export default props => {

    const [movieList, setMovieList] = useState([]);

    const loadAll = async () => {
        const list = await Tmdb.getHomeList();
        setMovieList(list)
    }

    useEffect(() => {
        loadAll();
    }, [])

    return (
        <>
            <StatusBar barStyle="light-content" hidden={false} />
            <FlatList
                style={{ marginTop: 100 }}
                data={movieList}
                renderItem={(item) => { return <Genre item={item.item} /> }}
                keyExtract={(item) => item.id}
            />
        </>
    )
}