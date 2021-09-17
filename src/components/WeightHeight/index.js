/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'

export default ({ weightHeight, title, unit }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#FFF', marginBottom: 13, fontSize: 20, fontWeight: 'bold' }}>{weightHeight / 10} {unit}</Text>
            <Text style={{ color: '#BAB4BC', fontSize: 14 }}>{title}</Text>
        </View>
    )
}