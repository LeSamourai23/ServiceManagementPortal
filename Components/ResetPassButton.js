import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const ResetPassButton = ({onPress, text}) => {
  return (
    <View>
        <Pressable style={styles.resetPass} onPress={onPress}>
            <Text style={styles.resetPassText}>{text}</Text>
        </Pressable>
    </View>
  )
}

export default ResetPassButton

const styles = StyleSheet.create({
    resetPass:{
        height:60,
        width:200,
        opacity:1,
        marginTop:15,
      },
    
      resetPassText:{
        color: "#BDBDBD",
        fontSize: 14,
        textAlign: 'center',
      }
})