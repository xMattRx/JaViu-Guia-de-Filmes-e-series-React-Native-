/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Colors from '../CardPokemon/Colors'

export const Container = styled.View`
flex-Direction: row;
width: 310px;
justify-content: ${props => props.size > 1 ? 'space-around' : 'center'};
`

export const TextType = styled.Text`
color: #FFF;
font-Size: 17px; 
font-Weight: bold;
`

