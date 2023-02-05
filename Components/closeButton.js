import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Close from '../assets/close.png'

const CloseButton = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
        <Image source={Close} style={{width:20, height:20}} />
    </TouchableOpacity>
  )
}

export default CloseButton

const styles = StyleSheet.create({})