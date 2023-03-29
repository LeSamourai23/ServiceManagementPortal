import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import InAppNav from './Navigations/InAppNav';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import ResetPass from './Screens/ResetPass';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={ResetPass} />
    </Stack.Navigator>
  );
}

function Navigation() {

  const authCtx = useContext(AuthContext);

  return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack/>}
      </NavigationContainer>
  );
}

function AuthenticatedStack() {

  const authCtx = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={InAppNav} options={{
         headerShown:false}}/>
    </Stack.Navigator>
  );
}

function Root () {

  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext)

  useEffect(() => {
    async function fetchToken() {
        const storedToken = await AsyncStorage.getItem('token')

        if (storedToken) {
            authCtx.authenticate(storedToken)
        }

        setIsTryingLogin(false)
    }

    fetchToken();
  }, [])

  if (isTryingLogin) {
    return <AppLoading/>
  }

  return <Navigation/>
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root/>
      </AuthContextProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
