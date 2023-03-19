import { StyleSheet, Image, Text, SafeAreaView, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import User from '../assets/user.png'
import Notification from '../assets/bell.png'
import {LinearGradient} from 'expo-linear-gradient';
import BugIcon from '../assets/bug.png'
import AuthContextProvider, { AuthContext } from '../store/auth-context';
import Feedback from '../assets/feedback.png'
import Logout from '../assets/logout_b.png'
import NavArrow from '../assets/nav_arrow.png'
import { COLORS } from '../Constants/constants';
import { useContext } from 'react';

const windowWidth = Dimensions.get('window').width;

const Settings = ({navigation}) => {

  const authCtx = useContext(AuthContext)

  return (
    <View style={{backgroundColor:COLORS.PRIMARY_BG, flex:1}}>
         <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: -1 }}
            colors={[COLORS.SECONDARY_LG1, COLORS.SECONDARY_LG2]}
            height={110}
            style={styles.headingContainer}>
            
            <Text style={{fontWeight:'bold', marginTop:70, marginLeft:12, fontSize:30}}>Settings</Text>

        </LinearGradient> 
        <View style={{width:350, flex:0.8, alignSelf:'center', margin:10, marginBottom:40, borderRadius:20}}>
          <Pressable style={styles.settings} onPress={()=> navigation.navigate('Account')}>
            <View style={{flex:0.9, flexDirection:'row'}}>
              <Image source={User} style={{width:40, height:40, margin:10}}/>
              <Text style={{fontSize:17, alignSelf:'center'}}>Account</Text>
            </View>
            <View style={{flex:0.1}}>
              <Image source={NavArrow} style={{width:20, height:20, marginTop:20, marginRight:-30}}/>
            </View>
          </Pressable>
          <Pressable style={styles.settings} onPress={()=> navigation.navigate('Notifications')}>
            <View style={{flex:0.9, flexDirection:'row'}}>
              <Image source={Notification} style={{width:35, height:35, margin:10, marginLeft:12}}/>
              <Text style={{fontSize:17, alignSelf:'center'}}>Notifications</Text>
            </View>
            <View style={{flex:0.1}}>
              <Image source={NavArrow} style={{width:20, height:20, marginTop:20, marginRight:-30}}/>
            </View>
          </Pressable>
          <Pressable style={styles.settings}>
            <View style={{flex:0.9, flexDirection:'row'}}>
              <Image source={BugIcon} style={{width:32, height:32, margin:10, marginLeft:14}}/>
              <Text style={{fontSize:17, alignSelf:'center'}}>Report a bug</Text>
            </View>
            <View style={{flex:0.1}}>
              <Image source={NavArrow} style={{width:20, height:20, marginTop:20, marginRight:-30}}/>
            </View>
          </Pressable>
          <Pressable style={styles.settings}>
            <View style={{flex:0.9, flexDirection:'row'}}>
              <Image source={Feedback} style={{width:32, height:32, margin:10, marginTop:13}}/>
              <Text style={{fontSize:17, alignSelf:'center'}}>Send Feedback</Text>
            </View>
            <View style={{flex:0.1}}>
              <Image source={NavArrow} style={{width:20, height:20, marginTop:20, marginRight:-30}}/>
            </View>
          </Pressable>
          <Pressable style={styles.settings} onPress={authCtx.logout}>
            <View style={{flex:0.9, flexDirection:'row'}}>
              <Image source={Logout} style={{width:32, height:32, margin:10, marginTop:13, marginLeft:13}}/>
              <Text style={{fontSize:17, alignSelf:'center'}}>Log Out</Text>
            </View>
            <View style={{flex:0.1}}>
              <Image source={NavArrow} style={{width:20, height:20, marginTop:20, marginRight:-30}}/>
            </View>
          </Pressable>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({

    headingContainer:{
        flex:0.145
    },

    settings:{
      backgroundColor:'white', 
      width:windowWidth-20, 
      flexDirection:'row',
      height:60, 
      margin:2, 
      justifyContent:'space-between',
      alignSelf:'center',
      borderRadius:15,
      flexDirection:'row',
      shadowOpacity:1,
      shadowRadius:6,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowColor:'#D6D8DC'
    },

    settings2:{
      backgroundColor:'white', 
      width:windowWidth-20, 
      flexDirection:'row',
      height:60, 
      margin:2, 
      alignSelf:'center',
      borderRadius:15,
      flexDirection:'row',
      shadowOpacity:1,
      shadowRadius:6,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowColor:'#D6D8DC'
    }
})