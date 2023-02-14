import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Filler = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default Filler

const styles = StyleSheet.create({
    container:{
        height:20,
        width:350,
        borderRadius: 15,
        backgroundColor: '#eaeff2',
        opacity:0.54,
        padding:20,
        marginBottom:25,
        color:'black',
        alignSelf:'center',
        marginTop:2
      },
})
