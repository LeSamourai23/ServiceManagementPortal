import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../Screens/Login';
import ResetPass from '../Screens/ResetPass';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Login}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Reset Password'} component={ResetPass}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;