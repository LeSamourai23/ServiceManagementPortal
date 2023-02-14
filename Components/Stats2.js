import { Alert, StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useCallback} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import Modal  from 'react-native-modal';

const StatsClosed = ({text, textStyle, number}) => {

  const [isDown, setDown] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [flexWrap, setFlexWrap] = useState('wrap');

  const handlePressIn = useCallback(()=> {
    setDown(true);
  })
  const handlePressOut = useCallback(()=> {
    setDown(false);
  })

  const gradColors= isDown? [ '#d3d7da', '#faffff'] : ['#faffff', '#d3d7da']

  return (
    <View style={styles.centeredView}>
    <Modal
      transparent={true}
      visible={modalVisible}
      hasBackdrop='true'
      animationInTiming={600}
      animationOutTiming={600}
      backdropOpacity={0.3}
      backdropColor='black'
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Text style={{fontWeight:'bold', fontSize:20, color:'#D41455', textAlign:'center',}}>Closed by dealer</Text>
            <Text style={{fontSize:30, marginTop:5, alignSelf:"center"}}>1</Text>
          </View>
          <View style={{width:250, height:2, backgroundColor:'gray', opacity:0.4}}></View>
          <View>
            <Text style={{fontWeight:'bold', fontSize:20, color: '#FF5722', textAlign:'center',}}>Closed Ticket</Text>
            <Text style={{fontSize:30, marginTop:5, alignSelf:"center"}}>1</Text>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.statsUpperShadow}>
        <View style={styles.statsBottomShadow}>
          <LinearGradient start={{ x: -1, y: -1 }}
                end={{ x: 2, y: 2 }}
                colors={gradColors} 
                style={styles.container}>
              <Text style={textStyle}>{text}</Text>
              <Text style={{fontSize:30, marginTop:5}}>{number}</Text>
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
  )
} 

export default StatsClosed

const styles = StyleSheet.create({

    statsUpperShadow:{
        shadowOpacity:1,
        shadowRadius:6,
        shadowOffset: {
          width: -6,
          height: -6,
        },
        shadowColor:'#FFFFFF'
    },

    statsBottomShadow:{
        shadowOpacity:1,
        shadowRadius:6,
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowColor:'#c5c9cb'
    },

    container:{
        height:75,
        width:170,
        marginRight:5,
        marginLeft:5,
        marginBottom:50,
        padding:5,
        backgroundColor: '#eaeff2',
        borderRadius: '15%',
        alignItems:'center',
    },

    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      flex:1
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:300,
      height:450,
      justifyContent:'space-evenly'
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width:150
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },

    buttonClose: {
      backgroundColor: 'white'
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize:18
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
})