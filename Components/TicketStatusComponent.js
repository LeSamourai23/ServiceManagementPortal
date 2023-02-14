import { StyleSheet, Text, View, Pressable, LayoutAnimation, Image } from 'react-native'
import React, {useState} from 'react'
import Calendar from '../assets/calendar.png'

const StatusComponent = ({HeadingText, Date, Time}) => {

  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    LayoutAnimation.configureNext({
      duration: 1000,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
    setVisible(!visible);
  };


  return (
  <View>
    <Pressable onPress={toggleDropdown} style={styles.pressable}>
      <View style={{margin:7.5}}>
        <Text style={{fontSize:20}}>{HeadingText}</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:2, marginLeft:12}}>
        <Image source={Calendar} style={{width:17, height:17}}/>
        <Text style={{fontSize:14, marginLeft:10, fontWeight:'Light'}}>{Date}</Text>
        <Text style={{fontSize:14, marginLeft:6}}>{Time}</Text>
      </View>
    </Pressable>
    {visible && (
        <View style={styles.dropdown}>
        </View>
      )}
  </View>
  )
}

export default StatusComponent

const styles = StyleSheet.create({
    pressable:{
        backgroundColor:'white',
        width:350,
        height:80,
        borderRadius:20,
        alignSelf:'center',
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
    },

    dropdown:{
        backgroundColor:'white',
        width:350,
        height:200,
        alignSelf:'center',
        marginTop:0,
        marginBottom:20
    }
})