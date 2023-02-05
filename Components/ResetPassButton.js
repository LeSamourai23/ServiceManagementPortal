import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ResetPassButton = ({onPress, text}) => {
  return (
    <View>
        <TouchableOpacity style={styles.resetPass} onPress={onPress} underlayColor='#E1B100' secureTextEntry>
            <Text style={styles.resetPassText}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ResetPassButton

const styles = StyleSheet.create({
    resetPass:{
        height:60,
        width:350,
        opacity:1,
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
      },
    
      resetPassText:{
        color: "#BDBDBD",
        fontSize: 14,
        textAlign: 'center',
        paddingLeft : 10,
        paddingRight : 10
      }
})