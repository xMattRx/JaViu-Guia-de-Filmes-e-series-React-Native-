/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const ContainerStats = styled.View`
flex-direction: row; 
margin-top: 18px; 
justify-content: space-around;
width: 100%;
`
const Name = styled.Text`
color: #CCC;
`
const BackgroundState = styled.View`
width: 300px;
background-color: #FFF;
border-Radius: 100px;
`
const Color = styled.View`
width: ${props => props.base}px;
background-color: ${props => props.color};
border-Radius: 100px;
`
const Base = styled.Text`
text-align: right; 
margin-right: 12px;
color: #FFF;
`

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