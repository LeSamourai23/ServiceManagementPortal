import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screens/Homescreen';
import { View, Text, StyleSheet, Image, Icon } from 'react-native'
import ManpowerManagement from '../Screens/ManpowerManagement'
import Settings from '../Screens/Settings'
import FullTicketDetails from '../Screens/FullTicketDetails';
import StackNavigator from './StackNav';
import StackNavigatorSettings from './StackNavSettings';
import {LinearGradient} from 'expo-linear-gradient';
import HomescreenIcon from '../assets/Homescreen.png'
import ManpowerIcon from '../assets/worker.png'
import SettingsIcon from '../assets/Settings.png'
import HomescreenIcon_f from '../assets/Homescreen(f).png'
import ManpowerIcon_f from '../assets/worker(f).png'
import AuthContextProvider, { AuthContext } from '../store/auth-context';
import SettingsIcon_f from '../assets/Settings(f).png'
import { COLORS } from '../Constants/constants';

const Tab = createBottomTabNavigator();

function InAppNav() {
  return (
    <Tab.Navigator screenOptions={()=>({
        headerShown:false,
        headerStyle: styles.headerStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: {
        },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'black',
        tabBarShowLabel: true,
        tabBarBackground: () => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}
                colors={[COLORS.LOGIN_LG1, COLORS.LOGIN_LG2]}
                height={83}
              />
        )
    })
    }>
      <Tab.Screen name="Home" component={StackNavigator} options={{headerShown:false,tabBarIcon:({focused})=> (<Image source={focused? HomescreenIcon_f : HomescreenIcon} style={{width:30, height:30}} />)}}/>
      <Tab.Screen name="Manpower Management" component={ManpowerManagement} options={{tabBarIcon:({focused})=> (<Image source={focused? ManpowerIcon_f:ManpowerIcon} style={{width:30, height:30}}/>)}}/>
      <Tab.Screen name="Settings" component={StackNavigatorSettings} options={{tabBarIcon:({focused})=> (<Image source={focused? SettingsIcon_f:SettingsIcon} style={{width:30, height:30}}/>)}}/>
    </Tab.Navigator>
  );
}

export default InAppNav;

const styles = StyleSheet.create({
    tabBarStyle:{
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
    },

    headerStyle:{
      height:100,
      
    }
})