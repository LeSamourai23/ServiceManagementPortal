import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

const ManpowerManagement = () => {
  return (
    <View style={{backgroundColor:'#eaeff2', flex:1}}>
        <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: -1 }}
            colors={['#F0B517', '#FFF17C']}
            height={110}
            style={styles.headingContainer}>
            
            <Text style={{fontWeight:'bold', marginTop:75, marginLeft:12, fontSize:25}}>Manpower Management</Text>

        </LinearGradient>

    </View>
  )
}

export default ManpowerManagement

const styles = StyleSheet.create({

    headingContainer:{
        
    }
})