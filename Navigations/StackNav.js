import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Homescreen from '../Screens/Homescreen';
import Notifications from '../Screens/Notifications';
import Account from '../Screens/Account'
import FullTicketDetails from '../Screens/FullTicketDetails';
import {LinearGradient} from 'expo-linear-gradient';

const Stack = createStackNavigator();

function StackNavigator({navigation, route}) {

  const tabHiddenRoutes = ["Account", "Notifications", "Full Ticket Details"];

  React.useLayoutEffect(() => {
    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
      navigation.setOptions({tabBarStyle: {
        display:'none'},
        headerStyle:{
          display:'none'
        }});
     }else{
     navigation.setOptions({tabBarStyle: {
        position: 'absolute',
        height:83,
        borderRadius:0,
        opacity:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.7)',
    }});
    }
}, [navigation, route]);

  

  return (
    <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName={Homescreen}>
      <Stack.Screen name={'Homescreen'} component={Homescreen} options={{headerShown: false}}/>
      <Stack.Screen name={'Account'} component={Account}/>
      <Stack.Screen name={'Notifications'} component={Notifications}/>
      <Stack.Screen name={'Full Ticket Details'} component={FullTicketDetails} options={{headerShown: false}}/> 
    </Stack.Navigator>
  );
}

export default StackNavigator;