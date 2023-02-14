import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import InAppNav from './InAppNav';
import LoginPageNav from './LoginPageNav'
import Login from '../Screens/Login';


const Stack = createStackNavigator();

function CoreNavigator({navigation, route}) {

  return (
    <Stack.Navigator screenOptions={{headerShown: false, headerShadowVisible: false,  headerBackTitle: ''}} initialRouteName={'Login'}>
      <Stack.Screen name={'Login'} component={LoginPageNav}/>
      <Stack.Screen name={'Main App'} component={InAppNav}/>
    </Stack.Navigator>
  );
}

export default CoreNavigator;