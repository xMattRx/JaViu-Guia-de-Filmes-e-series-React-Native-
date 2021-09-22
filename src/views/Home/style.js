/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const Header = styled.View`
    background-Color: #d53b47;
    height: 50px;
    width: 100%;
    justify-content: center;
    padding-Left: 30px;
    padding-Bottom: 10px;
`
export const TextHeader = styled.Text`
    color: #FFF;
    font-Weight: bold;
    font-Size: 23px;
`

export const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
`
export const List = styled.View`

flex-Direction: ${props => props.search ? 'row' : 'row'};
width: 100%;
height: 100%;
background-color: #2e292d;
flex-Wrap: wrap;
justify-Content: center;
align-items: center;
`
