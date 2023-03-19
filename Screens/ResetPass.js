import AuthContent from '../Auth/AuthContent';
import { useContext, useState } from 'react'
import LoadingOverlay from '../Components/LoadingOverlay';
import { createUser } from '../utilities/auth'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function ResetPass() {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const authCtx = useContext(AuthContext)

  async function signUpHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    }
    catch (error) {
      Alert.alert('Could not create new user. Check your credentials or try again later')
      setIsAuthenticating(false);
    }

  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating User.."}/>
  } 

  return <AuthContent onAuthenticate={signUpHandler}/>;
}

export default ResetPass;
