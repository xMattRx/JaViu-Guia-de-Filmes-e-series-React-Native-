/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const PokemonBackground = styled.View`
height: 200px;
border-Bottom-Left-Radius: 50px;
border-Bottom-Right-Radius: 50px;
flex-Direction: column;
background-color:${props => props.background} ;
`

export const HeaderContainer = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const Headerleft = styled.View`
flex-direction: row;
font-weight: bold;
align-items: center;
width: 150px;
justify-content: space-around;
`

export const Arrow = styled.Image`
height: 25px;
width: 30px;
`

export const Pokedex = styled.Text`
 font-size: 18px; 
 color: white;
`
export const Id = styled.Text`
font-size: 18px; 
color: white; 
padding-Right: 10px;
`
export const ContainerImage = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
export const PokemonImage = styled.Image`
 height: 180px;
 width: 180px;
`
