import React, {useState, useContext} from 'react';
import { SafeAreaView, Image,KeyboardAvoidingView , StyleSheet, View, Dimensions, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/logo.png'
import CustomInput from '../Components/LoginInput';
import LoginButton from '../Components/LoginButton';
import ResetPassButton from '../Components/ResetPassButton';
import { AuthContext } from '../Components/Context';

const Login = ({navigation}) => {

  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  //const { Login } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
        <LinearGradient colors={["#00549A", "#2C75B2"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} flex={0.7}>
              <View style={styles.logoContainer}>
                <Image
                    style={styles.Logo}
                    source={Logo}
                />
                <Text style={{color:'black', opacity:0.6, fontSize:35, fontWeight:'bold', marginTop:20}}>Agriculture</Text>
              </View>
              <View style={styles.inputContainer}>
                <CustomInput placeholder={'Enter ID'} value={ID} setValue={setID} secureTextEntry={false}/>
                <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
              </View>
            </KeyboardAvoidingView>
              <View style={styles.loginButtonContainer}>
                <LoginButton text={'Login'} onPress={()=> navigation.navigate('Main App')}/>
                <ResetPassButton text={'Reset Password?'} onPress={()=> navigation.navigate('Reset Password')}/>
              </View>
        </LinearGradient>       
    </View>

  );
};

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
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6
  },
  logoContainer: {
    flex: 0.78,
    alignItems:'center',
    justifyContent:'center',
  },

  inputContainer:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center'
  },

  loginButtonContainer:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    height: 60,
  },
});

export default Login;