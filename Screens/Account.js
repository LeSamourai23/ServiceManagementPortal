import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfilePic from '../assets/ProfilePhoto.png'
import edit from '../assets/edit-white.png'
import SignOutIcon from '../assets/SignOut.png'
import {LinearGradient} from 'expo-linear-gradient';
import BackButton from '../Components/backButton'
import { COLORS } from '../Constants/constants'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
          <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: -1 }}
            colors={[COLORS.SECONDARY_LG1, COLORS.SECONDARY_LG2]}
            height={330}
            style={styles.headingContainer}>
            <BackButton style={{width:30, height:30, marginTop:38, marginLeft:10}} onPress={()=> navigation.navigate('Homescreen')}/>
            <Text style={{fontWeight:'bold', marginTop:5, marginLeft:12, fontSize:30}}>Account </Text>

        </LinearGradient> 
      <View style={{alignItems:'center', justifyContent:'center', flex:0.87}}>
        <Image source={ProfilePic} style={styles.ProfilePic}/>
        <Text style={{fontSize:20, marginTop:15, fontWeight:'bold'}}>Surya Tractors</Text> 
        <Text>ROLE_DEALER</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

  headingContainer:{
    flex:0.13
  },

  container:{
    flex:1,
    backgroundColor:COLORS.PRIMARY_BG
  },

  ProfilePic:{
    width:130,
    height:130,
  }
})