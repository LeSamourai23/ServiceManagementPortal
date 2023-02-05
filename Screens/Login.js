import React, {useState, useContext} from 'react';
import { SafeAreaView, Image,KeyboardAvoidingView , StyleSheet, View, useWindowDimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../assets/logo.png'
import CustomInput from '../Components/LoginInput';
import LoginButton from '../Components/LoginButton';
import ResetPassButton from '../Components/ResetPassButton';
import { AuthContext } from '../Components/Context';

const Login = ({navigation}) => {

  const {height}= useWindowDimensions();
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  //const { Login } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#04223E','#111214']}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 1.2, y: 1.1 }}
            style={styles.gradient}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} flex={0.7}>
              <View style={styles.logoContainer}>
                <Image
                    style={styles.Logo}
                    source={Logo}
                />
              </View>
              <View style={styles.inputContainer}>
                <CustomInput placeholder={'Enter ID'} value={ID} setValue={setID} secureTextEntry={false}/>
                <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
              </View>
            </KeyboardAvoidingView>
            <View style={styles.loginButtonContainer}>
                <LoginButton text={'Login'}/>
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
    flex:0.22,
    justifyContent:'center',
    alignItems:'center'
  },

  loginButtonContainer:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.65,
  },
});

export default Login;