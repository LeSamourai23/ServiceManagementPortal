import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const customInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View>
      <TextInput value={value} onChangeText={setValue} style={styles.container} placeholder={placeholder}  placeholderTextColor='white' secureTextEntry={secureTextEntry}/>
    </View>
  )
}

export default customInput

const styles = StyleSheet.create({
    container:{
        height:60,
        width:350,
        borderRadius: 30,
        backgroundColor: 'black',
        opacity:0.4,
        padding:20,
        margin:12,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.65,
        color:'white',
      },
})