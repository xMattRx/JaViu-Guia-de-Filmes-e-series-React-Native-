/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { textColor } from '../colors';

const fontFamily = StyleSheet.create({
    bold: {
        fontFamily: '/Fonts/SF-Pro-Display-Bold'
    },
});

export default StyleSheet.create({
    container: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: '700',
        color: textColor.black
    },
    subHeading: {
        fontSize: 16,
        color: textColor.grey,
    },
    title: {
        fontSize: 26,
        color: textColor.white,
        ...fontFamily.bold,
    },
    number: {
        fontSize: 12,
        color: textColor.number,
        ...fontFamily.bold,
    },
});