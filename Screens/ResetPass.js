import React, {useState} from 'react';
import { SafeAreaView, Image,KeyboardAvoidingView , StyleSheet, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Text, ImageBackground, useWindowDimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/logo.png'
import CustomInput from '../Components/LoginInput';
import LoginButton from '../Components/LoginButton';
import ResetPassButton from '../Components/ResetPassButton';

const ResetPass = ({navigation}) => {

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <LinearGradient colors={["#00549A", "#2C75B2"]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 1.2, y: 1.1 }}
            style={styles.gradient}>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.Logo}
                    source={Logo} 
                    elevation={5} 
                /> 
            </View>

            <View style={styles.inputContainer}>
                <CustomInput placeholder={'Enter ID'} secureTextEntry={false}/>
                <CustomInput placeholder={'Old Password'} secureTextEntry={true}/>
                <CustomInput placeholder={'New Password'} secureTextEntry={true}/>
                <Text style={{color:'#BDBDBD', width:300, alignSelf:'center', textAlign:'center'}}>Password should contain: A Upper Case Character, a Special Character and a Number</Text>
                <CustomInput placeholder={'Confirm Password'} secureTextEntry={true}/>
            </View>

            <View style={styles.buttonContainer}>
                <LoginButton text={'Reset Password'} onPress={console.log("hello")}/>
                <ResetPassButton text={'Back to Login'} onPress={()=> navigation.navigate('Login')}/>
            </View>

        </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default ResetPass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#05345F'
      },
    
      gradient:{
        flex:1
      },
    
      Logo: {
        width: 170,
        height: 170,
        aspectRatio: 860/304,
        shadowColor: '#000',
        shadowOffset: { width: 6, height: 4 },
        shadowOpacity: 0.25,
      },
      
      logoContainer: {
        flex: 0.3,
        alignItems:'center',
        justifyContent:'center',
      },
      
      inputContainer:{
        flex:0.4,
        justifyContent:'center',
        alignItems:'center'
      },

      buttonContainer:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center'
      },
})