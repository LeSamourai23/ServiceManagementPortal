import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

const Settings = () => {
  return (
    <View style={{backgroundColor:'#eaeff2', flex:1}}>
        <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: -1 }}
            colors={['#F0B517', '#FFF17C']}
            height={110}
            style={styles.headingContainer}>
            
            <Text style={{fontWeight:'bold', marginTop:70, marginLeft:12, fontSize:30}}>Settings</Text>

        </LinearGradient>

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({

    headingContainer:{
        
    }
})