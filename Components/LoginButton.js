import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

const LoginButton = ({onPress, text}) => {
  return (
        <LinearGradient
              colors={['#F0B517', '#FFF17C']}
              style={styles.linearGradient}
              start={{y: 0.0, x: 1.0}}
              end={{y: 1.0, x: 0.0}}>
          <TouchableOpacity style={styles.button} onPress={onPress} underlayColor='#E1B100'>
            <Text style={styles.loginText}>{text}</Text>
          </TouchableOpacity>
        </LinearGradient>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    button:{
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 350,
      height: 60,
      },
    
      loginText:{
        color: "#111214",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft : 10,
        paddingRight : 10
      },

      linearGradient:{
        width: 350,
        borderRadius: 50,
      }
})