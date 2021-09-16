/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: '#d53b47',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingBottom: 10

    },
    textHeader: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 23
    },
    scrollView: {
        flex: 1,
        width: '100%'
    },
    list: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#2e292d',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})