import { StyleSheet, Image, Text, ScrollView, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import BackButton from '../Components/backButton';
import { COLORS } from '../Constants/constants';
import { useRoute } from '@react-navigation/native';

const Notifications = ({navigation}) => {

  const route = useRoute();
  const prevScreen = route.params?.prevScreen;

  const onPress= () =>{
    if(prevScreen==='Homescreen'){
      navigation.navigate('Homescreen')
    }
    else if(prevScreen==='Settings'){
      navigation.navigate('Settings')
    }
  }

  return (
    <View style={{backgroundColor:COLORS.PRIMARY_BG, flex:1}}>
         <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: -1 }}
            colors={[COLORS.SECONDARY_LG1, COLORS.SECONDARY_LG2]}
            height={330}
            style={styles.headingContainer}>
            <BackButton style={{width:30, height:30, marginTop:38, marginLeft:10}} onPress={onPress}/>
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