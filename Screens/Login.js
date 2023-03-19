import AuthContent from '../Auth/AuthContent';
import { useContext, useState } from 'react'
import LoadingOverlay from '../Components/LoadingOverlay';
import { login } from '../utilities/auth'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function Login() {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const authCtx= useContext(AuthContext)

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try{
      const token = await login(email, password)
      authCtx.authenticate(token);
    } catch(error) {
      Alert.alert('Authentication Error. Please enter valid credentials or try later.')
      setIsAuthenticating(false);
    }

  }

   if (isAuthenticating) {
    return <LoadingOverlay message={"Logging In..."}/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default Login;
