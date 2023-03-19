import React, {useState, useContext} from 'react';
import { SafeAreaView, Image,KeyboardAvoidingView , StyleSheet, View, Dimensions, Text } from 'react-native';
import Logo from '../assets/logo.png'
import CustomInput from '../Components/LoginInput';
import LoginButton from '../Components/LoginButton';


function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.container}>
            {isLogin && (
              <View style={styles.logoContainer}>
                <Image
                    style={styles.Logo}
                    source={Logo}
                />
                  <Text style={{color:'black', opacity:0.6, fontSize:35, fontWeight:'bold', marginTop:20}}>Agriculture</Text>
              </View>
            )}

            {!isLogin && (
              <View style={styles.logoContainer2}>
                <Image
                    style={styles.Logo}
                    source={Logo}
                />
              </View>
            )}

   {isLogin &&(
    <KeyboardAvoidingView style={styles.inputContainer} behavior={Platform.OS === "ios" ? "padding" : "height"} flex={0.7}>
          
          <CustomInput
            placeholder={'Enter ID'}
            onUpdateValue={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
          />
        {isLogin && (
          <CustomInput
            placeholder={'Password'}
            onUpdateValue={updateInputValueHandler.bind(this, 'password')}
            secureTextEntry={true}
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
          />
            )}
          </KeyboardAvoidingView>
   )}          

   {!isLogin && (
    <KeyboardAvoidingView style={styles.inputContainer2} behavior={Platform.OS === "ios" ? "padding" : "height"} flex={0.7}>
          
          <CustomInput
            placeholder={'Enter ID'}
            onUpdateValue={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
          />

          <CustomInput
            placeholder={'Old Password'}
            secureTextEntry='false'
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />

          <CustomInput
            placeholder={'New Password'}
            onUpdateValue={updateInputValueHandler.bind(this, 'password')}
            secureTextEntry='true'
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
          />

          <Text style={{color:'#BDBDBD', width:300, alignSelf:'center', textAlign:'center'}}>Password should contain: A Upper Case Character, a Special Character and a Number</Text>

          <CustomInput
            placeholder="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secureTextEntry='true'
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />

          </KeyboardAvoidingView>
   )}


          <View style={isLogin? styles.loginButtonContainer : styles.resetButtonContainer}>
            <LoginButton onPress={submitHandler} text={isLogin? 'Login' : 'Reset Password'}>
              {isLogin ? 'Log In' : 'Sign Up'}
            </LoginButton>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  logoContainer2: {
    flex: 0.3,
    alignItems:'center',
    justifyContent:'center',
  },

  inputContainer:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center'
  },

  inputContainer2:{
    flex:0.4,
    justifyContent:'center',
    alignItems:'center'
  },

  loginButtonContainer:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    height: 60,
  },

  resetButtonContainer:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default AuthForm;