import { StyleSheet, Text, Pressable, Image } from 'react-native'
import React from 'react'

const HomescreenButtons = ({image, onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <Image source={image} style={{height:35, width:35}}/>
    </Pressable>
  )
}

export default HomescreenButtons

const styles = StyleSheet.create({})