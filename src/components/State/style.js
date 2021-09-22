/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const ContainerStats = styled.View`
flex-direction: row; 
margin-top: 18px; 
justify-content: space-around;
width: 100%;
`
export const Name = styled.Text`
color: #CCC;
`
export const BackgroundState = styled.View`
width: 300px;
background-color: #FFF;
border-Radius: 100px;
`
export const Color = styled.View`
width: ${props => props.base}px;
background-color: ${props => props.color};
border-Radius: 100px;
`
export const Base = styled.Text`
text-align: right; 
margin-right: 12px;
color: #FFF;
`