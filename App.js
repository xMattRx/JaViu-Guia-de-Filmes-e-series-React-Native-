/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StatusBar } from "react-native";
import { colors, textColor } from './src/assets/colors';
import HomeScreen from './src/views/HomeScreen';

export default props => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={textColor.white} />
      <View style={{ flex: 1, backgroundColor: textColor.white }}>
        <HomeScreen />
      </View>
    </>
  )
}