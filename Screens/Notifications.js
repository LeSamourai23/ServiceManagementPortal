import { StyleSheet, Image, Text, ScrollView, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import User from '../assets/user.png'
import Notification from '../assets/bell.png'
import {LinearGradient} from 'expo-linear-gradient';
import BugIcon from '../assets/bug.png'
import Feedback from '../assets/feedback.png'
import Logout from '../assets/logout_b.png'
import NavArrow from '../assets/nav_arrow.png'
import BackButton from '../Components/backButton';

const windowWidth = Dimensions.get('window').width;

const Notifications = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#eaeff2', flex:1}}>
         <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: -1 }}
            colors={['#F0B517', '#FFF17C']}
            height={330}
            style={styles.headingContainer}>
            <BackButton style={{width:30, height:30, marginTop:38, marginLeft:10}} onPress={()=> navigation.navigate('Homescreen')}/>
            <Text style={{fontWeight:'bold', marginTop:5, marginLeft:12, fontSize:30}}>Notifications</Text>

        </LinearGradient> 
        <ScrollView style={{flex:0.85}}>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
          <View style={styles.Notification}></View>
        </ScrollView>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({

    headingContainer:{
        flex:0.15
    },

    Notification:{
      width:350,
      height:80,
      backgroundColor:'white',
      alignSelf:'center',
      margin:10,
      borderRadius:10
    }
})