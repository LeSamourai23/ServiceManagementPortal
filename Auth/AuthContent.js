import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import ResetPassButton from '../Components/ResetPassButton';
import AuthForm from './AuthForm';
import { COLORS } from '../Constants/constants';
import { useNavigation } from '@react-navigation/native'

function AuthContent({ isLogin, onAuthenticate }) {

  const navigation = useNavigation()

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate('Signup')
    }
    else {
      navigation.navigate('Login')
    } 
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <LinearGradient colors={[COLORS.LOGIN_LG1, COLORS.LOGIN_LG2]}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <ResetPassButton  onPress={switchAuthModeHandler} text={isLogin? 'Reset Password?' : 'Back to Login'}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </ResetPassButton>
      </View>
      </LinearGradient>
    </View>
      );
}

export default AuthContent;

const styles = StyleSheet.create({
    authContent: {
      flex:1,
    },
    buttons: {
      flex:0.1,
      justifyContent:'center',
      alignItems:'center',
    },
    
  gradient:{
    flex:1
  },
  });
  