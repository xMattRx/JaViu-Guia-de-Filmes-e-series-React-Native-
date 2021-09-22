/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { ContainerStats, Name, BackgroundState, Color, Base } from './style'

export default ({ base, color, name }) => {
    return (
        <ContainerStats>
            <Name>{name}</Name>
            <BackgroundState>
                <Color color={color} base={base}>
                    <Base>{`${base} /300`}</Base >
                </Color>
            </BackgroundState >
        </ContainerStats >
    )
}