import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfilePic from '../assets/ProfilePhoto.png'
import edit from '../assets/edit-white.png'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center', marginTop:-70}}>
        <Image source={ProfilePic} style={styles.ProfilePic}/>
        <Text style={{fontSize:20, marginTop:15, fontWeight:'bold'}}>Surya Tractors</Text> 
        <Text>ROLE_DEALER</Text>
      </View>
      <View style={{alignItems:'center', marginTop:60}}>
        <TouchableOpacity style={{width:320, height:60, backgroundColor:'black', alignItems:'center', justifyContent:'center', borderRadius:12, flexDirection:'row'}}>
          <Image source={edit} style={{width:20, height:20, marginRight:10}}/>
          <Text style={{color:'white'}}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#eaeff2',
    alignItems:'center',
    justifyContent:'center'
  },

  ProfilePic:{
    width:130,
    height:130
  }
})