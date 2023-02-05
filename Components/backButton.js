import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from '../assets/arrow.png'

const backButton = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image source={Back} style={style}/>
    </TouchableOpacity>
  )
}

export default backButton

const styles = StyleSheet.create({})