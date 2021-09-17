/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'

export default props => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-around', width: '100%' }}>
            <Text style={{ color: '#CCC' }}>{props.name}</Text>

            <View style={{
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 100,
            }}>
                <View style={{
                    width: 299,
                    backgroundColor: '#FF0000',
                    borderRadius: 100,
                }} >
                    <Text style={{ textAlign: 'right' }}>dsads</Text>
                </View>

            </View>


        </View>
    )
}