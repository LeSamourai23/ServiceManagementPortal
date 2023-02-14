import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from '../assets/arrow.png'

const BackButton = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image source={Back} style={style}/>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({})