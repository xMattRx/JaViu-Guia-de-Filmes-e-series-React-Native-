/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StatusBar } from "react-native";
import { colors, textColor } from './src/assets/colors';
import HomeScreen from './src/views/Home/HomeScreen';

export default props => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#d53b47' />
      <HomeScreen />
    </>
  )
}