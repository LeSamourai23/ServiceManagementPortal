import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const customInput = ({value, onUpdateValue, placeholder, secureTextEntry, isInvalid}) => {
  return (
    <View>
        <TextInput value={value} onChangeText={onUpdateValue} style={[styles.container, isInvalid && styles.inputInvalid]} placeholder={placeholder}  placeholderTextColor='gray' secureTextEntry={secureTextEntry} clearButtonMode='always'/>
    </View>
  )
}

export default customInput

const styles = StyleSheet.create({
    container:{
        height:60,
        width:windowWidth-30,
        borderRadius: 15,
        backgroundColor: 'white',
        opacity:0.7,
        padding:20,
        margin:12,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
        color:'black',
        justifyContent:'center',
        alignItems:'center',
        fontSize:18
      },

    inputInvalid:{
      height:60,
      width:windowWidth-30,
      borderRadius: 15,
      backgroundColor: 'white',
      borderWidth:5,
      borderColor:'red',
      opacity:0.7,
      padding:20,
      margin:12,
      shadowColor: '#000',
      shadowOffset: { width: 4, height: 6 },
      shadowOpacity: 0.2,
      color:'black',
      justifyContent:'center',
      alignItems:'center',
      fontSize:18
    }


})