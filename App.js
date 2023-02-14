import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react';
import Login from './Screens/Login';
import LoginPageNav from './Navigations/LoginPageNav'
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './Screens/Homescreen';
import { AuthContext } from './Components/Context';
import InAppNav from './Navigations/InAppNav';
import CoreNavigator from './Navigations/CoreNav';

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    Login: () => {
      setUserToken('abc')
      setIsLoading(false)
    },
    LogOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
    ResetPass: () => {
      setUserToken('xyz')
      setIsLoading(false)
    }
  }), []);

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  if( isLoading ) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken !== null ? (
          <InAppNav/>
      )
      
      :
        <CoreNavigator/>
      }
    </NavigationContainer> 
    </AuthContext.Provider> 

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
