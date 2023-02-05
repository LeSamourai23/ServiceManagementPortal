import { Alert, StyleSheet, Text, View,  Modal, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useCallback} from 'react'
import {LinearGradient} from 'expo-linear-gradient';

const Stats = ({text, textStyle, number}) => {

  const [isDown, setDown] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
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

export default Stats

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
    },
    modalView: {
      margin: 80,
      marginTop:250,
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
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
})