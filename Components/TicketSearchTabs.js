import React, {useState} from 'react';
import {Alert, StyleSheet, Text, Pressable, View, TouchableOpacity, ScrollView, Image} from 'react-native';

const TicketSearchTabs = ({TicketNum, CreatedDate, DealerCode, Status, CustName, MobileNo, MachineNo, Model, Criticality, onPress}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressButton = () =>{
    onPress();
    toggleModal();

  }
  
  return (
    <View style={styles.centeredView}>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor:'#F7F5F8',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection:'row',
    borderRadius: 12,
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding: 10,
    elevation: 2,
    width:350,
    height:120,
    marginBottom:10,
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowOffset: {
        width: 0,
        height: 2,
  },
},

});

export default TicketSearchTabs;