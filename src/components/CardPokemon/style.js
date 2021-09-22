/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Colors from './Colors'

export const Img = styled.Image`
height: 150px;
width: 150px;
`
export const Name = styled.Text`
text-Align: center;
color: #FFF;
font-weight: bold;
font-family: 'Lato-Italic';
`
export const Container = styled.View`
border-Radius: 20px;
padding: 12px;
margin: 11px;
justify-content: center;
align-items: center;
background-color: ${props => Colors[props.color]};
`